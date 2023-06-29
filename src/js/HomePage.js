import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: "HomePage",
    data()
    {
        return {
            postLists: [],
            categoryLists: [],
            searchKeywords: "",
            tokenStatus: false
        }
    },
    computed: {
        ...mapGetters(["storeToken", "storeUserData"])
    },
    methods: {
        getPostData()
        {
            axios.get("http://localhost:8000/api/post/data").then((response) =>
            {
                this.postLists = response.data.post;
                for (let i = 0; i < this.postLists.length; i++) {
                    const postList = this.postLists[i];
                    postList.image = postList.image == null ?
                        `http://localhost:8000/defaultImage/default.jpg` :
                        `http://localhost:8000/storage/postImage/${postList.image}`;
                }
            });
        },
        getCategoryData()
        {
            axios.get("http://localhost:8000/api/post/categoryData").then((response) =>
            {
                this.categoryLists = response.data.category;
            }).catch((error) => console.log(error));
        },
        search()
        {
            axios.post("http://localhost:8000/api/post/search", {
                key: this.searchKeywords
            }).then((response) =>
            {
                this.postLists = response.data.postSearchData;
                for (let i = 0; i < this.postLists.length; i++) {
                    const postList = this.postLists[i];
                    postList.image = postList.image == null ?
                        `http://localhost:8000/defaultImage/default.jpg` :
                        `http://localhost:8000/storage/postImage/${postList.image}`;

                }
            }).catch((error) => console.log(error));
            this.searchKeywords = "";
        },
        searchCategory(categorySearchKey)
        {
            axios.post("http://localhost:8000/api/category/search", {
                key: categorySearchKey
            }).then((response) =>
            {
                this.postLists = response.data.result;
                for (let i = 0; i < this.postLists.length; i++) {
                    const postList = this.postLists[i];
                    postList.image = postList.image == null ?
                        `http://localhost:8000/defaultImage/default.jpg` :
                        `http://localhost:8000/storage/postImage/${postList.image}`;
                }
            }).catch(error => console.log(error));
        },
        directNews(postId)
        {
            this.$router.push({
                name: "newsDetail",
                query: {
                    id: postId
                }
            });
        },
        homePage()
        {
            console.log(this.$route.name);
            this.$route.name == "homePage" ?
                history.back() :
                this.$router.push({
                    name: "homePage"
                });
        },
        loginPage()
        {
            this.$router.push({
                name: "loginPage"
            });
        },
        checkToken()
        {
            if (this.storeToken != null && this.storeToken != undefined && this.storeToken != "") {
                this.tokenStatus = false;
            } else {
                this.tokenStatus = true;
            }
        },
        logout()
        {
            this.$store.dispatch("setToken", null);
            this.loginPage();
        }
    },
    mounted()
    {
        this.checkToken();
        this.getPostData();
        this.getCategoryData();
    },
};
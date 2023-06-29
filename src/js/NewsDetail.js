import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: "NewsDetail",
    data()
    {
        return {
            post: [],
            postId: 0,
            postViewCount: 0
        }
    },
    computed: {
        ...mapGetters(["storeToken", "storeUserData"])
    },
    methods: {
        newDetails()
        {
            this.postId = this.$route.query.id;
            axios.post("http://localhost:8000/api/detailnews", {
                id: this.postId
            })
                .then((response) =>
                {
                    this.post = response.data.new;
                    this.post.image = this.post.image == null ?
                        `http://localhost:8000/defaultImage/default.jpg` :
                        `http://localhost:8000/storage/postImage/${this.post.image}`;
                })
                .catch(error => console.log(error));
        },
        homePage()
        {
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
        logout()
        {
            this.$store.dispatch("setToken", null);
            this.loginPage();
        },
        viewCount()
        {
            axios.post("http://localhost:8000/api/post/viewCount", {
                postId: this.$route.query.id,
                userId: this.storeUserData.id
            })
                .then((response) =>
                {
                    this.postViewCount = response.data.actionLog.length;
                })
                .catch(error => console.log(error));
        }
    },

    mounted()
    {
        this.viewCount();
        this.newDetails();
    },
}
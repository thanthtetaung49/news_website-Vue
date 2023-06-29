import axios from "axios"
import { mapGetters } from "vuex";

export default {
    name: "LoginPage",
    data()
    {
        return {
            loginData: {
                email: "",
                password: ""
            },
            validationStatus: false
        }
    },
    computed: {
        ...mapGetters(["storeToken", "storeUserData"])
    },
    methods: {
        loginProcess()
        {
            axios.post("http://localhost:8000/api/login", this.loginData)
                .then((response) =>
                {
                    if (response.data.token == null) {
                        this.validationStatus = true;
                    } else {
                        this.$store.dispatch('setToken', response.data.token);
                        this.$store.dispatch('setUserData', response.data.user);
                        this.homePage();
                    }
                })
                .catch(error => console.log(error));
                this.loginData.email = "";
                this.loginData.password = "";
        },
        homePage()
        {
            this.$router.push({
                name: "homePage"
            });
        }
    },
    mounted()
    {
        console.log(this.storeToken);
    },
}
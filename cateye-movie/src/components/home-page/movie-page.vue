<template>
    <div id="header-inner">
        <movie-header></movie-header>
        <header-placeholder></header-placeholder>
        <movie-shuffling></movie-shuffling>
        <movie-content></movie-content>
        <movie-footer></movie-footer>
    </div>
</template>
<script>
    import "../../assets/css/homePage.css"
    import movieHeader from "../movie-header"
    import movieShuffling from "./movie-shuffling"
    import movieContent from "./movie-content"
    import headerPlaceholder from "../header-placeholder"
    import movieFooter from "../movie-footer"
    import axios from "axios"
    import { mapState } from "vuex"
    export default {
        name: "moviePage",
        components: {
            movieHeader,
            movieShuffling,
            movieContent,
            headerPlaceholder,
            movieFooter
        },
        computed: {
            ...mapState(['moviesList'])
        },
        mounted() {
            var that = this
            axios({
                url: 'http://192.168.1.100:8888/home',
                method: 'post',
                data: { '狗蛋子': '给你大舅主页数据' }
            })
                .then(function (res) {
                    if (res.data.postData) {
                        that.$store.state.moviesList = res.data.postData
                    }
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }

</script>
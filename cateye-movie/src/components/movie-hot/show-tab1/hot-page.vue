<template>
    <div id="app1">
        <hot-header></hot-header>
        <hot-hdplaceholder></hot-hdplaceholder>
        <hot-subnav @tag1="tag1" @tag2="tag2" @tag3="tag3" @tag4="tag4"></hot-subnav>
        <component :is="current"></component>
        <hot-footer></hot-footer>
    </div>
</template>
<script>
    import "../../../assets/css/news-hotNews.a01df872.css"
    import "../../../assets/css/common.4b838ec3.css"
    import axios from "axios"
    import hotHeader from "../../movie-header"
    import hotHdplaceholder from "../../header-placeholder"
    import hotSubnav from "../hot-subnav"
    import hotContainer from "./hot-container"
    import infoPage from "../show-tab2/info-page"
    import previewPage from "../show-tab3/preview-page"
    import photoPage from "../show-tab4/photo-page"
    import hotFooter from "../../movie-footer"
    import { mapState } from "vuex"
    export default {
        name: "hotPage",
        data() {
            return {
                current: "hotContainer"
            }
        },
        computed: {
            ...mapState(['newnews', 'hotnews', 'previewvideos', 'hotvideos', 'newphotos','xinwenzixuns','yugaopians','photopages'])
        },
        mounted() {
            var that = this
            axios({
                url: "http://localhost:3000/hotpage",
                method: "post",
                data: { 'newnews': 'newnews', 'hotnews': 'hotnews', 'previewvideos': 'previewvideos', 'hotvideos': 'hotvideos', 'newphotos': 'newphotos','xinwenzixuns':'xinwenzixuns' ,'yugaopians':'yugaopians','photopages':'photopages'}
            }).then(function (res) {
                console.log(res)
                that.$store.state.newnews = res.data.newnews
                that.$store.state.hotnews = res.data.hotnews
                that.$store.state.previewvideos = res.data.previewvideos
                that.$store.state.hotvideos = res.data.hotvideos
                that.$store.state.newphotos = res.data.newphotos
                that.$store.state.xinwenzixuns = res.data.xinwenzixuns
                that.$store.state.yugaopians = res.data.yugaopians
                that.$store.state.photopages = res.data.photopages
            }).catch(err => {
                console.log(err)
            })
        },
        components: {
            hotHeader,
            hotHdplaceholder,
            hotSubnav,
            hotContainer,
            infoPage,
            previewPage,
            photoPage,
            hotFooter
        },
        methods: {
            tag1(num) {
                console.log(num)
                this.current = num
            },
            tag2(num) {
                console.log(num)
                this.current = num
            },
            tag3(num) {
                console.log(num)
                this.current = num
            },
            tag4(num) {
                console.log(num)
                this.current = num
            }
        }
    }
</script>
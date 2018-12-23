<template>
    <div>
        <header-inner></header-inner>
        <header-placeholder></header-placeholder>
        <subnav></subnav>
        <movie-content></movie-content>
        <movie-footer></movie-footer>
        <button @click='hahaha'>1238912jijio2io1je</button>
    </div>
</template>

<script>
    import '../../assets/css/common.4b838ec3.css'
    import '../../assets/css/movie-list.22f5a22a.css'
    import {mapState,mapActions,mapGetters} from 'vuex'
    import headerInner from '../movie-header'
    import headerPlaceholder from '../header-placeholder'
    import subnav from './subnav'
    import movieContent from './movie-content'
    import movieFooter from '../movie-footer'
    import axios from 'axios'
    export default {
        name: 'movie-list',
        computed:mapState(['moviesList','conditions','pageAll','moviesList2']),
        mounted() {
            var that = this
            axios({
                url: "http://192.168.1.100:8888/films",
                method: "post",
                data: that.conditions
            }).then(function (res) {
                if(res.data.state=200){
                    // console.log(res);
                    that.$store.state.moviesList2=res.data[0]
                    that.$store.state.pageAll=res.data[1]
                    // that.changemoviesList(res.data[0])
                    // that.changepageAll(res.data[1])
                }
            }).catch(function (err) {
                console.log(err);
            })
        },
        components: {
            headerInner,
            subnav,
            headerPlaceholder,
            movieContent,
            movieFooter,
        },
        methods:{
            ...mapActions(["changemoviesList","changepageAll"]),
            toaaa(){
                console.log(this.$store);
            },
            hahaha(){
                console.log(this.moviesList);
            }

        }
    }
</script>
<template>
    <div>
        <movieHeader></movieHeader>
        <headerPlaceholder></headerPlaceholder>
        <movie-banner></movie-banner>
        <movie-container></movie-container>
        <movie-footer></movie-footer>
    </div>
</template>

<script>
    import '../../assets/css/common.4b838ec3.css'
    import '../../assets/css/movie-detail.40d4116c.css'
    import movieHeader from '../movie-header'
    import headerPlaceholder from '../header-placeholder'
    import movieBanner from './movie-banner'
    import movieContainer from './movie-container'
    import movieFooter from '../movie-footer'
    import axios from 'axios'
    import {mapState,mapActions} from 'vuex'
    export default {
        name:'movie-info',
        components:{
            movieHeader,
            headerPlaceholder,
            movieBanner,
            movieContainer,
            movieFooter
        },
        computed:{
            ...mapState(['movieInfo'])
        },
        methods:{
            ...mapActions(["changemovieInfo"])
        },
        created(){
            var that =this
            axios({
                url:'http://192.168.1.100:8888/films/movie',
                method:'post',
                data:that.$route.params
            })
            .then(function(res){
                if(res.data._data[0]){
                // that.$store.state.movieInfo=res.data._data[0]
                that.changemovieInfo(res.data._data[0])
                }
            })
            .catch(function(err){
                console.log(err);
            })
        }
    }
</script>
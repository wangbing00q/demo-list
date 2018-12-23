<template>
    <ul class="ranking-wrapper ranking-box">
        <li class="ranking-item ranking-top ranking-index-1" v-for='item in boxSort'>
            <router-link :to="'/films/'+('num&'+item._doc.num+'&'+'Selling&'+item.Selling)" target="_blank">
                <div class="ranking-top-left">
                    <i class="ranking-top-icon"></i>
                    <img class="ranking-img  default-img" :src="item.pic">
                </div>
                <div class="ranking-top-right">
                    <div class="ranking-top-right-main">
                        <span class="ranking-top-moive-name">{{item._doc.name}}</span>
                        <p class="ranking-top-wish">
                            <span class="stonefont">{{item._doc.bookingOffice}}</span>
                        </p>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "box-office",
        computed: {
            ...mapState(['moviesList']),
            boxSort(){
                if(this.moviesList.sellingMovie){
                    return this.moviesList.sellingMovie.slice(0,10)
                }
            }
        }
    }
</script>
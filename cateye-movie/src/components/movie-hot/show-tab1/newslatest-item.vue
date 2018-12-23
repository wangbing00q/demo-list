<template>
    <div>
        <div class="latest-news-box" v-for='(item,index) in newnews' :key="index">
            <a href="/films/news/52110" target="_blank" data-act="news-click" data-val="{newsid:52110}">
                <img :src='item.newimg' alt="">
            </a>
            <p class="latest-news-title">
                <a href="/films/news/52110" class="two-line" title="《蜘蛛侠：英雄远征》预告片本周释出，超英粉丝要过年了！" target="_blank"
                    data-act="news-click" data-val="{newsid:52110}">
                    {{item.newtitle}}
                </a>
            </p>
            <div class="info-container">
                <span>猫眼电影</span>
                <span class="images-view-count view-count">{{item.newview}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "newslatest-item",
        computed: {
            ...mapState(['newnews'])
        }
    }
</script>
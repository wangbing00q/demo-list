<template>
    <div class="news-container">
        <div class="news-box clearfix" v-for="(item,index) in xinwenzixuns" :key="index">
            <a class="news-img" href="/films/news/52086" target="_blank" data-act="news-click" data-val="{ newsid:52086 }">
                <img :src="item.nimg" alt="">
            </a>
            <div class="news-content ">
                <h4 class="news-header one-line">
                    <a href="/films/news/52086" target="_blank" data-act="news-click" data-val="{ newsid:52086 }">{{item.ntitle}}</a>
                </h4>
                <div class="latestNews-text">{{item.ninfo}}</div>
                <div class="info-container">
                    <span class="news-source">猫眼电影</span>
                    <span class="news-date">{{item.ndate}}</span>
                    <span class="images-view-count view-count">{{item.nview}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "info-li",
        computed: {
            ...mapState(['xinwenzixuns'])
        }
    }
</script>
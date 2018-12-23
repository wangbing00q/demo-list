<template>
        <ul>
    <li class="top-list" v-for="(item,index) in hotvideos" :key="index">
        <div>
            <div class="top-info-thumb">
                <a href="http://imovie.ewang.com/films/42964/preview?videoId=96061" target="_blank" data-act="video-click"
                    data-val="{videoId:96061}">
                    <img :src="item.hvimg"
                        alt="">
                    <i :class="index<=2?'ranking top-info-icon orange-bg': 'ranking top-info-icon'">{{index+1}}</i>
                    <i class="play-icon"></i>
                </a>
            </div>
            <div class="top5-video-info">
                <p class="one-line">
                    <a href="http://imovie.ewang.com/films/42964/preview?videoId=96061" target="_blank" data-act="video-click"
                        data-val="{videoId:96061}">
                        {{item.hvtitle}}
                    </a>
                </p>
                <div class="video-view">
                    <span class="video-play-count">{{item.hvview}}</span>
                </div>
            </div>
        </div>
    </li>
</ul>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "moviehot-item",
        computed:{
            ...mapState(['hotvideos'])
        }
    }
</script>
<template>
    <div class="video-container clearfix">
        <div class="video-box" v-for="(item,index) in yugaopians" :key="index">
            <a href="http://imovie.ewang.com/films/249342/preview?videoId=96336" data-act="video-click" data-val="{videoId:96336}"
                target="_blank">
                <img class="video-screenshot" :src="item.img"
                    alt="">
                <div class="play-icon"></div>
            </a>
            <h4 class="video-name one-line">
                <a href="http://imovie.ewang.com/films/249342/preview?videoId=96336" data-act="video-click" data-val="{videoId:96336}"
                    target="_blank">{{item.topic}}</a>
            </h4>
            <div>
                <span class="video-play-count">{{item.mount}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "preiew-box",
        computed: {
            ...mapState(['yugaopians'])
        }
    }
</script>
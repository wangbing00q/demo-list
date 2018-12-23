<template>
    <div>
    <div v-for="(item,index) in previewvideos" :class="index==0?'latest-video-big latest-video-box': 'latest-video-box'" :key="index">
        <a href="http://imovie.ewang.com/films/341753/preview?videoId=96328" target="_blank" data-act="video-click"
            data-val="{videoId:96328}">
            <img alt="" :src="item.preimg">

            <div class="latest-video-info">
                <p class="one-line">
                    <span class="latest-video-title">{{item.pretitle}}</span>
                </p>
                <p>
                    <span class="video-play-count">{{item.preview}}</span>
                </p>
            </div>
            <i class="play-icon"></i>
        </a>
    </div>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "movielatest-item",
        computed: {
            ...mapState(['previewvideos'])
        }
    }
</script>
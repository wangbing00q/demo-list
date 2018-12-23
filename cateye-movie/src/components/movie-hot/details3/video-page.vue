<template>
    <div id="app1">
        <video-content></video-content>
        <video-footer></video-footer>
    </div>
</template>
<script>
    import "../../assets/css/common.4b838ec3.css"
    import "../../assets/css/news-video.749c7f1a.css"
    import videoContent from "./video-content"
    import videoFooter from "../../movie-footer"
    export default {
        name: "video-page",
        components: {
            videoContent,
            videoFooter
        }
    }
</script>
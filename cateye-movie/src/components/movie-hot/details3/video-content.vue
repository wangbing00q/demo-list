<template>
    <div class="video-bg">
        <div class="container clearfix">
            <div class="main-section">
                <div class="video-container">
                    <video width="730" height="450" controls="" autoplay="">
                        <source src="http://preview.ewang.com/movie/videos/854x480ba7de4380ee049a19451881e2e53938e.mp4"
                            type="video/mp4">
                        <param name="wmode" value="opaque">
                    </video>
                </div>
                <div class="movie-info clearfix">
                    <div class="text">
                        <div class="movie-info-title" title="大黄蜂">
                            <a href="/films/1206875">大黄蜂</a>
                        </div>
                        <div class="movie-info-meta">
                            <div class="movie-desc">2019-01-04大陆上映&nbsp;&nbsp;动作,冒险,科幻&nbsp;&nbsp;</div>
                            <div class="movie-ver"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-section" style="display: block;">
                <div class="video-list-title">相关视频（5）</div>
                <div class="video-list-container">
                    <ul>
                        <li v-for="item in 5" :class="item==1?'media active':'media'">
                            <div class="media-left">
                                <a href="/films/1206875/preview?videoId=96346">
                                    <img src="https://p0.meituan.net/movie/764b35cfbd8c4c780418cdbad833e8b424244.jpg@138w_78h_1e_1c"
                                        alt="" class="media-boject">
                                    <div class="time">02:18</div>
                                </a>
                            </div>
                            <div class="media-body media-middle">
                                <div class="video-title">
                                    <a title="定档预告片" href="/films/1206875/preview?videoId=96346">
                                        定档预告片
                                    </a>
                                </div>
                                <div class="video-play-count">1006</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "video-cotent"
    }
</script>
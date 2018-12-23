<template>
    <div class="index-videos-container clearfix">
        <div class="popular-container">
            <h4 class="blue">热门预告片</h4>
            
                <moviehot-item/>
            
        </div>

        <div class="latest-container">
            <h4 class="latest-header blue">
                预告片速递
                <a href="?showTab=3" class="all-latest" data-act="all-videos-click">
                    全部
                    <span class="arrow blue-arrow"></span>
                </a>
            </h4>
            <div class="latest-content clearfix">
                <movielatest-item/>
            </div>
        </div>

    </div>
</template>
<script>
    import movielatestItem from "./movielatest-item"
    import moviehotItem from "./moviehot-item"
    export default {
        name: "movies-container",
        components: {
            movielatestItem,
            moviehotItem
        }
    }
</script>
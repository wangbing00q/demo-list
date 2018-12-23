<template>
    <div class="index-images-container">
        <div class="latest-container">
            <h4 class="latest-header yellow">
                最新图集
                <a href="?showTab=4" class="all-latest" data-act="all-images-click">
                    全部
                    <span class="arrow yellow-arrow"></span>
                </a>
            </h4>
            <images-item/>
        </div>
    </div>
</template>
<script>
    import imagesItem from "./images-item"
    export default {
        name: "images-container",
        components: {
            imagesItem
        }
    }
</script>
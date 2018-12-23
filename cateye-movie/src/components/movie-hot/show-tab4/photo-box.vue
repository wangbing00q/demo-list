<template>
    <div class="images-container">
        <div class="images-box" v-for="(item,index) in photopages" :key="index">
            <h4 class="images-header one-line">
                <a href="/news/51298" target="_blank" data-act="images-click" data-val="{ imagesid:51298 }">{{item.title}}</a>
            </h4>
            <div class="images-thumbnails clearfix">
                <a href="/news/51298" target="_blank" data-act="images-click" data-val="{ imagesid:51298 }">
                    <img :src="item.img1"
                        alt="">
                </a>
                <a href="/news/51298" target="_blank" data-act="images-click" data-val="{ imagesid:51298 }">
                    <img :src="item.img2"
                        alt="">
                </a>
                <a href="/news/51298" target="_blank" data-act="images-click" data-val="{ imagesid:51298 }">
                    <img :src="item.img3"
                        alt="">
                </a>

                <a class="more-images" href="/news/51298" target="_blank" data-act="images-click" data-val="{ imagesid:51298 }">
                    <span>9张图片</span>
                </a>
            </div>
            <div class="info-container">
                <span class="images-view-count view-count">1517</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "photo-box",
        computed: {
            ...mapState(['photopages'])
        }
    }
</script>
<template>
    <div class="latest-content clearfix">
        <div class="latest-images-box" v-for="(item,index) in newphotos" :key="index">
            <div class="clearfix">
                <a class="latest-images-thumb" href="/news/50216" target="_blank" data-act="images-click" data-val="{imagesid:50216}">
                    <img class="latest-images-big" alt="" :src="item.newpic1">
                </a>
                <a class="latest-images-thumb" href="/news/50216" target="_blank" data-act="images-click" data-val="{imagesid:50216}">
                    <img alt="" :src="item.newpic2">
                </a>
                <a class="latest-images-thumb" href="/news/50216" target="_blank" data-act="images-click" data-val="{imagesid:50216}">
                    <img alt="" :src="item.newpic3">
                </a>
            </div>

            <a class="latest-images-more" href="/news/50216" target="_blank" data-act="images-click" data-val="{imagesid:50216}">
                10张图片
            </a>

            <div class="latest-images-info">
                <p class="latest-images-title one-line">
                    <a href="/news/50216" target="_blank" data-act="images-click" data-val="{imagesid:50216}">
                        {{item.nptitle}}
                    </a>
                </p>
                <span class="latest-images-view view-count">{{item.noview}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "images-item",
        computed: {
            ...mapState(['newphotos'])
        }
    }
</script>
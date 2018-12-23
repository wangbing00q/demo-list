<template>
    <div class="index-news-container clearfix">
        <div class="popular-container">
            <h4 class="red">热门资讯</h4>
            <ul>
                <li class="top1-list">
                    <div>
                        <div class="top-info-thumb">
                            <a href="/films/news/51853" target="_blank" data-act="news-click" data-val="{newsid:51853}">
                                <img src="https://p1.meituan.net/movie/466f0cb198af1dd16a35d2d7a7ac6ad01545888.png@120w_72h_1e_1c"
                                    alt="">
                                <i class="ranking top-info-icon red-bg">1</i>
                            </a>
                        </div>
                        <p class="top1-news-content">
                            <a href="/films/news/51853" class="two-line" title="《云南虫谷》新海报“别有洞天” ，摸金小队勇闯奇幻世界" target="_blank"
                                data-act="news-click" data-val="{newsid:51853}">
                                《云南虫谷》新海报“别有洞天” ，摸金小队勇闯奇幻世界
                            </a>
                        </p>
                    </div>
                </li>
                <newshot-item/>
            </ul>
        </div>

        <div class="latest-container">
            <h4 class="latest-header red">
                最新资讯
                <a href="?showTab=2" class="all-latest" data-act="all-news-click">
                    全部
                    <span class="arrow red-arrow"></span>
                </a>
            </h4>


            <div class="latest-content clearfix">
               <newslatest-item />
            </div>
        </div>
    </div>
</template>
<script>
    import newslatestItem from "./newslatest-item"
    import newshotItem from "./newshot-item"
    export default {
        name:"news-container",
        data(){
            return {
                tudou:['a','b','c','d']
            }
        },

        methods:{
            hahaha(){
                console.log(this.newnews)
            }
        },
        components:{
            newslatestItem,
            newshotItem
        }
    }
</script>
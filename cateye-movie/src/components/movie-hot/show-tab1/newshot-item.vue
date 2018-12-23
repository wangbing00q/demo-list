<template>
    <li class="">
        <div>
            <div class="normal-link" v-for="(item,index) in hotnews" :key="index">
                <i class="ranking" :class="{red:index<=1}">{{index+2}}</i>
                <p class="top10-news-content">
                    <a href="/films/news/52019" target="_blank" data-act="news-click" data-val="{newsid:52019}">{{item.hottitle}}</a>
                </p>
            </div>
        </div>
    </li>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: "newshot-item",
        computed: {
            ...mapState(['hotnews'])
        }
    }
</script>
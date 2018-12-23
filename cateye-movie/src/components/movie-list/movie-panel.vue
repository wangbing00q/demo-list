<template>
    <div class="movies-panel">
        <div class="movies-sorter">
            <div class="cat-sorter">
                <ul>
                    <li>
                        <span class="sort-control-group" @click='sortToggle("评分")'>
                            <span :class="[sortSign=='评分'?'sort-radio-checked':'','sort-control','sort-radio']"></span>
                            <span class="sort-control-label">按热门排序</span>
                        </span>
                    </li>
                    <li>
                        <span class="sort-control-group" @click='sortToggle("时间")'>
                            <span :class="[sortSign=='时间'?'sort-radio-checked':'','sort-control','sort-radio']"></span> 
                            <span class="sort-control-label">按时间排序</span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="play-sorter"><span data-act="isplay-click" data-val="{isplay:1}" data-href="?showType=1&amp;isPlay=1"
                    onclick="location.href=this.getAttribute('data-href')" class="sort-control-group"><span class="sort-control sort-checkbox"></span>
                    <span class="sort-control-label">可播放</span></span></div>
        </div>
        <div class="movies-list">
            <dl class="movie-list">
                <dd v-for='(item,i) in moviesList2' :key='item._doc.num'>
                    <div class="movie-item"><router-link :to="'/films/'+('num&'+item._doc.num+'&'+'Selling&'+item.Selling)" >
                            <div class="movie-poster">
                                <img src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png" class="poster-default">
                                <img :src=item.pic>
                            </div>
                        </router-link>
                        <div class="channel-action channel-action-sale" v-if='item.Selling=="在售"'><a>购票</a></div>
                        <div class="channel-action channel-action-pre" v-if='item.Selling=="预售"'><a>预售</a></div>
                        <div class="movie-ver"><i class="imax3d" v-show='item.is3DIMAX=="是"? true:false'></i></div>
                    </div>
                    <div title="item.name" class="channel-detail movie-item-title">
                        <router-link :to="'/films/'+('num&'+item._doc.num+'&'+'Selling&'+item.Selling)" >{{item._doc.name}}</router-link>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">{{item.score!=0?item.score:'暂无评分'}}</i>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="movies-pager">
            <Page :total="pageAll" prev-text="上一页" next-text="下一页" :page-size="count" @on-change="pageToggle" />
        </div>
    </div>
</template>

<script>
    import '../../assets/iview/dist/styles/iview.css'
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: 'movie-panel',
        data() {
            return {
                count: 12,
                sortSign:'评分'
            }
        },
        computed: mapState(['moviesList2', 'conditions', 'pageAll']),
        methods: {
            pageToggle(num) {
                this.conditions.pageNum = Number(num)
                let that = this
                axios({
                    url: "http://192.168.1.100:8888/films",
                    method: "post",
                    data: that.conditions
                }).then(function (res) {
                    if (res.data.state = 200) {
                        that.$store.state.moviesList2 = res.data[0]
                        that.$store.state.pageAll = res.data[1]                        
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            },
            sortToggle(sign){
                this.sortSign=sign
                this.conditions.sort = sign
                let that = this
                axios({
                    url: "http://192.168.1.100:8888/films",
                    method: "post",
                    data: that.conditions
                }).then(function (res) {
                    if (res.data.state = 200) {
                        that.$store.state.moviesList2 = res.data[0]
                        that.$store.state.pageAll = res.data[1]
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            }
        }

    }

</script>
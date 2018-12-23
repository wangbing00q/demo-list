<template>
    <div class="banner">
        <div class="wrapper clearfix">
            <div class="celeInfo-left">
                <div class="avatar-shadow">
                    <img class="avatar" :src='movieInfo.pic' alt="">
                    <div class="movie-ver"><i class="imax3d" v-show="movieInfo.is3DIMAX=='是'"></i></div>
                </div>
            </div>
            <div class="celeInfo-right clearfix">
                <div class="movie-brief-container">
                    <h3 class="name">{{movieInfo._doc.name}}</h3>
                    <div class="ename ellipsis"></div>
                    <ul>
                        <li class="ellipsis"><span v-for='item in movieInfo.type'>{{item}} </span></li>
                        <li class="ellipsis">
                            {{movieInfo.area}} / {{movieInfo._doc.length}}分钟
                        </li>
                        <li class="ellipsis">{{movieInfo.date}}大陆上映</li>
                    </ul>
                </div>
                <div class="action-buyBtn">
                    <div class="action clearfix" data-val="{movieid:42964}">
                        <a class="wish " data-wish="false" data-score="" data-bid="b_gbxqtw6x">
                            <div>
                                <i class="icon wish-icon"></i>
                                <span class="wish-msg" data-act="wish-click">想看</span>
                            </div>
                        </a>
                        <a class="score-btn " data-bid="b_rxxpcgwd">
                            <div>
                                <i class="icon score-btn-icon"></i>
                                <span class="score-btn-msg" data-act="comment-open-click">
                                    评分
                                </span>
                            </div>
                        </a>
                    </div>
                    <router-link class="btn buy" to='/cinemas' @click.native='toggleHeader'>特惠购票</router-link>
                </div>

                <div class="movie-stats-container">

                    <div class="movie-index">
                        <p class="movie-index-title">用户评分</p>
                        <div class="movie-index-content score normal-score">
                            <span class="index-left info-num ">
                                <span class="stonefont">{{movieInfo.score}}</span>
                            </span>
                            <div class="index-right">
                                <div class="star-wrapper">
                                    <div class="star-on" style="width:93%;"></div>
                                </div>
                                <span class="score-num"><span class="stonefont">{{movieInfo._doc.wantWatch}}</span>人评分</span>
                            </div>
                        </div>
                    </div>
                    <div class="movie-index">
                        <p class="movie-index-title">累计票房</p>
                        <div class="movie-index-content box">
                            <span class="stonefont">{{movieInfo._doc.bookingOffice}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import axios from 'axios'
    export default {
        name: 'movie-banner',
        computed: {
            ...mapState(['movieInfo', 'headerState'])
        },
        methods: {
            toggleHeader() {
                this.$store.state.headerState = '影院'
            }
        }
    }
</script>
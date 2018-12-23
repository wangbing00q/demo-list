<template>
<div id="container">
<div class="content">
<div class="wrapper">
<div class="main">
        <p class="data">
                             2018-12-04
        <span class="gengxin">已更新</span>
        </p>
        <p class="text">榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。
        </p>
        <dl class="first">
                <dd v-for='item in hotMovies'>
                        <i class="i1"></i>
                          <a href="#" class="img-link">
                           <img src="../../assets/images/dianying.png" class="dianying">
                           <img :src='item.pic' class="duye">
                   </a>
                   <div class="neirong">
                           <div class="neirong-content">
                            <div class="movie">
                             <p class="name"><a href="#">{{item._doc.name}}</a></p>
                             <p class="star">演员:<span v-for='per in item._doc.have'>{{per}} </span></p>
                             <p class="time">上映时间：{{item.date}}</p>
                     </div>
                     <div class="number">
                             <p class="score">
                              <i class="gewei">{{item.score}}</i>
                      </p>
                </div>
                </div>
                </div>
                </dd>
        </dl>
        </div>
        </div>
        </div>
        </div>
        </template>
        <script>
                import {mapState} from 'vuex'
                export default{
                  name:"movie-conent2",
                  computed:{
                        ...mapState(['moviesList']),
                        hotMovies(){
                              return  this.moviesList.data[0].sort(this.hotSort('score'))
                }
                },
                methods:{
                    hotSort(score){
                        return function(a,b){
                                var value1 = a[score];
                                var value2 = b[score];
                                return value2 - value1;
                        }
                },
        }
        }
        </script>
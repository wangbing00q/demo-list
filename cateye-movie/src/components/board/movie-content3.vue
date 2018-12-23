<template>
<div id="container">
<div class="content">
<div class="wrapper">
<div class="main">
        <p class="data">
                             2018-12-04
        <span class="gengxin">已更新</span>
        </p>
        <p class="text">榜单规则：将昨日国内待映影片，按照之前30天的想看数总量从高到低排列取前50名，每天上午10点更新。相关数据来源于“猫眼电影库”。
        </p>
        <dl class="first">
                <dd v-for='item in hotMovies2'>
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
                            <p class="qidai">
                                        本月新增想看
                                        <span class="font">
                                           {{item._doc.wantWatch}}
                                        </span>
                                        人
                                        <p class="zong">
                                            总想看
                                            <span class="font2">
                                                98017
                                            </span>
                                        </p>
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
                        hotMovies2(){
                              return  this.moviesList.data[0].sort(this.hotSort('wantWatch'))
                }
                },
                methods:{
                    hotSort(wantWatch){
                        return function(a,b){
                                var value1 = a._doc[wantWatch];
                                var value2 = b._doc[wantWatch];
                                return value2 - value1;
                        }
                },
        }
        }
        </script>
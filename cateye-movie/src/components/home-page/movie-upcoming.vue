<template>
  <div class="panel">
    <div class="panel-header">
      <span class="panel-more">
        <a class="textcolor_blue" href="/films">
          <span>全部</span>
        </a>
        <span class="panel-arrow panel-arrow-blue"></span>
      </span>
      <span class="panel-title">
        <span class="textcolor_blue">即将上映（{{moviesList.preMovie.length}}）</span>
      </span>
    </div>
    <div class="panel-content">
      <dl class="movie-list">
        <dd v-for='item in preSort' :key="item._doc.num">
          <div class="movie-item">
            <router-link :to="'/films/'+('num&'+item._doc.num+'&'+'Selling&'+item.Selling)" @click.native='toggleHeader'>
              <div class="movie-poster">
                <img class="poster-default">
                <img>
                <div class="movie-overlay movie-overlay-bg" :style='"background-image:url("+item.pic+")"'>
                  <div class="movie-info">
                    <div class="movie-title" :title="item._doc.name">{{item._doc.name}}</div>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="movie-detail movie-wish"><span class="stonefont">{{item._doc.wantWatch}}</span>人想看</div>
            <div class="movie-detail movie-detail-strong movie-presale">
              <a class="movie-presale-sep">预告片
              </a><a>预 售</a>
            </div>
            <div class="movie-ver">
              <i :class="item.is3DIMAX=='是'?'imax3d':''"></i>
            </div>
          </div>
          <div class="movie-detail movie-rt">{{item.date}}日上映</div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapState } from 'vuex'
  export default {
    name: "movie-upcoming",
    computed: {
      ...mapState(['moviesList','headerState']),
      preSort() {
        if (this.moviesList.preMovie) {
          return this.moviesList.preMovie.sort(this.preMovieSort('score')).slice(0,8)
        }
      },
      preLength() {
        if (this.moviesList.preLengths) {
          return this.moviesList.preMovie.length
        }
      }
    },
    methods: {
      preMovieSort(property) {
        return function (a, b) {
          var value3 = a[property];
          var value4 = b[property];
          return value4 - value3;
        }
      },
      toggleHeader(){
        this.$store.state.headerState='电影'
      }
    }
  }
</script>
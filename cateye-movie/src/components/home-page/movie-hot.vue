<template>
  <div class="panel">
    <div class="panel-header">
      <span class="panel-more">
        <a class="textcolor_red" href="/films">
          <span>全部</span>
        </a>
        <span class="panel-arrow panel-arrow-red"></span>
      </span>
      <span class="panel-title">
        <span class="textcolor_red">正在热映（{{hotLength}}）</span>
      </span>
    </div>
    <div class="panel-content">
      <dl class="movie-list">
        <dd v-for='item in hotSort' :key="item._doc.num">
          <div class="movie-item">
            <router-link :to="'/films/'+('num&'+item._doc.num+'&'+'Selling&'+item.Selling)"  @click.native='toggleHeader'>
              <div class="movie-poster">
                <div class="movie-overlay movie-overlay-bg" :style='"background-image:url("+item.pic+")"'>
                  <div class="movie-info">
                    <div class="movie-score"><i class="integer">{{item.score}}</i></div>
                    <div class="movie-title movie-title-padding" title="无名之辈">{{item._doc.name}}</div>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="movie-detail movie-detail-strong movie-sale">
              <a class="active">购 票</a>
            </div>  
            <div class="movie-ver">
              <i :class="item.is3DIMAX=='是'?'imax3d':''" ></i>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapState } from 'vuex'
  export default {
    name: "movie-hot",
    computed: {
      ...mapState(['moviesList','headerState']),
      hotSort() {
        if (this.moviesList.sellingMovie) {
          return this.moviesList.sellingMovie.sort(this.compare('score')).slice(0,8)
        }
      },
      hotLength() {
        if (this.moviesList.sellingMovie) {
          return this.moviesList.sellingMovie.length
        }
      }
    },
    methods: {
      compare(property) {
        return function (a, b) {
          var value1 = a[property];
          var value2 = b[property];
          return value2 - value1;
        }
      },
      toggleHeader(){
        this.$store.state.headerState='电影'
      }
    }
  }

</script>
<template>
  <div class="aside">
    <div class="ranking-box-wrapper">
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">
            <span class="textcolor_red">今日票房</span>
          </span>
        </div>
        <div class="panel-content">
            
            <box-office></box-office>


        </div>
      </div>
    </div>

    <div class="box-total-wrapper clearfix">
      <h3 style="box-sizing:unset">今日大盘</h3>
      <div>
        <p>
          <span class="num"><span class="stonefont">3607.4</span></span>万
          <router-link class="more" to="/boxoffice">查看更多 <span class="panel-arrow panel-arrow-red"></span></router-link>
        </p>
        <p class="meta-info">
          北京时间 16:51:43
          <span class="pull-right">猫眼专业版实时票房数据</span>
        </p>
      </div>
    </div>


  </div>
</template>
<script>
  import boxOffice from "./box-office"
  import movieExpect from "./movie-expect"
  import movieTop from "./movie-top"
  export default {
    name: "movie-right",
    components: {
      boxOffice,
      movieExpect,
      movieTop
    }
  }
</script>
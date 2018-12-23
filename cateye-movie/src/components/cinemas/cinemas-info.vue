<template>
	<div class="cinema-cell" @click="$router.push({ name: 'moviesInfo', params: { cinemasNum: item.num }})">
    <div class="cinema-info">
      <a href="#" class="cinema-name">{{item.name}}</a>
      <p class="cinema-address">{{item.address}}</p>
    </div>

    <div class="buy-btn">
      <a href="#">选座购票</a>
    </div>
  
    <div class="price">
        <span class="rmb red">￥</span>
        <span class="price-num red"><span class="stonefont">88</span></span>
        <span>起</span>
    </div>
	</div>
</template>

<script>
  import '../../assets/css/cinemas.css'
	export default {
		name: 'cinamasInfo',
    props: ['item']
	}
</script>
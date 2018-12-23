<template>
	<div>
		<div :class="index==showIndex?'active movie':'movie'" v-for="(item,index) in specificInfo" :key="index" @click="$emit('findShowIndex', index)">
		  <img :src="item.pic" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'moviesShow',
		props: ['specificInfo', 'showIndex']
	}
</script>
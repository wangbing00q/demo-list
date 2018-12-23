<template>
	<div>
		<cHead />
		<headPlaceholder/>
		<div class="container" id="app">
		  <div class="tags-panel">
		    <cinemasOptions :cinemasData="cinemasData" @filterOptions="filterOptions" />
		  </div>
  		<div class="cinemas-list">
    		<h2 class="cinemas-list-header">影院列表</h2>
    		<cinemasInfo v-for="(item, index) in cinemasList" :key="index" :item="item" />
      </div>
  	</div>
		<cinemasPage class="cinema-pager" style="margin-top: 30px;" :pagesSum="pagesSum" @submitPageNum="submitPageNum" />
		<cFoot />
	</div>
</template>

<script>
	import cinemasPage from './cinemas-page.vue';
	import cHead from '../movie-header.vue';
	import cFoot from '../movie-footer.vue';
	import headPlaceholder from '../header-placeholder'
	import cinemasInfo from './cinemas-info.vue';
	import cinemasOptions from './cinemas-options.vue';
	import axios from 'axios';


	export default {
		name: 'cinemas',
		components: {
			cinemasPage,
			cHead,
			cFoot,
			cinemasInfo,
			cinemasOptions,
			headPlaceholder
		},
		beforeMount() {
			var that = this;
			axios({
				url: 'http://192.168.1.100:8888/cinemas',
				method: 'post',
				data: this.filterOptionsData
			}).then( res => {
				that.pagesSum = Math.ceil(res.data.postData[0].length/10);
				that.cinemasData = res.data.postData[0];
				// console.log(that.cinemasData)
			}).catch( err => {
				console.log(err)
			})
		},
		data() {
			return {
				pagesSum: 0,//总页码
				pageNum: 1,//用户查看的当前页码
				cinemasData: [],//总数据 
				filterOptionsData: {cinemasCity:'哈尔滨',cinemasBrand:'',cinemasAdministrative:'',cinemasSpecial:''}
			}
		},
		computed: {
			cinemasList() {//每页显示十条数据 截取
				// console.log('计算属性绑定的总数据，总数据变化。理应变化')
				return this.cinemasData.slice((this.pageNum-1)*10,this.pageNum*10)
			}
		},
		methods: {
			submitPageNum(num) {//根据用户点击页码而改变显示的 截取数据
				this.pageNum = num;
			},
			filterOptions(arr) {
				var that = this;
				if(arr.cinemasBrand){
					if(arr.cinemasBrand == '全部') {
						this.filterOptionsData.cinemasBrand = '';
					} else {
						this.filterOptionsData.cinemasBrand = arr.cinemasBrand
					}
				}
				if(arr.cinemasAdministrative){
					if(arr.cinemasAdministrative == '全部') {
						this.filterOptionsData.cinemasAdministrative = '';
					} else {
						this.filterOptionsData.cinemasAdministrative = arr.cinemasAdministrative
					}
				}
				if(arr.cinemasSpecial){
					if(arr.cinemasSpecial == '全部') {
						this.filterOptionsData.cinemasSpecial = '';
					} else {
						this.filterOptionsData.cinemasSpecial = arr.cinemasSpecial
					}
				}
				// console.log('筛选的条件',this.filterOptionsData);
				
				// console.log('点击之后筛选的数据',this.cinemasData)
				axios({
					url: 'http://192.168.1.100:8888/cinemas',
					method: 'post',
					data: this.filterOptionsData
				}).then( res => {
					that.pagesSum = Math.ceil(res.data.postData[0].length/10);
					that.cinemasData = res.data.postData[0];
					// console.log(that.cinemasData)
				}).catch( err => {
					console.log(err)
				})
			}
		}
	}
</script>


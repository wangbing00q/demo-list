<template>
	<div>
		<cHead />
		<headPlaceholder/>
		<div class="banner cinema-banner">
		  <div class="wrapper clearfix">
		    <div class="cinema-left">
		      <div class="avatar-shadow">
		        <img class="avatar" src="https://p0.meituan.net/poi/4daaa6a4256673b7d2025edfe6b9f9d7237205.jpg@292w_292h_1e_1c">
		        <div class="avatar-num">查看全部2张图片</div>
		      </div>
		    </div>

		    <div class="cinema-main clearfix">
		      <div class="cinema-brief-container">
		        <h3 class="name text-ellipsis">{{roughInfo.name}}</h3>
		        <div class="address text-ellipsis">{{roughInfo.address}}</div>
		        <div class="telphone">电话：010-52802645</div>
		        
		        <div class="features-group">
		          <div class="group-title">影院服务</div>

		          <div class="feature">
		            <span class="tag ">3D眼镜</span>
		            <p class="desc text-ellipsis" title="免押金">免押金</p>
		          </div>
		          <div class="feature">
		            <span class="tag ">儿童优惠</span>
		            <p class="desc text-ellipsis" title="1.3米及以下儿童观影免费（特殊影厅，场次除外），每位家长限带一名免票儿童，且该儿童不占座">1.3米及以下儿童观影免费（特殊影厅，场次除外），每位家长限带一名免票儿童，且该儿童不占座</p>
		          </div>
		        </div>
		      </div>
		    </div>

		    <div class="cinema-map" data-lat="39.756683" data-lng="116.160515" style="position: relative; background-color: rgb(229, 227, 223); overflow: hidden; transform: translateZ(0px);">
		      <span class="show-map"></span>
		    </div>
		  </div>
	  </div>

	  <div class="container" id="app">
	    <div class="movie-list-container">
	      <div class="movie-list">
	        <moviesShow :specificInfo="specificInfo" @findShowIndex="findShowIndex" :showIndex="showIndex" />
	        <span class="pointer"></span>
	      </div>
	      <span class="scroll-prev scroll-btn"></span>
	      <span class="scroll-next scroll-btn"></span>
	    </div>
	    <div class="show-list active" data-index="0">
	      <div class="movie-info">
				  <div>
				    <h3 class="movie-name">{{specificInfo[showIndex].name}}</h3>
						<span class="score sc">{{specificInfo[showIndex].score}}</span>
				  </div>
				  <div class="movie-desc">
				    <div>
				      <span class="key">时长 :</span>
				      <span class="value">108分钟</span>
				    </div>
				    <div>
				      <span class="key">类型 :</span>
				      <span class="value"> 剧情 </span>
				    </div>
				    <div>
				      <span class="key">主演 :</span>
				      <span class="value"> 陈建斌,任素汐,潘斌龙</span>
				    </div>
				  </div>
				</div>

				<div class="show-date">
				  <span>观影时间 :</span>
			    <moviesShowTime />
				</div>

	  		<div class="plist-container active">
					<table class="plist">
					  <thead>
					    <tr>
					      <th>放映时间</th>
					      <th>语言版本</th>
					      <th>放映厅</th>
					      <th>售价（元）</th>
					      <th>选座购票</th>
					    </tr>
					  </thead>

					  <tbody>
					  	<moviesShowTimeInfo />
					  </tbody>
					</table>
	  		</div>
	    </div>
	  </div>

	  <cFoot />
	</div>
</template>

<script>
	import '../../assets/css/movies-info.css'
	import moviesShow from './movies-show.vue';
	import moviesShowTime from './movies-show-time.vue';
	import moviesShowTimeInfo from './movies-show-time-info.vue';
	import cHead from '../movie-header.vue';
	import headPlaceholder from '../header-placeholder.vue'
	import cFoot from '../movie-footer.vue';
	import axios from 'axios';

	export default {
	  name: 'moviesInfo',
	  components: {
	  	moviesShow,
	  	moviesShowTime,
	  	moviesShowTimeInfo,
	  	cHead,
			cFoot,
			headPlaceholder
	  },
	  created() {
			var that = this;
			axios({
				url: 'http://192.168.1.100:8888/getcinemamovie',
				method: 'post',
				data: this.$route.params
			}).then( res => {
				// console.log(res.data.postData)
				this.roughInfo = res.data.postData.res;
				this.specificInfo = res.data.postData._res;
				// console.log(this.roughInfo)
				// console.log(this.specificInfo)
			}).catch( err => {
				console.log(err)
			})
		},
		data () {
			return {
				roughInfo: {},
				specificInfo: {},
				showIndex: 0
			}
		},
		methods: {
			findShowIndex(index) {
				// console.log(index)
				this.showIndex = index
			}
		}
	}
</script>




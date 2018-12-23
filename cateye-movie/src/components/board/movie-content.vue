<template>
	<div>
		<div id="subnav">
			<ul class="navbar">
				<li @click="current='movie-content2'" ><a href="#" :class="current=='movie-content2'?'active':''" >热映口碑榜</a></li>
				<li @click="current='movie-content3'" ><a href="#" :class="current=='movie-content3'?'active':''">最受期待榜</a></li>
				<li @click="current='movie-content4'" ><a href="#" :class="current=='movie-content4'?'active':''">国内票房榜</a></li>
				<li @click="current='movie-content5'" ><a href="#" :class="current=='movie-content5'?'active':''">北美票房榜</a></li>
				<li @click="current='movie-content6'" ><a href="#" :class="current=='movie-content6'?'active':''">TOP100榜</a></li>
			</ul>
		</div>
			<component :is="current"></component>
	</div>
</template>

<script>
import movieContent2 from "./movie-content2"
import movieContent3 from "./movie-content3"
import movieContent4 from "./movie-content4"
import movieContent5 from "./movie-content5"
import movieContent6 from "./movie-content6"
import axios from 'axios'
import {mapState,mapGetters} from 'vuex'
	export default{
		name:"movie-content",
		data(){
			return{
				current:"movie-content2"
			}
		},
		computed:{
			...mapState(['conditions','moviesList']),
			...mapGetters(['hotPick'])
		},
		mounted(){
			var that =this
			axios({
				url:'http://192.168.1.100:8888/films',
				method:'post',
				data:that.conditions
			})
			.then(function(res){
				that.$store.state.moviesList=res
				console.log(res)
			})
			.catch(function(err){
				console.log(err)
			})
		},
		components:{
			 movieContent2,
			 movieContent3,
			 movieContent4,  
			 movieContent5,
			 movieContent6,
			
		}
	}
</script>

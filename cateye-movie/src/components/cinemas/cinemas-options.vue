<template>
	<div>
		<ul class="tags-lines">
			<li class="tags-line">
		    <div class="tags-title" >品牌：</div>
		    <ul class="tags">
		    	<li :class="-1==classStyleBrand?'active':''" @click.prevent="showBrand($event, -1)">
				    <a href="#">全部</a>
				  </li>
		    	<li v-for="(item, index) in brand" :key="index" :class="index==classStyleBrand?'active':''" @click.prevent="showBrand($event, index)">
				    <a href="#">{{item}}</a>
				  </li>
		    </ul>
			</li>
		</ul>
		<ul class="tags-lines tags-line-border">
			<li class="tags-line">
		    <div class="tags-title" >行政区:</div>
		    <ul class="tags">
		    	<li :class="-1==classStyleAdministrative?'active':''" @click.prevent="showAdministrative($event, -1)">
				    <a href="#">全部</a>
				  </li>
		    	<li v-for="(item, index) in administrative" :key="index" :class="index==classStyleAdministrative?'active':''" @click.prevent="showAdministrative($event, index)">
				    <a href="#">{{item}}</a>
				  </li>
		    </ul>
			</li>
		</ul>
		<ul class="tags-lines tags-line-border">
			<li class="tags-line">
		    <div class="tags-title" >特殊厅:</div>
		    <ul class="tags">
		    	<li :class="-1==classStyleSpecial?'active':''" @click.prevent="showSpecial($event, -1)">
				    <a href="#">全部</a>
				  </li>
		    	<li v-for="(item, index) in special" :key="index" :class="index==classStyleSpecial?'active':''" @click.prevent="showSpecial($event, index)">
				    <a href="#">{{item}}</a>
				  </li>
		    </ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'cinemasOptions',
		props: ['cinemasData'],
		data() {
			return {
				brandOptions: [],
				administrativeOptions: [],
				specialOptions: [],
				classStyleBrand: -1,
				classStyleAdministrative: -1,
				classStyleSpecial: -1
			}
		},
		computed: {
			brand() {
				var that = this;
				this.cinemasData.forEach(function(item,index) {
					that.brandOptions.push(item.brand)
				});
				// console.log(this.brandOptions)
				this.brandOptions = Array.from(new Set(this.brandOptions))
				// console.log(this.brandOptions)
				// this.brandOptions = this.$options.computed.unique(this.brandOptions)
				return this.brandOptions
			},
			administrative() {
				var that = this;
				this.cinemasData.forEach(function(item,index) {
					that.administrativeOptions.push(item.district)
				});
				this.administrativeOptions = Array.from(new Set(this.administrativeOptions))
				// this.administrativeOptions = this.$options.computed.unique(this.administrativeOptions)
				return this.administrativeOptions
			},
			special() {
				var that = this;
				this.cinemasData.forEach(function(item,index) {
					that.specialOptions.push(...item.sproom)
				});
				// console.log(this.specialOptions)
				this.specialOptions = Array.from(new Set(this.specialOptions))
				// this.specialOptions = this.$options.computed.unique(this.specialOptions)
				return this.specialOptions
			}
		},
		methods: {
			showBrand(e, index) {
				this.classStyleBrand = index;
				this.$emit('filterOptions', {"cinemasBrand":e.target.innerText})
			},
			showAdministrative(e, index) {
				this.classStyleAdministrative = index;
				this.$emit('filterOptions', {"cinemasAdministrative":e.target.innerText})
			},
			showSpecial(e, index) {
				this.classStyleSpecial = index;
				this.$emit('filterOptions', {"cinemasSpecial":e.target.innerText})
			}
		}
	}
</script>
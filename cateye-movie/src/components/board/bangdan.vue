<template>
<div>
	<movie-header></movie-header>
	<div class="height"></div>
	<movie-content></movie-content>
    <movie-footer></movie-footer>
    </div>
</template>

<script>
    import "../../assets/css/index.css"
    import movieHeader from "../movie-header"
    import movieContent from "./movie-content"
    import movieFooter from "../movie-footer"
	export default{
		name:"bangdan",
		components:{
			movieHeader,
			movieContent,
			movieFooter
		}
	}
</script>

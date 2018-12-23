<template>
    <div class="container" id="app">
        <div class="hotIndex-container">
           <news-container></news-container>
            <movies-container></movies-container>
            <images-container></images-container>
        </div>
    </div>
</template>
<script>
    import newsContainer from "./news-container"
    import moviesContainer from "./movies-container"
    import imagesContainer from "./images-container"
    export default{
        name:"hot-container",
        components:{
            newsContainer,
            moviesContainer,
            imagesContainer
        }
    }
</script>
<template>
        <div class="container page-movie/list" id="app" >
            <div class="movies-channel">
                <tags-panel></tags-panel>
                <movie-panel></movie-panel>
            </div>
        </div>
</template>

<script>
    import tagsPanel from './tags-panel'
    import moviePanel from './movie-panel'
    export default {
        name:'movie-content',
        components:{
            tagsPanel,
            moviePanel,
        }
    }
</script>
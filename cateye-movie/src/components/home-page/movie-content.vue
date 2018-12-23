<template>
    <div class="container" id="app">
        <div class="content">
            <movie-right></movie-right>
            <div class="main">
                <movie-left></movie-left>
            </div>
        </div>
    </div>
</template>
<script>
    import movieLeft from "./movie-left"
    import movieRight from "./movie-right"
    export default {
        name: "movieContent",
        components: {
            movieLeft,
            movieRight
        }
    }
</script>
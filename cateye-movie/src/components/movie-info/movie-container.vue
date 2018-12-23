<template>
    <div class="container">
        <div class="main-content-container clearfix">
            <mainContainer></mainContainer>
            <main-related></main-related>
        </div>
    </div>
</template>

<script>
    import mainContainer from './main-container'
    import mainRelated from './main-related'
    export default {
        name: 'movie-container',
        components: {
            mainContainer,
            mainRelated
        }
    }
</script>
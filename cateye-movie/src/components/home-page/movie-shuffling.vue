<template>
    <Carousel autoplay v-model="value2" loop class="shuffling" style="margin: 0 auto;width: 1348px" >
        <CarouselItem>
            <div class="demo-carousel"><img src='../../assets/images/1.jpg'></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../assets/images/1.jpg'></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../assets/images/1.jpg'></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../assets/images/1.jpg'></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src='../../assets/images/1.jpg'/></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data() {
            return {
                value2: 0
            }
        }
    }
</script>

<!-- <style src='../../assets/iview/dist/styles/iview.css' scoped>

</style> -->
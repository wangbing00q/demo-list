<template>
  <div class="movie-grid">
    <movie-hot></movie-hot>
    <movie-upcoming></movie-upcoming>
  </div>
</template>
<script>
  import movieHot from "./movie-hot"
  import movieUpcoming from "./movie-upcoming"
  export default {
    name: "movie-left",
    components: {
      movieHot,
      movieUpcoming
    }
  }
</script>
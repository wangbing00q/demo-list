<template>
    <div id="app1">
    <div class="dashboard-page">
        <div class="dashboard">
            <data-header></data-header>
        </div>
    </div>
</div>
</template>
<script>
    import '../../assets/css/index2.css'
    import dataHeader from "./data-header"
    export default {
        name: "data-home",
        components: {
            dataHeader

        }
    }
</script>
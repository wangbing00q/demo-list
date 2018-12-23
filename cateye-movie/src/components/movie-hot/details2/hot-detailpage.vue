<template>
        <div id="app1">
            <hot-header></hot-header>
            <hot-hdplaceholder></hot-hdplaceholder>
            <hot-detcontainer></hot-detcontainer>
            <hot-footer></hot-footer>
        </div>
    </template>
    <script>
        import "../../assets/css/common.4b838ec3.css"
        import "../../assets/css/news-detail.8be10f92.css"
        import hotHeader from "../../movie-header"
        import hotHdplaceholder from "../../header-placeholder"
        import hotDetcontainer from "./hot-detcontainer"
        import hotFooter from "../../movie-footer"
        export default {
            name: "hot-detailpage",
            components:{
                hotHeader,
                hotHdplaceholder,
                hotDetcontainer,
                hotFooter
            }
        }
    </script>
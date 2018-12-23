<template>
        <div id="app1">
            <hot-header></hot-header>
            <hot-hdplaceholder></hot-hdplaceholder>
            <picture-content></picture-content>
            <hot-footer></hot-footer>
        </div>
    </template>
    <script>
        import "../../../assets/css/common.4b838ec3.css"
        import "../../../assets/css/news-photo.cebe47bc.css"
        import hotHeader from "../../movie-header"
        import hotHdplaceholder from "../../header-placeholder"
        import pictureContent from "./picture-content"
        import hotFooter from "../../movie-footer"
        export default {
            name: "picture-page",
            components: {
                hotHeader,
                hotHdplaceholder,
                pictureContent,
                hotFooter
            
            }
        }
    </script>
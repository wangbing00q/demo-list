<template>

    <body class="pg-unitive-signup theme--maoyan">
        <register-header></register-header>
        <register-content></register-content>
       <register-footer></register-footer>
    </body>
</template>
<script>
    import '../../assets/css/zhuce.css'
    import registerHeader from "./register-header"
    import registerContent from "./register-content"
    import registerFooter from "./register-footer"
    export default {
        name: 'register-home',
        components:{
            registerHeader,
            registerContent,
            registerFooter
        }
    }


</script>
<template>
    <div class="container" id="app">
        <div class="detail-container">

            <photo-box />


            <div class="hot-pager">


                <ul class="list-pager">



                    <li class="active">
                        <a class="page_1" href="javascript:void(0);" style="cursor: default">1</a>

                    </li>
                    <li>
                        <a class="page_2" href="?showTab=4&amp;offset=10">2</a>

                    </li>
                    <li>
                        <a class="page_3" href="?showTab=4&amp;offset=20">3</a>

                    </li>
                    <li>
                        <a class="page_4" href="?showTab=4&amp;offset=30">4</a>

                    </li>
                    <li>
                        <a class="page_5" href="?showTab=4&amp;offset=40">5</a>

                    </li>
                    <li>
                        <a class="page_6" href="?showTab=4&amp;offset=50">6</a>

                    </li>


                    <li> <a class="page_2" href="?showTab=4&amp;offset=10">下一页</a>
                    </li>
                </ul>


            </div>
        </div>

    </div>
</template>
<script>
    import photoBox from "./photo-box"
    export default {
        name: "photo-container",
        components: {
            photoBox
        }
    }
</script>
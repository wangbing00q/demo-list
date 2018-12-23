<template>
    <div class="container" id="app">
        <div class="detail-container">
            <info-li />
            <div class="hot-pager">

                <ul class="list-pager">

                    <li class="active">
                        <a class="page_1" href="javascript:void(0);" style="cursor: default">1</a>

                    </li>
                    <li>
                        <a class="page_2" href="?showTab=2&amp;offset=10">2</a>

                    </li>
                    <li>
                        <a class="page_3" href="?showTab=2&amp;offset=20">3</a>

                    </li>
                    <li>
                        <a class="page_4" href="?showTab=2&amp;offset=30">4</a>

                    </li>
                    <li>
                        <a class="page_5" href="?showTab=2&amp;offset=40">5</a>

                    </li>

                    <li class="sep">...</li>
                    <li>
                        <a class="page_2420" href="?showTab=2&amp;offset=24190">2420</a>

                    </li>



                    <li> <a class="page_2" href="?showTab=2&amp;offset=10">下一页</a>
                    </li>
                </ul>


            </div>
        </div>

    </div>
</template>
<script>
    import infoLi from "./info-li"
    export default {
        name: "info-container",
        components: {
            infoLi
        }
    }
</script>
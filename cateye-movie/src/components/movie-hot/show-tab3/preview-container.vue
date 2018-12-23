<template>
    <div class="container" id="app">
        <div class="detail-container">
            <preview-box/>
            <div class="hot-pager">


                <ul class="list-pager">



                    <li class="active">
                        <a class="page_1" href="javascript:void(0);" style="cursor: default">1</a>

                    </li>
                    <li>
                        <a class="page_2" href="?showTab=3&amp;offset=30">2</a>

                    </li>
                    <li>
                        <a class="page_3" href="?showTab=3&amp;offset=60">3</a>

                    </li>
                    <li>
                        <a class="page_4" href="?showTab=3&amp;offset=90">4</a>

                    </li>
                    <li>
                        <a class="page_5" href="?showTab=3&amp;offset=120">5</a>

                    </li>
                    <li>
                        <a class="page_6" href="?showTab=3&amp;offset=150">6</a>

                    </li>
                    <li>
                        <a class="page_7" href="?showTab=3&amp;offset=180">7</a>

                    </li>


                    <li> <a class="page_2" href="?showTab=3&amp;offset=30">下一页</a>
                    </li>
                </ul>


            </div>
        </div>

    </div>
</template>
<script>
    import previewBox from "./preview-box"
    export default {
        name: "preview-container",
        components: {
            previewBox
        }
    }
</script>
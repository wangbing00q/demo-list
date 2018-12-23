<template>
    <div class="topp-all">
    <div class="top-title">

        <div class="top-title-clock">
            <div class="sprite sprite-logo"><img src="../../assets/images/mao.png" style="width: 150px;height: 30px;position:absolute;top:10px;left: 5px;" /></div>
            <span class="clock-time"><span>
                    <span>2018<!-- -->年<!-- -->12<!-- -->月<!-- -->04<!-- -->日</span>&nbsp;
                    <span><!-- -->14<!-- -->:<!-- -->29</span>
                </span>
            </span>
        </div>
        <div class="top-nav">
            <span  @click="change1" :class="toggle==1?'active':null">综合票房</span>
            <span  @click="change2" :class="toggle==1?null:'active'">分账票房</span> 
        </div>
        <keep-alive>
                <component :is="current"></component>
            </keep-alive>
        <div class="top-title-group">
            <div class="full-screen">全屏</div>
            <div class="conventional">返回常规版→</div>
        </div>
    </div>
    <div class="body-content">
            <div class="body-left">
                <div class="body-detail">
                    <div class="but">点击&nbsp;&nbsp;&nbsp;<span class="star"><img src="../../assets/images/xing.png" style="width:20px;height:20px;position: absolute;top:7px;left: 148px;
                "/></span>&nbsp;&nbsp;&nbsp;优先展示</div>
                </div>
                <div class="body-push"></div>
                <div class="body-buttom">
                    <div class="body-calendar">
                        <div class="real-time">2018.12.04<span class="traingle"></span></div>
                        <div class="actual-time"><span>今日实时</span><span class="sales">1761.3万</span></div>
                        <p class="bei-time"><span>北京时间 14:31:42</span></p>
                    </div>
                </div>
            </div>
            <!-- <data-synthesize></data-synthesize> -->
        </div>
    </div>
</template>
<script>
    import "../../assets/images/mao.png"
    import "../../assets/images/xing.png"
    import dataSynthesize from "./data-synthesize"
    import dataSeparate from "./data-separate"
    export default {
        name: "data-header",
        data(){
            return{
                current:"data-synthesize",
                toggle:1
            }
        },
        methods:{
            change1(){
                     this.current='data-synthesize'
                     this.toggle=1
            },
            change2(){
                     this.current='data-separate'
                     this.toggle=2
            }
        },
        components:{
            dataSynthesize
            ,
            dataSeparate

        }
        
    }

</script>
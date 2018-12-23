<template>
    <div class="subnav">
  <ul class="navbar">
    <li>
      <a @click="tag1" :class="haha==1?'active':''">热点首页</a>
    </li>
    <li>
      <a @click="tag2" :class="haha==2?'active':''">新闻资讯</a>
    </li>
    <li>
      <a @click="tag3" :class="haha==3?'active':''">预告片</a>
    </li>
    <li>
      <a @click="tag4" :class="haha==4?'active':''">精彩图集</a>
    </li>
  </ul>
</div>
</template>
<script>
    export default{
        name:"hot-subnav",
        data(){
            return {
                haha:1
            }
        },
        methods:{
            tag1(){
                this.$emit('tag1',"hotContainer")
                this.haha=1
            },
            tag2(){
                this.$emit('tag2',"infoPage")
                this.haha=2
            },
            tag3(){
                this.$emit('tag3',"previewPage")
                this.haha=3
            },
            tag4(){
                this.$emit('tag4',"photoPage")
                this.haha=4
            }
        }
    }
</script>
<template>
    <div class="tags-panel">
        <ul class="tags-lines">
            <li class="tags-line" data-val="{tagTypeName:'cat'}">
                <div class="tags-title">类型 :</div>
                <ul class="tags">
                    <li v-for='(item,i) in types' :key='i' :class="{active:active1==item}" @click="toggleClass1(item)">
                        <a class="a-pointer">{{item}}</a>
                    </li>
                </ul>
            </li>
            <li class="tags-line tags-line-border" data-val="{tagTypeName:'source'}">
                <div class="tags-title">区域 :</div>
                <ul class="tags">
                    <li v-for='(item,i) in areas' :key='i' :class="{active:active2==item}" @click="toggleClass2(item)">
                        <a class="a-pointer">{{item}}</a>
                    </li>
                </ul>
            </li>
            <li class="tags-line tags-line-border" data-val="{tagTypeName:'year'}">
                <div class="tags-title">年代 :</div>
                <ul class="tags">
                    <li v-for='(item,i) in years' :key='i' :class="{'active':active3==item}" @click="toggleClass3(item)">
                        <a class="a-pointer">{{item}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: 'tags-panel',
        data() {
            return {
                types: ['全部', '爱情', '喜剧', '动画',  '恐怖', '惊悚', '动作',  '犯罪', '冒险', '战争'],
                areas: ['全部', '欧美', '港台', '内地', '日韩', '印度'],
                years: ['全部', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
                active1: '全部',
                active2: '全部',
                active3: '全部',
            }
        },
        computed: mapState(['conditions', 'moviesList', 'pageAll']),
        methods: {
            toggleClass1(name) {
                this.active1 = name
                if (name == '全部') name = ''
                this.conditions.type = name
                let that = this
                axios({
                    url: "http://192.168.1.100:8888/films",
                    method: "post",
                    data: that.conditions
                }).then(function (res) {
                    if (res.data.state = 200) {
                        that.$store.state.moviesList = res.data[0]
                        that.$store.state.pageAll = res.data[1]
                    }
                }).catch(function (err) {
                    console.log(err);
                })
                this.$store.state.conditions.pageNum = 1
            },
            toggleClass2(name) {
                this.active2 = name
                if (name == '全部') name = ''
                this.conditions.area = name
                let that = this
                axios({
                    url: "http://192.168.1.100:8888/films",
                    method: "post",
                    data: that.conditions
                }).then(function (res) {
                    if (res.data.state = 200) {
                        that.$store.state.moviesList = res.data[0]
                        that.$store.state.pageAll = res.data[1]
                    }
                }).catch(function (err) {
                    console.log(err);
                })
                this.$store.state.conditions.pageNum = 1
            },
            toggleClass3(name) {
                this.active3 = name
                if (name == '全部') name = ''
                this.conditions.date = name
                let that = this
                axios({
                    url: "http://192.168.1.100:8888/films",
                    method: "post",
                    data: that.conditions
                }).then(function (res) {
                    if (res.data.state = 200) {
                        that.$store.state.moviesList = res.data[0]
                        that.$store.state.pageAll = res.data[1]
                    }
                }).catch(function (err) {
                    console.log(err);
                })
                this.$store.state.conditions.pageNum = 1
            }
        }
    }
</script>
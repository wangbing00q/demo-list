<template>
    <div class="subnav">
        <ul class="navbar">
            <li>
                <a :class="tabChange==1?'active':''" @click="isHit">正在热映</a>
            </li>
            <li>
                <a :class="tabChange==2?'active':''" @click="upComing">即将上映</a>
            </li>
            <li>
                <a :class="tabChange==3?'active':''" @click="classic">经典影片</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: 'subnav',
        data() {
            return {
                tabChange: 1,
            }
        },
        computed: mapState(['conditions', 'pageAll']),
        methods: {
            isHit() {
                this.tabChange = 1
                this.conditions.Selling = '在售'
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
            upComing() {
                this.tabChange = 2
                this.conditions.Selling = '预售'
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
            classic() {
                this.tabChange = 3
                this.conditions.Selling = '售空'
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
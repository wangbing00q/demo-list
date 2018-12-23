<template>
    <div class="main-content">
        <div class="tab-container">
            <div class="tab-title-container clearfix">
                <div :class="[isActive==1?'active':'','tab-title']" @click='conToggle1'>介绍</div>
                <div :class="[isActive==2?'active':'','tab-title']" @click='conToggle2'>演职人员</div>
                <div :class="[isActive==3?'active':'','tab-title',!award?'tab-disabled':'']" @click='conToggle3'>奖项</div>
                <div :class="[isActive==4?'active':'','tab-title']" @click='conToggle4'>图集</div>
            </div>
            <component :is="comSign"></component>
        </div>
    </div>
</template>

<script>
    import introducePage from './introducePage'
    import actor from './actor'
    import atlas from './atlas'
    export default {
        name: 'main-container',
        data() {
            return {
                comSign: 'introducePage',
                isActive: 1,
                award: ''
            }
        },
        methods: {
            conToggle1() {
                this.isActive = 1,
                    this.comSign = 'introducePage'
            },
            conToggle2() {
                this.isActive = 2,
                    this.comSign = 'actor'
            }, conToggle3() {
                this.isActive = 3
                this.comSign = 'introducePage'
            }, conToggle4() {
                this.isActive = 4
                this.comSign = 'atlas'
            },
        },
        computed: {
            handleIntro() {
            }
        },
        components: {
            introducePage,
            actor,
            atlas
        }
    }
</script>
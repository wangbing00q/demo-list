<template>
  <Page :total="pagesSum*10" @on-change="pageNum" />
</template>
<script>
  export default {
    name: 'cinemasPage',
    props: ['pagesSum'],
    methods: {
    	pageNum(num) {
    		this.$emit('submitPageNum',num)
    	}
    }
  }
</script>

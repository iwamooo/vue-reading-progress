<template lang="pug">
  .readingProgress
    .readingProgressInner(:style="{ width: ratio + '%' }")
</template>

<script>
  export default {
    data () {
      return {
        ratio: 0
      }
    },

    methods: {
      readingProgressRatio () {
        const scrollHeight = document.documentElement.offsetHeight
        const scrollPosition = window.innerHeight + window.scrollY
        const ratio = (scrollPosition / scrollHeight) * 100

        this.ratio = ratio
      }
    },

    mounted () {
      this.readingProgressRatio()
      document.addEventListener('scroll', this.readingProgressRatio)
    }
  }
</script>

<style scoped>
  .readingProgress {
    background-color: #f5f5f5;
    size: 100vw 8px;
    position: fixed;
    top: 0;
    left: 0;

    &Inner {
      background-color: #42b983;
      height: 8px;
    }
  }
</style>

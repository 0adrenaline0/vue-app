<template>
  <div id="preloader"></div>
</template>

<script>
  export default {
    name: 'preloader'
  }
</script>

<style lang="scss" scoped>
  #preloader {
    @keyframes spinner {
      to { transform: rotate(360deg); }
    }

    height: 30px;
    margin: 1rem 0;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      width: 30px;
      height: 30px;
      margin-left: -15px;
      border-radius: 50%;
      border: 2px solid #ccc;
      border-top-color: #333;
      animation: spinner 0.5s linear infinite;
    }
  }
</style>
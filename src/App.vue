<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/vHeader'

  export default {
    name: 'App',
    components: {
      'v-header': header
    },
    mounted() {
      this.$store.dispatch('getGoods')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: "Avenir", Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  .tab
    display: flex
    justify-content: center
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      & > a
        display: block
        text-align: center
        &.active
          color: rgb(240, 20, 20)
</style>

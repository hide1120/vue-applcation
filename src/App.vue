<template>
  <div id="app" v-cloak style="height: 5000px">
    <Header />
    <router-view/>
    <Pagetop />
  </div>
</template>
<script>
import Header from '@/components/Header';
import Pagetop from '@/components/Pagetop';
export default {
  components:{
    Header,
    Pagetop
  }
}
</script>
<style lang="stylus">
#app
  font-family "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro","メイリオ", "Meiryo", "ＭＳ Ｐゴシック", sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
.router-link-exact-active
  text-decoration underline
  color #000
</style>

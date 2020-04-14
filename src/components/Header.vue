<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
    <div class="container">
      <!-- <a class="navbar-brand" href="/">topのみ</a> -->
      <Sitelogo class="msg" v-if="this.$route.name == 'Home'"></Sitelogo>
      <Sitelogo_else class="msg" v-if="this.$route.name !== 'Home'"></Sitelogo_else>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <GlobalNavi />
      <!-- <h1>{{ msg }}</h1> -->
    </div>
  </nav>
</template>

<script>
import Sitelogo from "@/components/Sitelogo";
import Sitelogo_else from "@/components/Sitelogo_else";
import GlobalNavi from "@/components/GlobalNavi";
export default {
  components: {
    Sitelogo,
    Sitelogo_else,
    GlobalNavi,
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.msg
  color #fff
  font-size 1rem
  margin 0
</style>

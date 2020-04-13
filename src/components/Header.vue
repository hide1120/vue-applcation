<template>

    <nav class="container navbar navbar-expand-md bg-dark navbar-dark fixed-top">

      <!-- <a class="navbar-brand" href="/">topのみ</a> -->
      <Sitelogo class="msg" v-if="this.$route.name !== 'about'">aaaa</Sitelogo>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/company" class="nav-link">Company</router-link>
          </li>
        </ul>
      </div>
      <!-- <h1>{{ msg }}</h1> -->
    </nav>
</template>

<script>
import Sitelogo from "@/components/Sitelogo";
export default {
  components:
  Sitelogo,
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
</style>

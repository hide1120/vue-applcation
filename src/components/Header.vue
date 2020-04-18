<template>
<div class="fixed-top">
  <b-navbar toggleable="md" type="dark" variant="dark">
    <Sitelogo class="msg" v-if="this.$route.name == 'Home'"></Sitelogo>
    <Sitelogo_else class="msg" v-if="this.$route.name !== 'Home'"></Sitelogo_else>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item router-link to="/">トップ</b-nav-item>

        <b-nav-item-dropdown text="会社情報" left>
          <b-dropdown-item router-link to="/company">トップ</b-dropdown-item>
          <b-dropdown-item router-link to="/company#introduction">会社紹介</b-dropdown-item>
          <b-dropdown-item router-link to="/company#greeting">社長挨拶</b-dropdown-item>
          <b-dropdown-item router-link to="/company#officers">役員一覧</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item router-link to="/group">AKTIO グループ</b-nav-item>
        <b-nav-item router-link to="/topic">トピック</b-nav-item>
        <b-nav-item router-link to="/contact">お問い合わせ</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Sitelogo from "@/components/Sitelogo";
import Sitelogo_else from "@/components/Sitelogo_else";
// import GlobalNavi from "@/components/GlobalNavi";
export default {
  components: {
    Sitelogo,
    Sitelogo_else,
    //GlobalNavi,
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
.dropdown-toggle::after
  display none
</style>

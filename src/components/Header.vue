<template>
<div class="fixed-top">
  <b-navbar toggleable="md" type="dark" variant="info">
    <Sitelogo class="msg" v-if="this.$route.name == 'Home'"></Sitelogo>
    <Sitelogo_else class="msg" v-if="this.$route.name !== 'Home'"></Sitelogo_else>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item router-link to="/about">About</b-nav-item>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
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
</style>

<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>





  </div>
</template>
<script>
  import MainTabBar from 'components/content/MainTabBar/MainTabBar.vue'
  export default {
    // name:'app',
    // beforeMount() {
    // this.switchLanguage();
    // },
    // methods: {
    // switchLanguage() {
    // this.$i18n.locale = this.$i18n.locale == 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
    // }
    // },
    components:{
      MainTabBar
    }
  }
</script>
<style>
	@import url("assets/css/base.css");
</style>

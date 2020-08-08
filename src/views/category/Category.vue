<template>
  <div class="hello">
    <input type="button" value="button" @click="flag=!flag" />
    <transition mode="out-in" enter-active-class="animate__animated animate__bounceInLeft"  leave-active-class="animate__animated animate__backOutRight">
      <h1 v-if="flag">这是一个自定义v-前缀的动画</h1>
    </transition>
  </div>
</template>

<script>
  import animate from "animate.css";
  export default {
    name: "HelloWorld",
    data() {
      return { flag: false };
    },
    mounted() {}
  };
</script>

<style scoped>
</style>

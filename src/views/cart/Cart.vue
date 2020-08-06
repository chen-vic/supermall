<template>
	<div class="cart">
    <!-- 导航-->
    <nav-bar class="nav-bar">
      <div slot='center'>购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品 列表-->
    <scroll class="content" ref='scroll'>
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'
  import cartList from './childComps/cartList.vue'
  import { mapGetters } from 'vuex'

  export default {
    name:'Cart',
    components:{
      NavBar,
      cartList,
      Scroll,
      CartBottomBar
    },
    computed:{
      // 1.辅助函数  一版用法
      ...mapGetters(['cartLength'])
      // 2.改名
      // ...mapGetters({
      //   length:'cartLength'
      // })



    },
    activated() {
      //再次添加商品better-scroll 需要刷新 计算滚动高度 才能滚动
      this.$refs.scroll.refresh()
    }
  }



</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #FFFFFF;
  }

  .cart {
    height: 100vh;
  }
  .content {
    /* height: calc(100% - 44px); */
    position: fixed;
    top: 2.75rem;
    bottom: 85px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
</style>

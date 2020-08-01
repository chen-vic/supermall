<template>
	<tab-bar>
		<tabbar-item link="/home" activeColor='pink'>
			<img slot='item-icon' src="~assets/img/tabbar/home.svg" alt="">
			<img slot='item-icon-active' src="~assets/img/tabbar/home_active.svg" alt="">
			<div slot='item-text'>首页</div>
		</tabbar-item>
		<tabbar-item link="/category" activeColor='pink'>
			<img slot='item-icon' src="~assets/img/tabbar/category.svg" alt="">
			<img slot='item-icon-active' src="~assets/img/tabbar/category_active.svg" alt="">
			<div slot='item-text'>分类</div>
		</tabbar-item>
		<tabbar-item link="/cart" activeColor='pink'>
			<img slot='item-icon' src="~assets/img/tabbar/shopcart.svg" alt="">
			<img slot='item-icon-active' src="~assets/img/tabbar/shopcart_active.svg" alt="">
			<div slot='item-text'>购物车</div>
		</tabbar-item>
		<tabbar-item link="/profile" activeColor='pink'>
			<img slot='item-icon' src="~assets/img/tabbar/profile.svg" alt="">
			<img slot='item-icon-active' src="~assets/img/tabbar/profile_active.svg" alt="">
			<div slot='item-text'>我的</div>
		</tabbar-item>
	</tab-bar>
</template>

<script>
	import TabBar from '../../common/tabbar/TabBar.vue'
	import TabbarItem from '../../common/tabbar/TabbarItem.vue'

	export default {
	  name: 'MainTabBar',
	  components:{
		  TabBar,
		  TabbarItem
	  }
	}
</script>

<style>
</style>

<template>
	<div id="Home" class="wrapper">
    <nav-bar class="home-nav"><div slot='center'>蘑菇街</div></nav-bar>
    <scroll class="content" ref='scroll' :probeType="3" @scroll='contentscroll' :pull-up-load="true" @pullingUp='loadmore'>
      <home-swiper v-bind:banner="banner"></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature></feature>
      <tab-control class="tab-control" :titles="['精品', '新款', '流行']" @tabClick='tabClick'></tab-control>
      <goods-list :goods="goods[currentgoods].list"></goods-list>
    </scroll>
   <back-top @click.native='backClick' v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import HomeSwiper from './childrenconpos/HomeSwiper.vue'
  import RecommendView from './childrenconpos/RecommendView.vue'
  import Feature from './childrenconpos/Feature.vue'
  import TabControl from '../../components/content/tabControl/TabControl.vue'
  import GoodsList from '../../components/content/goods/GoodsList.vue'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import BackTop from '../../components/content/backTop/BackTop.vue'

  import {
    getHomeMultidata,
    getHomeGoods
  } from '../../network/home.js'

  export default {
    name:'Home',
    data(){
      return {
        banner:[],
        recommend:[],
        goods:{
          'pop':{page:0, list: []},
          'new':{page:0, list: []},
          'sell':{page:0, list: []},
        },
        currentgoods:'pop',
        isShowBackTop: false
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      //请求多个数据
     this.getHomeMultidata()
     //请求需要分页的商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')


    },
    //防止scroll还未挂载上标签 不能再created 中刷新
    mounted(){
      this.$bus.$on('itemImageLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
    methods:{
      // 时间监听相关的方法
      tabClick(index) {
          if(index==0){
            this.currentgoods = 'pop'
          }else if(index == 1) {
            this.currentgoods = 'new'
          }else {
            this.currentgoods = 'sell'
          }
      },

      backClick() {
        this.$refs.scroll.scrollTo(0,0,1000)
      },

      contentscroll(position) {
        this.isShowBackTop = -position.y > 1000
      },

      loadmore() {
         this.getHomeGoods(this.currentgoods)
         this.$refs.scroll.finishPullUp()

      },
      // 网络请求相关的方法s
      getHomeMultidata(){
         getHomeMultidata().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
 }
 }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    top:0;
    right: 0;
    z-index: 9;
    color: #fff;
  }

  .tab-control {
    position: sticky;
    top:2.75rem;
    z-index:9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>

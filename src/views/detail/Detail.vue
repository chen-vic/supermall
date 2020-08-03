<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <DetailShopInfo :shop='shop'></DetailShopInfo>
      <detail-goods-info :detail-info='detailInfo' ref='imageLoad'></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'

  import {getDetail, Goods, Shop} from '../../network/detail.js'

  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo
    },
    data() {
      return {
        iid:null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo:{}
      }
    },
    activated() {
      this.iid = this.$route.params.id
      getDetail(this.iid).then(res => {
       //获取轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //创建店铺信息
      this.shop = new Shop(data.shopInfo)
      //保存商品的详情数据
      this.detailInfo = data.detailInfo
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #FFFFFF;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #FFFFFF
  }
  .content {
    height: calc(100% - 44px);
  }


</style>

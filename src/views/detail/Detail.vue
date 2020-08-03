<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick'></detail-nav-bar>
    <scroll class="content" ref='scroll'>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <DetailShopInfo :shop='shop'></DetailShopInfo>
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
      <detail-param-info ref='params' :paramInfo='paramInfo'></detail-param-info>
      <DetailCommentInfo ref='comment' :commentInfo='commentInfo'></DetailCommentInfo>
      <GoodsList ref='recommend' :goods='recomments'></GoodsList>
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
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import GoodsList from '../../components/content/goods/GoodsList.vue'
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '../../network/detail.js'
  import debounce from '../../common/utils.js'

  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    data() {
      return {
        iid:null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recomments: [],
        themeTopYs: [],
      }
    },

    created() {
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
      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      //给getThemeTopY赋值

      }),
      //请求推荐数据
      getRecommend().then(res => {
        this.recomments = res.data.list
      })


    },

    methods: {
      //保证图片加载成功
      imageLoad() {
        this.$refs.scroll.refresh()
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)

      },
      titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
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

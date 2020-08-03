<template>
  <div>
    <nav-bar>
      <div slot='left' class="back" @click="imgClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot='center' class="title">
        <div v-for="(item, index) in title"
        class="title-item"
        :class="{active:index===currentindex}"
        @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'
  export default {
    name:'DetailNavBar',
    components:{
      NavBar
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentindex: 0
      }
    },
    methods:{
      itemClick(index) {
        this.currentindex = index
        this.$emit('titleClick', index)
      },
      imgClick() {
        this.$router.back()
      }
    }
  }
</script>

<style>
  .title {
    display: flex;

  }

  .title-item {
    flex: 1;
    font-size: 10px;
  }

  .active {
    color: var(--color-high-text);
  }


  .back img{
    margin-top: 10px;
  }
</style>

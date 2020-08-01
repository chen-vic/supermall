<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
    :class="{active:index===currentindex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data(){
      return {
        currentindex:0
      }
    },
    props: {
      titles: Array,
      default() {
        return []
      }
    },
    methods:{
      itemClick(index){
        this.currentindex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: #fff
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-tint);
    padding: 0.3125rem;
  }
</style>

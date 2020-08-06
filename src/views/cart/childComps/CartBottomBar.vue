<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton :isChecked='isSelectAll' class='checkbutton' @click.native='checkClick'></CheckButton>
      <span class="select-context">全选</span>
    </div>
    <div class="price">
      合计:{{totalprice}}
    </div>
    <div class="calculate">
      去计算:{{checkLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from '../../../components/content/checkbutton/CheckButton.vue'
  export default {
    name:'CartBottomBar',
    components:{
      CheckButton
    },
    computed:{
      //合计
      totalprice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      //去计算
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      //有没选的 全选按钮不被选
      isSelectAll() {
        if (this.$store.state.cartList.length == 0) return false
        return !this.$store.state.cartList.find(item => !item.checked)
      },

    },
    methods:{
      checkClick() {
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    top: 439px;
    line-height: 20px;
    font-size: 14px;
  }

 .check-content {
    display: flex;
    /* align-items: center; */
    margin-left: 4px;

  }

  .checkbutton {
    width: 1.25rem;
    height: 1.25rem;

    position: relative;
    top: 8px;
    /* margin-bottom: 30px; */
  }

  .select-context {
    position: relative;
    top: 8px;
    margin-left: 5px;
  }

  .price {
    position: absolute;
    bottom: 12px;
    left: 70px;
  }

  .calculate {
    position: absolute;
    background-color: red;
    height: 35px;
    width: 80px;
    bottom: 5px;
    right: 0px;
    text-align: center;
    line-height: 35px;
  }
</style>

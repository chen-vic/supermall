<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "scroll",
        data() {
          return {
            scroll: null
          }
        },

        props:{
           probeType:{   //动态修改probeType属性
                type:Number,
                default:0
            },

            PullUpLoad:{
              type: Boolean,
              default: true
            }
            },

        mounted() {
        //创建Bcroll对象
          this.scroll = new BScroll(this.$refs.wrapper, {
            click:true,
            probeType: this.probeType,
            pullUpLoad: this.PullUpLoad
          })
          //监听滚动的位置
          this.scroll.on('scroll', (Position) => {
            // console.log(Position)
            this.$emit('scroll', Position)
          })
          //监听上拉事件
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })

        },
        methods: {
          scrollTo(x,y,time=300) {
            this.scroll.scrollTo(x, y, time)
          },
          finishPullUp() {
            this.scroll.finishPullUp()
          },
          refresh() {
             this.scroll.refresh()
          }


        }
    }
</script>

<style>

</style>

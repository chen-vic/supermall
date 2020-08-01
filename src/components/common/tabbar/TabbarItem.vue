<template>
	<div class="tab-bar-item" @click="itemclick">
		<div v-if="isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'TabbarItem',
		data(){
			return {
			}
		},
		props:{
			link:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		methods:{
			itemclick(){
				this.$router.replace(this.link).catch(err => err)
			}
		},
		computed: {
			isActive(){
				return this.$route.path.indexOf(this.link) == -1
		},
			activeStyle(){
				return this.isActive ? {} : {color:this.activeColor}
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 3.0625rem;
		font-size: 0.875rem;
	}
	.tab-bar-item img {
		width: 1.5rem;
		height: 1.5rem;
		margin-top: 0.1875rem;
		vertical-align: middle;
		margin-bottom: 0.125rem;
	}

</style>

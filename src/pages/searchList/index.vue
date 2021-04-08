<template>
<div class="ld">
	
	<div class="search">
		<div class="lelf_search">
			<div class="top_search" @click="toggleDrop">
				<span>{{ selections[nowIndex].label }}</span>
			</div>
			<div class="bottom_search" v-if="isDrop">
				<image :src="img1" class="vr-image" mode="scaleToFill"/>
				<div class="list_search" v-for="(item, index) in selections" :key="index" @click="chooseSelection(index)">{{item.label}}</div>
			</div>
		</div>
		<div class="right_search"><input type="text" placeholder="请输入项目" @input="bindName" :value="name"></div>
	</div>

</div>
</template>




<script>
export default {
	props: {
    selections: {
      type: Array,
      default: [{label: '新房',value: 0},{label: '二手房',value: 1},{label: '租房',value: 2}]
    }
  },
  data () {
     return {
	  isDrop: false,
      nowIndex: 0
    }
  },
  methods:{
	// 点击下拉显示框
	toggleDrop () {
      this.isDrop = !this.isDrop
    },
	// 点击下拉列表
	chooseSelection (index) {
      this.nowIndex = index
      this.isDrop = false
      this.$emit('on-change', this.selections[this.nowIndex])
    }
 

  }
 


 

   

}
</script>

<style scoped>
.search{ width:90%;  margin-left: 5%; margin-right: 5%; border: 1px rgb(224, 224, 224) solid; height:90rpx; border-radius:10rpx;box-shadow: 1px 1px 5px #b3b3b338;}
.lelf_search{ float: left; width: 30%;}
.right_search{ float: right; width:65%; margin-top: 20rpx; margin-left: 5%; }
.top_search{ width: 100%;}
.top_search span{ font-size: 32rpx; font-weight: bold; text-align: center; width: 100%; display: block; border-right: 1px rgb(224, 224, 224) solid; 
height:45rpx; margin-top: 25rpx;}
.bottom_search{width:70%; border: 1px rgb(224, 224, 224) solid; border-radius: 10rpx; padding-left:15%; padding-right:15%; 
margin-top:50rpx;} 
.bottom_search image{ width:32rpx; height: 18rpx; position: relative; top: -30rpx; left:55rpx;}
.bottom_search .list_search{ height:80rpx; line-height:80rpx; text-align: center; border-bottom:1px rgb(236, 236, 236) solid;
position: relative; top: -30rpx; } 

</style>

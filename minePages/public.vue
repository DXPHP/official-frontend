<template>
  <view class="tn-safe-area-inset-bottom">
	  <!-- 顶部自定义导航 -->
	  <tn-nav-bar fixed alpha customBack>
	  	<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
	  		<text class='icon tn-icon-left'></text>
	  		<text class='icon tn-icon-home-capsule-fill'></text>
	  	</view>
	  </tn-nav-bar>
	<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
		<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
			<view class="tn-padding">
				感谢您的关注
				<!-- <image src="../static/logo.png" mode="aspectFill"></image> -->
			</view>
				<!-- <view class="tn-padding">
					
				</view> -->
		</view>
	</view>
    <!-- <web-view src="https://mp.weixin.qq.com/s/HvduVSi6vVcwK74tmoz1zw"></web-view> -->
    <!-- <web-view src="https://mp.weixin.qq.com/s/1apBuGcPQXMfz2osv5wwiQ"></web-view> -->
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateArticle',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  /* 胶囊*/
  .tn-custom-nav-bar__back {
  	width: 100%;
  	height: 100%;
  	position: relative;
  	display: flex;
  	justify-content: space-evenly;
  	align-items: center;
  	box-sizing: border-box;
  	background-color: rgba(0, 0, 0, 0.15);
  	border-radius: 1000rpx;
  	border: 1rpx solid rgba(255, 255, 255, 0.5);
  	color: #FFFFFF;
  	font-size: 18px;
  
  	.icon {
  		display: block;
  		flex: 1;
  		margin: auto;
  		text-align: center;
  	}
  
  	&:before {
  		content: " ";
  		width: 1rpx;
  		height: 110%;
  		position: absolute;
  		top: 22.5%;
  		left: 0;
  		right: 0;
  		margin: auto;
  		transform: scale(0.5);
  		transform-origin: 0 0;
  		pointer-events: none;
  		box-sizing: border-box;
  		opacity: 0.7;
  		background-color: #FFFFFF;
  	}
  }
</style>

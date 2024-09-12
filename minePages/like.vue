<template>
	<view class="tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>

			我的点赞

		</tn-nav-bar>
		<view class="tn-margin-top" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<view
				class="tn-padding-top-sm tn-padding-bottom-sm tn-padding-left-lg tn-padding-right-lg tn-flex tn-flex-row-center"
				v-for="(item,index) in 6">
				<view class="">
					<image src="../static/logo.png" mode="aspectFill"
						style="width: 106rpx;height: 106rpx;border-radius: 50%;border: 1rpx solid #ccc;"></image>
				</view>
				<view class="tn-flex-1 tn-margin-left-xs">
					<view class="tn-text-bold">
						花开富贵
					</view>
					<view class="tn-text-xs tn-margin-top-xs">
						攒了你的视频  8.30
					</view>
					<view class="tn-text-xs tn-margin-top-xs">
						
					</view>
				</view>
				<view class="">
					<image src="../static/logo.png" mode="aspectFill"
						style="width: 88rpx;height: 110rpx;border-radius: 8rpx;border: 1rpx solid #ccc;"></image>

				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

	import {
		myLikes
	} from '@/api/user.js'
	export default {
		mixins: [template_page_mixin],
		data() {
			return {

			}
		},
		onLoad() {
			myLikes().then(res=>{
				
			})
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
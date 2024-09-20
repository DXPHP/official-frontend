<template>
	<view class="template-help tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#FFFFFF">
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left-arrow'></text>
			</view>
			<view class="tn-flex tn-flex-col-center tn-flex-row-center ">
				<text class="tn-text-bold tn-text-xl tn-color-black">帮助中心</text>
			</view>
		</tn-nav-bar>
		<view class="tn-margin-bottom-xl" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="tn-flex tn-flex-row-between tn-padding tn-strip-bottom-min tn-margin-top-xs">
				<view class="justify-content-item">
					<view class="tn-text-bold tn-text-lg">
						常见问题
					</view>
				</view>
			</view>
			<view class="tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs"
				v-for="(item, index) in helpList" :key="index"
				@click="tn('/minePages/content?data='+JSON.stringify(item.answer))">
				<view class="justify-content-item">
					<view class="tn-text-df">
						{{ item.question }}
					</view>
				</view>
				<view class="justify-content-item tn-text-lg tn-color-grey">
					<view class="tn-icon-right"></view>
				</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	import {
		faq
	} from '@/api/home.js'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateHelp',
		mixins: [template_page_mixin],
		data() {
			return {
				show1: false,
				helpList: [{
						question: ""
					}

				]
			}
		},
		onLoad() {
			faq().then(res => {
				this.helpList = res.data.list
			})
		},
		methods: {
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 60%;
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

	}

	/* 间隔线 start*/
	.tn-strip-bottom-min {
		width: 100%;
		border-bottom: 1rpx solid #F8F9FB;
	}

	.tn-strip-top {
		width: 100%;
		border-top: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}


	/* 用户头像 start */
	.user-image {
		width: 90rpx;
		height: 90rpx;
		position: relative;
	}

	.user-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}

	.tn-footerfixed {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		bottom: 0;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 100;
	}
</style>
<template>
	<view>
		<view class="tn-safe-area-inset-bottom">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
					<text class='icon tn-icon-left'></text>
					<text class='icon tn-icon-home-capsule-fill'></text>
				</view>
			</tn-nav-bar>
		</view>
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="wallpaper-shadow  tn-margin-bottom-lg">
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="tn('/minePages/agreement?type='+'about ')">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-bookmark-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">关于我们</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="tn('/minePages/agreement?type='+'clause')">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-safe-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">隐私政策</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
		
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="Logout"
					data-number="18266666666">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-set-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">退出登录</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>

					</view>
				</tn-list-cell>
			</view>
		</view>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		removeStorage	
	} from '@/common/db.js';
	import {
		storageKey
	} from '@/common/config.js'
	const {
		storage_userInfo,
		storage_token
	} = storageKey
	import {
		bindMobile
	} from '@/api/user.js'

	export default {
		mixins: [template_page_mixin],
		data() {
			return {
				show: false
			}
		},

		methods: {
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			
			Logout() {
				let that = this
				uni.showModal({
					title: '',
					content: '是否退出登录?',
					confirmText: '确认',
					confirmColor: '#3668fc',
					success: function(res) {
						if (res.confirm == true) {
							uni.reLaunch({
								url: '/pages/login/login'
							})
							removeStorage(storage_token)
							removeStorage(storage_userInfo)
						}
					}
				})
			},

	

	
		},

		onShow() {
			
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

	/* 页面阴影 start*/
	.wallpaper-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 图标容器1 start */
	.icon1 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 40rpx;
				border-radius: 50%;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg.png);
				}
			}
		}
	}
</style>
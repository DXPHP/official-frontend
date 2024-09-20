<template>
	<view class="page-e tn-safe-area-inset-bottom">
		<!-- 背景图 -->
		<view class="top-backgroup">
			<image src='https://resource.tuniaokj.com/images/my/my-bg4.png' mode='widthFix' class='backgroud-image'>
			</image>
		</view>
		<view class="tn-margin-left tn-margin-right" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<!-- 图标logo/头像 -->
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom" style="margin-top: -450rpx;">
				<view class="justify-content-item">
					<view class="tn-flex tn-flex-col-center tn-flex-row-left">
						<view class="logo-pic tn-shadow" @click="tn('/minePages/set')">
							<view class="logo-image">
								<view class="tn-shadow-blur"
									:style="'background-image:url('+userInfo.avatar+');width: 110rpx;height: 110rpx;background-size: cover;overflow: hidden;'">
								</view>
							</view>
						</view>
						<view class="tn-padding-right">
							<view class="tn-padding-right tn-padding-left-sm">
								<text class="tn-color-wallpaper tn-text-xl tn-text-bold">{{userInfo.nickname}}</text>
							</view>
							<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">

							</view>
						</view>

					</view>
				</view>
				<view class="justify-content-item" @click="tn('/minePages/set')">
					<view class="tn-icon-install tn-color-gray" style="font-size: 50rpx;opacity: 0.5;">
					</view>
				</view>
			</view>

			<!-- 更多信息-->

			<!-- 方式12 start-->
			<view class="wallpaper-shadow tn-margin-top-lg  tn-padding-bottom-sm tn-bg-white"
				style="position: relative;z-index: 99;">

				<view class="tn-flex tn-flex-row-center tn-radius tn-padding-top">
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('/minePages/order')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-blue--light">
								<view class="tn-icon-order tn-color-wallpaper"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">全部订单</text>
							</view>
						</view>
					</view>

					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="navAddress">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-blue--light">
								<view class="tn-icon-map tn-color-wallpaper"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">收货地址</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('/minePages/like')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-blue--light">
								<view class="tn-icon-like-lack tn-color-wallpaper"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">我的点赞</text>
							</view>
						</view>
					</view>
					<view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('/minePages/message')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"
							style="position: relative;">
							<view
								class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-blue--light">
								<view class="tn-icon-message tn-color-wallpaper"></view>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-ellipsis">我的消息</text>
							</view>
							<view v-if="messageNum>0"
								style="height: 60rpx;width: 60rpx;border-radius: 50%;background-color: #ff0000;color: #ffffff;display: flex;justify-content: center;align-items: center;position: absolute;top: -40rpx;right: 0rpx;">
								{{messageNum}}
							</view>
						</view>
					</view>

				</view>
			</view>

			<!-- 更多信息-->
			<view class="wallpaper-shadow tn-margin-top-lg tn-padding-top-sm tn-padding-bottom-sm">
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="copySource">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-plane-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">项目地址</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="tn('/minePages/public')">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-bookmark-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">关注我们</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
			</view>
			<view class="wallpaper-shadow tn-margin-top-lg tn-margin-bottom-lg tn-padding-top-sm tn-padding-bottom-sm">
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="contact">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-service-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">在线客服</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style" @click="tn('/minePages/help')">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-help-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">常见问题</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style"
						@click="tn('/minePages/feedBack')">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-tip-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">问题反馈</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="tn('/minePages/setApp')" data-number="18266666666">
					<view class="tn-flex tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-set-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">设置</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>

					</view>
				</tn-list-cell>
			</view>

		</view>
		<view class="tn-text-center tn-margin-top-xl tn-padding-bottom-xl">
			<view @click="navTuniaoUI">
				<text class="tn-color-blue tn-padding-xs">{{appInfo.app_name}}</text>
				<text class="">{{appInfo.app_version}}</text>
			</view>

		</view>
		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import {
		appinfo
	} from '@/api/home.js'
	import {
		notifiedCount
	} from '@/api/user.js'
	// import {
	// 	isLogin
	// } from '@/utils/commonUtils.js'
	import {
		getStorage
	} from '@/common/db.js';
	import {
		storageKey
	} from '@/common/config.js';
	const {
		storage_userInfo
	} = storageKey
	export default {
		name: 'Mine',
		data() {
			return {
				messageNum: 0,
				appInfo: {},
				userInfo: {
					nickname: '',
					avatar: ''
				}
			}
		},
		created() {
			// isLogin()
			appinfo().then(res => {
				this.appInfo = res.data
			})
			this.updateInfo()
		},

		methods: {
			updateInfo() {
				let info = getStorage(storage_userInfo)
				if (info) {
					this.userInfo = JSON.parse(info).userinfo
				}

				notifiedCount().then(res => {
					this.messageNum = res.data.count
				})
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},

			// 跳转到智途UI
			navTuniaoUI() {
				// uni.navigateToMiniProgram({
				// 	appId: 'wxf3d81a452b88ff4b'
				// })
			},

			// 收货地址
			navAddress() {
				// uni.chooseAddress({
				// })
				uni.navigateTo({
					url: '/minePages/address'
				})
			},

			// 单纯短震动
			short() {
				wx.vibrateShort();
			},

			//拨打固定电话
			callPhoneNumber() {
				uni.makePhoneCall({
					phoneNumber: "18219128888",
				});
			},
			// 复制id
			copyUid() {
				// wx.vibrateShort();
				// uni.setClipboardData({
				// 	data: "10262008",
				// })
			},
			// 复制开源地址
			copySource() {
				wx.vibrateShort();
				uni.setClipboardData({
					data: "https://gitee.com/weifd/official-frontend",
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page-e {
		max-height: 100vh;
	}

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}

	.tn-color-wallpaper {
		color: #1D2541;
	}


	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}

	/* 自定义导航栏内容 end */

	/* 顶部背景图 start */
	.top-backgroup {
		height: 450rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 450rpx;
			z-index: -1;
		}
	}

	/* 顶部背景图 end */


	/* 图标容器5 start */
	.icon5 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 0rpx;
			margin: 0rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 96rpx;
				height: 96rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
			}
		}
	}

	/* 用户头像 start */
	.logo-image {
		width: 110rpx;
		height: 110rpx;
		position: relative;
		overflow: hidden;
		border-radius: 50%;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 8rpx solid rgba(255, 255, 255, 0.05);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 页面阴影 start*/
	.wallpaper-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 页面阴影 end*/

	/* 图标容器15 start */
	.icon15 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
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


				}
			}
		}
	}


	/* 图标容器12 start */
	.icon12 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 15rpx;
				height: 15rpx;
				font-size: 50rpx;
				border-radius: 50%;
				margin-bottom: 38rpx;
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

				}
			}
		}
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

	/* 图标容器1 end */


	.button-shake {
		animation: shake 4s infinite;
	}

	@keyframes shake {

		5%,
		50% {
			transform: scale(1);
		}

		10% {
			transform: scale(0.9);
		}

		15% {
			transform: scale(1.15);
		}

		20% {
			transform: scale(1.15) rotate(-5deg);
		}

		25% {
			transform: scale(1.15) rotate(5deg);
		}

		30% {
			transform: scale(1.15) rotate(-3deg);
		}

		35% {
			transform: scale(1.15) rotate(2deg);
		}

		40% {
			transform: scale(1.15) rotate(0);
		}
	}



	/* 背景波浪高度 */
	.button-number {
		width: 100%;
		height: 150rpx;
		border-radius: 15rpx;
		position: relative;
		z-index: 1;
	}

	/* 动态背景波浪*/
	@keyframes move_wave {
		0% {
			transform: translateX(0) translateZ(0) scaleY(1)
		}

		50% {
			transform: translateX(-25%) translateZ(0) scaleY(1)
		}

		100% {
			transform: translateX(-50%) translateZ(0) scaleY(1)
		}
	}

	.tnwave {
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		z-index: -1;
		border-radius: 15rpx;
	}

	.waveWrapperInner {
		position: absolute;
		width: 100%;
		overflow: hidden;
		height: 100%;
	}

	.wave {
		position: absolute;
		left: 0;
		width: 200%;
		height: 100%;
		background-repeat: repeat no-repeat;
		background-position: 0 bottom;
		transform-origin: center bottom;
	}

	.bgTop {
		opacity: 0.1;
	}

	.waveTop {
		background-size: 50% 45px;
	}

	.waveAnimation .waveTop {
		animation: move_wave 4s linear infinite;
	}

	.bgMiddle {
		opacity: 0.2;
	}

	.waveMiddle {
		background-size: 50% 40px;
	}

	.waveAnimation .waveMiddle {
		animation: move_wave 3.5s linear infinite;
	}

	.bgBottom {
		opacity: 0.3;
	}

	.waveBottom {
		background-size: 50% 35px;
	}

	.waveAnimation .waveBottom {
		animation: move_wave 2s linear infinite;
	}
</style>
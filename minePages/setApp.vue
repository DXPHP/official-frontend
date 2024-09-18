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
				<!-- 	<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="getPhoneNumber"
						@getphonenumber="bindWechatPhone">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center"
							style="color: #7C8191;">
							<view class="tn-icon-tip-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">绑定手机号</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>
					</button>
				</tn-list-cell> -->
				<!-- 	  <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="callPhoneNumber" data-number="18266666666">
			    <view class="tn-flex tn-flex-col-center">
			      <view
			        class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center" style="color: #7C8191;">
			        <view class="tn-icon-tel-circle-fill"></view>
			      </view>
			      <view class="tn-margin-left-sm tn-flex-1">技术热线</view>
			      <view
			        class="tn-margin-left-sm tn-color-wallpaper tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-gray--light tn-round">
			        188****8888</view>
			    </view>
			  </tn-list-cell> -->

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
		getStorage,
		removeStorage,
		setStorage
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
				show: false,
				systemSettingList: [{
						id: 10,
						text: '清除缓存',
						src: '',
						info: '44.5MB',
					},
					{
						id: 20,
						text: '意见反馈',
						src: '',
						info: '',
					},
					{
						id: 30,
						text: '检查更新',
						src: '',
						info: '',
					},
					{
						id: 40,
						text: '关于我们',
						src: '',
						info: '',
					},
				],
				// 缓存大小
				cacheSize: '-',
				// 最新版本号
				newVersion: '-',
				version: {
					content: "",
					downUrl: "",
					id: 0,
					newVersion: "",
					title: "",
					type: 0,
					upGrade: 0,
				},
				isUpdate: false,
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

			clearCache() {
				uni.showLoading({
					title: "正在清除~"
				})
				setTimeout(function() {
					uni.showToast({
						title: '清除成功！',
						icon: 'none',
						success() {
							uni.hideLoading()
						}
					});
				}, 1200);
			},

			getCache() {
				// #ifdef APP-PLUS
				let self = this;
				plus.cache.calculate(size => {
					if (size < 1024) {
						self.cacheSize = size + 'B';
					} else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
						self.cacheSize = Math.floor((size / 1024) * 100) / 100 + 'KB';
					} else if (size / 1024 / 1024 >= 1) {
						self.cacheSize = Math.floor((size / 1024 / 1024) * 100) / 100 + 'M';
					}

				});
				// #endif
			},

			// 检查版本更新
			getVersion() {
				let that = this;
				let os = uni.getSystemInfoSync().platform == 'ios' ? 2 : 1
				// uni.request({
				// 	url: `${config.baseUrl}getAppNewVersion/` + os,
				// 	data: {
				// 		// text: 'uni.request'
				// 	},

				// 	success: (res) => {
				// 		console.log("当前版本二", res.data.data)
				// 		that.version = res.data.data;
				// 		this.checkVersion();
				// 	}
				// });
			},
			checkVersion() {
				// checkUpdate()
			},

			toNotificationSettings() {
				// #ifdef APP-PLUS
				if (plus.os.name == 'Android') { // 判断是Android
					var main = plus.android.runtimeMainActivity();
					var pkName = main.getPackageName();
					var uid = main.getApplicationInfo().plusGetAttribute("uid");
					var NotificationManagerCompat = plus.android.importClass(
						"android.support.v4.app.NotificationManagerCompat");
					//android.support.v4升级为androidx
					if (NotificationManagerCompat == null) {
						NotificationManagerCompat = plus.android.importClass(
							"androidx.core.app.NotificationManagerCompat");
					}
					console.log("NotificationManagerCompat", NotificationManagerCompat)
					var areNotificationsEnabled = NotificationManagerCompat.from(main).areNotificationsEnabled();
					// 未开通‘允许通知’权限，则弹窗提醒开通，并点击确认后，跳转到系统设置页面进行设置  
					// console.log("areNotificationsEnabled",areNotificationsEnabled)
					var Intent = plus.android.importClass('android.content.Intent');
					var Build = plus.android.importClass("android.os.Build");
					//android 8.0引导  
					if (Build.VERSION.SDK_INT >= 26) {
						var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
						intent.putExtra('android.provider.extra.APP_PACKAGE', pkName);
					} else if (Build.VERSION.SDK_INT >= 21) { //android 5.0-7.0  
						var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
						intent.putExtra("app_package", pkName);
						intent.putExtra("app_uid", uid);
					} else { //(<21)其他--跳转到该应用管理的详情页  
						intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
						var uri = Uri.fromParts("package", mainActivity.getPackageName(),
							null);
						intent.setData(uri);
					}
					// 跳转到该应用的系统通知设置页  
					main.startActivity(intent);
				} else if (plus.os.name == 'iOS') { // 判断是ISO
					var isOn = undefined;
					var types = 0;
					var app = plus.ios.invoke('UIApplication', 'sharedApplication');
					var settings = plus.ios.invoke(app, 'currentUserNotificationSettings');
					if (settings) {
						types = settings.plusGetAttribute('types');
						plus.ios.deleteObject(settings);
					} else {
						types = plus.ios.invoke(app, 'enabledRemoteNotificationTypes');
					}
					plus.ios.deleteObject(app);
					isOn = (0 != types);
					var app = plus.ios.invoke('UIApplication', 'sharedApplication');
					var setting = plus.ios.invoke('NSURL', 'URLWithString:', 'app-settings:');
					plus.ios.invoke(app, 'openURL:', setting);
					plus.ios.deleteObject(setting);
					plus.ios.deleteObject(app);
				}
				// #endif MP-WEIXIN
				if (plus.os.name == 'Android') { // 判断是Android
					var main = plus.android.runtimeMainActivity();
					var pkName = main.getPackageName();
					var uid = main.getApplicationInfo().plusGetAttribute("uid");
					var NotificationManagerCompat = plus.android.importClass(
						"android.support.v4.app.NotificationManagerCompat");
					//android.support.v4升级为androidx
					if (NotificationManagerCompat == null) {
						NotificationManagerCompat = plus.android.importClass(
							"androidx.core.app.NotificationManagerCompat");
					}
					console.log("NotificationManagerCompat", NotificationManagerCompat)
					var areNotificationsEnabled = NotificationManagerCompat.from(main).areNotificationsEnabled();
					// 未开通‘允许通知’权限，则弹窗提醒开通，并点击确认后，跳转到系统设置页面进行设置  
					// console.log("areNotificationsEnabled",areNotificationsEnabled)
					var Intent = plus.android.importClass('android.content.Intent');
					var Build = plus.android.importClass("android.os.Build");
					//android 8.0引导  
					if (Build.VERSION.SDK_INT >= 26) {
						var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
						intent.putExtra('android.provider.extra.APP_PACKAGE', pkName);
					} else if (Build.VERSION.SDK_INT >= 21) { //android 5.0-7.0  
						var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
						intent.putExtra("app_package", pkName);
						intent.putExtra("app_uid", uid);
					} else { //(<21)其他--跳转到该应用管理的详情页  
						intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
						var uri = Uri.fromParts("package", mainActivity.getPackageName(),
							null);
						intent.setData(uri);
					}
					// 跳转到该应用的系统通知设置页  
					main.startActivity(intent);
				} else if (plus.os.name == 'iOS') { // 判断是ISO
					var isOn = undefined;
					var types = 0;
					var app = plus.ios.invoke('UIApplication', 'sharedApplication');
					var settings = plus.ios.invoke(app, 'currentUserNotificationSettings');
					if (settings) {
						types = settings.plusGetAttribute('types');
						plus.ios.deleteObject(settings);
					} else {
						types = plus.ios.invoke(app, 'enabledRemoteNotificationTypes');
					}
					plus.ios.deleteObject(app);
					isOn = (0 != types);
					var app = plus.ios.invoke('UIApplication', 'sharedApplication');
					var setting = plus.ios.invoke('NSURL', 'URLWithString:', 'app-settings:');
					plus.ios.invoke(app, 'openURL:', setting);
					plus.ios.deleteObject(setting);
					plus.ios.deleteObject(app);
				}
			},


		},

		onShow() {
			this.getCache()
			// #ifdef APP-PLUS
			this.getVersion();
			// #endif
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
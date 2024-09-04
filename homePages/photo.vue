<template>
	<view class="tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed customBack :bottomShadow="false" :backgroundColor="navBarBackgroundColor" id="navbar">
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack" :style="[navBarStyle]">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-discover-fill'></text>
			</view>
			<view class="tn-flex tn-flex-col-center tn-flex-row-center" :style="[navBarStyle2]">
				<view class="tn-text-bold tn-text-xl">图鸟科技随拍</view>
			</view>
		</tn-nav-bar>

		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="22000"
			@change="cardSwiper">
			<swiper-item v-for="(item,index) in list" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item image-banner">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item,index) in list" :key="index">
				<view class="spot" :class="cardCur==index?'active':''"></view>
			</block>
		</view>

		<!-- 头部start-->
		<view class="shop-function tn-margin-bottom-xl" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin">
				<view class="justify-content-item">
					<view class="tn-flex tn-flex-col-center tn-flex-row-left">
						<view class="tn-color-white" style="width: 70vw;">
							<view class="tn-padding-right tn-text-xxl tn-text-bold">
								公司照片
							</view>
							<view class="tn-padding-right tn-padding-top-sm tn-text-ellipsis tn-text-sm">
								<text class="tn-padding-right-sm">图鸟_凶姐 & 写真图集</text>
							</view>
						</view>
					</view>
				</view>
				<view class="justify-content-item">
					<!-- <view class="tn-icon-tip-fill tn-text-xxl tn-color-white" style="opacity: 0.6;" @click="showModal">
					</view> -->
				</view>
				<!-- <view class="justify-content-item">
          <view class="logo-pic tn-shadow">
            <view class="logo-image">
              <view class="tn-shadow-blur" style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg');width: 100rpx;height: 100rpx;background-size: cover;">
              </view>
            </view>
          </view>
        </view> -->
			</view>
		</view>
		<!-- 头部 end-->

		<tn-modal v-model="show1" :custom="true">
			<view class="custom-modal-content">
				<image class="tn-radius"
					src='https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683185728989-assets/web-upload/af525e21-57d0-4403-9c13-bf073d632638.jpeg'
					mode='aspectFill' style="width: 100%;"></image>
				<view class="tn-text-justify tn-padding-top">注意：相册图集本人为 图鸟_凶姐</view>
				<view class="tn-text-justify tn-padding-top">凶姐照片未经授权，请勿将此相册图集另作其他任何非商业、商业用途，如有疑问，请微信咨询图鸟 tnkewo</view>
			</view>
		</tn-modal>

		<view class="group-wrap tn-bg-white" id="page_tips">

			<!-- 悬浮按钮-->
			<!-- <view class="tn-flex tn-flex-row-between" style="padding: 60rpx 0 30rpx 0;">
        <view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
          <tn-button backgroundColor="#3668fc" padding="40rpx 0" width="90%" :fontSize="28" @click="showModal">
            <text class="tn-icon-wechat tn-padding-right-xs tn-color-white"></text>
            <text class="tn-color-white">微 信</text>
          </tn-button>
        </view>
        <view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
          <tn-button backgroundColor="#fbbd12" padding="40rpx 0" width="90%" :fontSize="28" open-type="share">
            <text class="tn-icon-send tn-padding-right-xs tn-color-white"></text>
            <text class="tn-color-white">分 享</text>
          </tn-button>
        </view>
      </view> -->


			<view class="" style="padding: 30rpx 20rpx;">
				<tn-waterfall ref="waterfall" v-model="list" @finish="handleWaterFallFinish">
					<template v-slot:left="{ leftList }">
						<view v-for="(item, index) in leftList" :key="item.id" class="product__item"
							@click="previewQRCodeImage(list.map(res=>res.image),index)">
							<view class="item__image">
								<tn-lazy-load :threshold="6000" height="100%" :image="item.image" :index="item.id"
									imgMode="widthFix"></tn-lazy-load>
							</view>
							<!-- <view class="item__data">
                  <view class="item__title-container">
                    <text class="item__title tn-color-black">{{ item.title }}</text>
                  </view>
                  <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
                    <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">{{ tagItem }}</view>
                  </view>
                </view> -->
						</view>
					</template>
					<template v-slot:right="{ rightList }">
						<view v-for="(item, index) in rightList" :key="item.id" class="product__item"
							@click="previewQRCodeImage(list.map(res=>res.image),index)">
							<view class="item__image">
								<tn-lazy-load :threshold="6000" height="100%" :image="item.image" :index="item.id"
									imgMode="widthFix"></tn-lazy-load>
							</view>
							<!-- <view class="item__data">
                  <view class="item__title-container">
                    <text class="item__title tn-color-black">{{ item.title }}</text>
                  </view>
                  <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
                    <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">{{ tagItem }}</view>
                  </view>
                </view> -->
						</view>
					</template>
				</tn-waterfall>
			</view>
			<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
				<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
				<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
				<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
			</view>


		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		photosList
	} from '@/api/home.js'
	import {
		previewImage
	} from '@/utils/commonUtils.js'

	export default {
		name: 'TemplateWallpaper',
		mixins: [template_page_mixin],
		data() {
			return {
				show1: false,
				cardCur: 0,
				/* 导航*/
				navBarRectInfo: {},
				navBarChangebaseLineHeight: 0,
				navBarStyle: {
					color: '#FFFFFF',
					opacity: 1,
					display: 'flex'
				},
				navBarStyle2: {
					color: 'rgba(255,255,255,0)',
					opacity: 1,
					display: 'flex'
				},
				navBarBackgroundColor: 'rgba(255, 255, 255, 0)',
				activeBgAnimation: {},

				loadStatus: 'loading',
				listStatus: 0,
				params: {
					page: 1,
					//  pageSize: 10,
				},
				id: ''


			}
		},

		onLoad(e) {
			this.id = e.id
			this.getList()
		},


		onReady() {
			this.$nextTick(() => {
				this.initNavBarRectInfo()
			})
		},
		onPageScroll() {
			this.updateNavBarRectInfo()
		},
		// 下拉刷新
		onPullDownRefresh() {
			// 初始化数据
			this.init();
			this.getList('refresh');
		},
		// 触底加载
		onReachBottom() {
			// 如果数据加载完毕 不再调用方法
			if (this.loadStatus == 'nomore') return;
			// 否则调用数据加载方法
			this.params.page++;
			this.getList();
		},


		methods: {
			/* ------------------加载数据列表 start------------------------  */
			// 初始化数据
			init() {
				this.loadStatus = 'loading';
				this.params.page = 1
				this.listStatus = 0;
			},
			async getList(refresh) {
				let params = {
					...this.params,
					id: this.id

				}
				try {
					let res = await photosList(params)
					let list = res.data.list //拿到数据格式可能不同----只需要修改这里
					let curPageLen = list.length; //数据列表长度
					if (this.params.page == 1) this.list = []; // 如果数据是第一页 需置空数据列表重新加载
					if (curPageLen != 0) {
						this.list = this.list.concat(list); //追加新数据
						// 如果传回数组长度小于10 数据加载完毕。 反之数据可以继续加载
						curPageLen < 10 ? this.loadStatus = 'nomore' : this.loadStatus = 'loading';
					} else {
						this.loadStatus = 'nomore'; //数据加载完毕
						// 如果首次加载 数据列表为空
						if (this.params.page == 1) this.listStatus = 1;
					}
					// 如果点击下拉加载
					if (refresh) {
						uni.stopPullDownRefresh();
					}
				} catch (error) {
					// 在这里处理错误  
					this.listStatus = 2;
					console.error('捕获到错误：', error);
					// 你可以根据错误类型或错误信息来执行不同的操作  
				}

			},
			/* ------------------加载数据列表 end------------------------  */

			// 瀑布流加载完毕事件
			handleWaterFallFinish() {
				this.loadStatus = 'loadmore'
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},

			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 预览图片
			previewQRCodeImage(list,index) {
				// 预览图片
				uni.previewImage({
					urls: list,
					current: index,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});

			},
			// 弹出模态框
			showModal(event) {
				this.openModal()
			},
			// 打开模态框
			openModal() {
				this.show1 = true
			},
			// 初始化导航栏信息
			async initNavBarRectInfo() {
				const navBarRectInfo = await this._tGetRect('#navbar')
				const pageTipsRectInfo = await this._tGetRect('#page_tips')
				// console.log(navBarRectInfo, pageTipsRectInfo, navBarRectInfo?.top, pageTipsRectInfo?.top);
				if (!navBarRectInfo.hasOwnProperty('top') || !pageTipsRectInfo.hasOwnProperty('top')) {
					setTimeout(() => {
						this.initNavBarRectInfo()
					}, 10)
					return
				}
				this.navBarRectInfo = {
					top: navBarRectInfo.top
				}
				this.navBarChangebaseLineHeight = pageTipsRectInfo.top - navBarRectInfo.top
			},
			// 更新导航栏信息
			updateNavBarRectInfo() {
				this._tGetRect('#page_tips').then((res) => {
					const top = res?.top || 0
					if (!top) {
						return
					}
					const differHeight = top - this.navBarRectInfo.top
					const opacity = differHeight / this.navBarChangebaseLineHeight
					if (opacity < 0) {
						// this.navBarStyle.opacity = 1
						// this.navBarStyle.display = 'flex'
						this.navBarStyle.color = 'rgba(0, 0, 0, ${opacity})'
						this.navBarStyle2.color = 'rgba(0, 0, 0, ${opacity})'
						this.navBarBackgroundColor = `rgba(255, 255, 255, 1)`
					} else {
						// this.navBarStyle.opacity = 1 - opacity
						// this.navBarStyle.display = 'flex'
						this.navBarStyle.color = 'rgba(255, 255, 255, 1)'
						this.navBarStyle2.color = 'rgba(255, 255, 255, 0)'
						this.navBarBackgroundColor = `rgba(255, 255, 255, ${1 - opacity})`
					}

					// console.log(top, differHeight, opacity);
				})
			},

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
		background-color: rgba(0, 0, 0, 0.03);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		// color: #FFFFFF;
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
			opacity: 0.05;
			background-color: #000000;
		}
	}

	/* 内容 start*/
	.tn-plan-content {
		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 内容 end*/

	/* 轮播视觉差 start */
	.card-swiper {
		height: 500rpx !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		// padding: 0rpx 30rpx 90rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
		will-change: transform;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		opacity: 0;
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -60rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
	}

	/* 顶部店铺 */
	.shop-function {
		position: relative;
		z-index: 1;
		margin-top: -450rpx;
		padding-bottom: 110rpx;
		background-image: linear-gradient(rgba(255, 255, 255, 0.01), rgba(0, 0, 0, 0.4));
	}

	/* 用户头像 start */
	.logo-image {
		width: 100rpx;
		height: 100rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 6rpx solid rgba(255, 255, 255, 0.25);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 内容*/
	.group-wrap {
		position: relative;
		z-index: 1;
		// padding: 20rpx 30rpx;
		margin-top: -130rpx;
		margin-bottom: 40rpx;
		border-radius: 30rpx 30rpx 0 0;
	}

	/* 阴影 start*/
	.mould-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tn-tabbar-height {
		min-height: 20rpx;
		height: calc(40rpx + env(safe-area-inset-bottom) / 2);
	}

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


	/* 瀑布流*/
	.product__item {
		background-color: #FFFFFF;
		overflow: hidden;
		margin: 0 10rpx;
		margin-bottom: 20rpx;
		// box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

		.item {

			/* 图片 start */
			&__image {
				width: 100%;
				height: auto;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
				border-radius: 10rpx;
				overflow: hidden;
			}

			/* 图片 end */

			/* 内容 start */
			&__data {
				padding: 14rpx 0rpx;
			}

			/* 标题 start */
			&__title-container {
				text-align: justify;
				line-height: 38rpx;
				vertical-align: middle;
			}

			&__store-type {
				height: 28rpx;
				font-size: 20rpx;
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 4rpx;
				border-radius: 6rpx;
				white-space: nowrap;
				text-align: center;
				top: -2rpx;
				margin-right: 6rpx;
			}

			&__title {
				font-size: 30rpx;
			}

			/* 标题 end */

			/* 标签 start */
			&__tags-container {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: flex-start;
			}

			&__tag {
				margin: 10rpx;
				color: #7C8191;
				background-color: #F3F2F7;
				padding: 4rpx 14rpx 6rpx;
				border-radius: 10rpx;
				font-size: 20rpx;

				&:first-child {
					margin-left: 0rpx !important;
				}
			}

			/* 标签 end */
			/* 内容 end */
		}
	}
</style>
<template>
	<view class="template-product tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="5000"
			@change="cardSwiper">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item image-banner">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item,index) in swiperList" :key="index">
				<view class="spot" :class="cardCur==index?'active':''"></view>
			</block>
		</view>

		<view class="tn-margin">
			<view class="tn-flex tn-flex-row-between">
				<view class="justify-content-item tn-text-bold tn-margin-top-xs" style="font-size: 38rpx;">
					{{info.data.name}}
				</view>
				<view class="justify-content-item">
					<view
						class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur button-1"
						@click="tn('/pageA/pano/pano')">
						<!-- <view class="tn-icon-share-circle tn-color-white"></view> -->
						<button class="tn-button--clear-style" open-type="share" style="border-radius: 0;">
							<view class="tn-icon-share-circle tn-color-white"></view>
						</button>
					</view>
				</view>
			</view>
			<view class="tn-flex tn-flex-row-between tn-margin-top">
				<view class="justify-content-item tn-text-bold tn-color-purplered">
					<text class="" style="font-size: 50rpx;">{{info.data.price}}</text>
					<text class="tn-padding-left-xs" style="font-size: 30rpx;">￥</text>
				</view>
				<view class="justify-content-item tn-color-gray tn-padding-top-xs">
					<view class="">已售 {{info.data.sales}}</view>
				</view>
			</view>
		</view>

		<!-- 边距间隔 -->
		<view class="tn-strip-bottom"></view>


		<!-- 更多信息-->
		<!-- <view class="tn-padding-top-sm tn-padding-bottom-sm">
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
				<view class="tn-flex tn-flex-col-center">
					<view class="tn-flex-1">前端语言</view>
					<view class="tn-margin-left-sm tn-color-gray" style="font-size: 28rpx;">Uniapp vue2</view>
				</view>
			</tn-list-cell>
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
				<view class="tn-flex tn-flex-col-center">
					<view class="tn-flex-1">后端语言</view>
					<view class="tn-margin-left-sm tn-color-gray" style="font-size: 28rpx;">敬请期待</view>
				</view>
			</tn-list-cell>
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
				<view class="tn-flex tn-flex-col-center">
					<view class="tn-flex-1">适合群体</view>
					<view class="tn-margin-left-sm tn-color-gray" style="font-size: 28rpx;">任何公司</view>
				</view>
			</tn-list-cell>
		</view> -->


		<!-- 边距间隔 -->
		<!-- <view class="tn-strip-bottom"></view>
    
    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xl">
          产品标签
        </view>
      </view>
    </view>
    
    <view class="">
      <view class="tn-tag-content tn-margin tn-text-justify">
        <view v-for="(item, index) in tagList" :key="index" class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
          <text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
        </view>
      </view>
    </view> -->

		<!-- 边距间隔 -->
		<!-- <view class="tn-strip-bottom"></view> -->

		<!-- <view class="tn-margin-top-sm">
			<view class="nav_title--wrap">
				<view class="nav_title tn-cool-bg-color-6">
					<text class="tn-icon-star tn-padding-right-sm tn-text-xxl"></text>
					<text class="tn-text-xl">图鸟科技 · 界面预览</text>
					<text class="tn-icon-star tn-padding-left-sm tn-text-xxl"></text>
				</view>
			</view>
		</view> -->
		<!-- 
		<tn-scroll-list :indicator="false">
			<view class="tn-flex tn-margin">
				<view class="tn-margin-right-sm" v-for="(item, index) in 10" :key="index">
					<view class="image-pic" @tap="previewProductImage"
						style="background-image:url('https://resource.tuniaokj.com/images/uniapp_market/1.jpg');">
						<view class="image-good">
						</view>
					</view>
				</view>
			</view>
		</tn-scroll-list> -->



		<!-- 边距间隔 -->
		<view class="tn-strip-bottom"></view>


		<!-- <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xl">
          商品详情
        </view>
      </view>
    </view> -->
		<view class="tn-margin-top-sm">
			<view class="nav_title--wrap">
				<view class="nav_title tn-cool-bg-color-6">
					<text class="tn-icon-star tn-padding-right-sm tn-text-xxl"></text>
					<text class="tn-text-xl">绿道科技 · 产品详情</text>
					<text class="tn-icon-star tn-padding-left-sm tn-text-xxl"></text>
				</view>
			</view>
		</view>

		<view class="content-backgroup tn-margin">
			<rich-text :nodes="info.data.detail"></rich-text>
			<!-- <image
				src='https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1680077186004-assets/web-upload/c3551495-0ef4-4666-9fc5-cd4c5bc251de.jpeg'
				mode='widthFix' class='backgroud-image'></image>
			<image
				src='https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1680077186004-assets/web-upload/c3551495-0ef4-4666-9fc5-cd4c5bc251de.jpeg'
				mode='widthFix' class='backgroud-image'></image>
			<image
				src='https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1680077186004-assets/web-upload/c3551495-0ef4-4666-9fc5-cd4c5bc251de.jpeg'
				mode='widthFix' class='backgroud-image'></image> -->
		</view>


		<view id="top-info" class="tn-footerfixed tn-safe-area-inset-bottom tn-bg-white"
			:style="{transform: `translateY(${topInfoTranslateY}px)`}">
			<!-- <view class="footerfixed tn-bg-white tn-safe-area-inset-bottom"> -->
			<view class="tn-flex tn-flex-row-between tn-flex-col-center">
				<view class="tn-flex-2 justify-content-item tn-color-gray">
					<view class="tn-flex tn-flex-row-center">
						<view class="tn-flex-1" @click="goBack">
							<view class="tn-icon-home-in" style="font-size: 42rpx;"></view>
							<view class="tn-text-center tn-text-sm tn-padding-top-xs">首页</view>
						</view>
						<view class="tn-flex-1 tn-padding-right-xl">
							<button class="tn-button--clear-style" open-type="contact" style="border-radius: 0;">
								<view class="tn-icon-service-simple" style="font-size: 42rpx;"></view>
								<view class="tn-text-center tn-text-sm tn-padding-top-xs">客服</view>
							</button>
						</view>
					</view>
				</view>
				<view class="tn-flex-3 justify-content-item tn-padding-top-sm tn-padding-bottom-sm"
					@tap.stop="openSkuModal">
					<tn-button shape="round" backgroundColor="tn-main-gradient-red" padding="38rpx 0" width="92%"
						:fontSize="30" shadow>
						<text class="tn-color-white" hover-class="tn-hover" :hover-stay-time="150">
							立即购买
						</text>
					</tn-button>
				</view>
			</view>
			<!-- </view> -->
			<!-- <view class="justify-content-item tn-padding-bottom">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view class="user-pic">
            <view class="user-image">
              <view class="tn-shadow-blur" style="background-image:url('https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg');width: 100rpx;height: 100rpx;background-size: cover;">
              </view>
            </view>
          </view>
          <view class="tn-padding-right tn-color-black">
            <view class="tn-padding-right tn-padding-left-sm">
              <text class="tn-text-xl tn-text-bold tn-color-black">徐猪猪</text>
              <text class="tn-padding-left-sm tn-color-gray">总经理</text>
            </view>
            <view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
              <text class="tn-color-gray">佛山猛犸空间家具有限公司</text>
            </view>
          </view>
        </view>
      </view>
      <view class="justify-content-item tn-flex-col-center tn-flex-row-center tn-text-center tn-padding-bottom">
        <view class="">
          <text class="tn-icon-wechat-fill tn-color-green--dark" style="font-size: 50rpx;"></text>
        </view>
        <view class="">
          <text class="tn-text-sm">加微信</text>
        </view>
      </view> -->
		</view>

		<!--  <view class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm">
      <tn-goods-nav :options="countOptions" :buttonGroups="customButtonGroups" buttonType="round" :safeAreaInsetBottom="true" @optionClick="onOptionClick" @buttonClick="onButtonClick"></tn-goods-nav>
    </view> -->

		<!-- 选择弹框 -->
		<!-- popup会有延迟，采用这种方式来优化弹窗的优化体验-->
		<sku-modal v-model="showSkuModal" :data="info.data" @confirm="confirm"></sku-modal>

		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import SkuModal from '@/components/sku/sku.vue'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		goodsDetail
	} from '@/api/home.js'
	export default {
		components: {
			SkuModal
		},
		name: 'TemplateProduct',
		mixins: [template_page_mixin],
		data() {
			return {
				/* 选择弹窗*/
				showSkuModal: false,

				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					title: '免费开源',
					name: '商业合作请联系作者',
					text: '微信：tnkewo',
					url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1680077186016-assets/web-upload/e2ce2561-0532-471e-b612-41863c81da98.jpeg',
				}, {
					id: 1,
					type: 'image',
					title: '图鸟南南',
					name: '欢迎加入东东们',
					text: '如果你也有不错的作品',
					url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1675956894200-assets/web-upload/8cbc12f4-f04a-4271-a38f-07b5ccabe214.jpeg',
				}, {
					id: 2,
					type: 'image',
					title: '图鸟西西',
					name: '一起玩转scss',
					text: '用最少的代码做最骚的效果',
					url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1675956894159-assets/web-upload/0e1e0010-211f-4a21-b7dd-2799b1f39188.jpeg',
				}, {
					id: 3,
					type: 'image',
					title: '图鸟北北',
					name: '微信号 tnkewo',
					text: '商业合作请联系作者',
					url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676020663234-assets/web-upload/2eb50c08-599b-4c5b-9613-afa0ea719bdd.jpeg',
				}],
				countOptions: [{
					icon: 'star',
					text: '收藏'
				}, {
					icon: 'share-circle',
					text: '分享',
				}],
				customButtonGroups: [{
					text: '咨询客服',
					backgroundColor: 'tn-cool-bg-color-5',
					color: '#FFFFFF'
				}, {
					text: '立即购买',
					backgroundColor: 'tn-cool-bg-color-15--reverse',
					color: '#FFFFFF'
				}],
				tagList: [{
						color: 'red',
						title: "真皮",
					},
					{
						color: 'cyan',
						title: "简约",
					},
					{
						color: 'blue',
						title: "猛犸",
					},
					{
						color: 'green',
						title: "互联网",
					},
					{
						color: 'orange',
						title: "免费",
					},
					{
						color: 'purplered',
						title: "配色",
					},
					{
						color: 'purple',
						title: "软件开发",
					},
					{
						color: 'brown',
						title: "插画",
					},
					{
						color: 'yellowgreen',
						title: "C4D",
					},
					{
						color: 'grey',
						title: "海报",
					}
				],

				topInfo: {
					height: 0,
				},
				topInfoTranslateY: 0,
				prevScrollTop: 0,
				id: '',
				info: {}
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getData()
		},
		onReady() {
			this.getTopInfoRect()
		},
		onPageScroll(e) {
			this.handlePageScroll(e.scrollTop)
		},
		methods: {
			async getData() {
				let res = await goodsDetail({
					id: this.id
				})
				this.swiperList = res.data.data.images
				this.info = res.data
			},
			// 预览图片
			previewProductImage() {
				wx.previewImage({
					urls: ['https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg',
						'https://resource.tuniaokj.com/images/uniapp_market/1.jpg'
					]
				})
			},

			// 打开选择弹框
			openSkuModal() {
				this.showSkuModal = true
			},

			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			confirm(e) {
				console.log('没拿到返回的数据了', e)
				let info = {
					name:this.info.name,
					...e.val,
					num:e.num,
					id:this.info.id
				}
				uni.navigateTo({
					url: '/commPages/order?info=' + JSON.stringify(info)
				})
			},
			// 获取顶部销售信息容器相关信息
			getTopInfoRect() {
				this._tGetRect('#top-info').then((res) => {
					if (!res) {
						setTimeout(() => {
							this.getTopInfoRect()
						}, 50)
						return
					}
					this.topInfo.height = res.height
				})
			},
			// 处理页面滚动事件
			handlePageScroll(scrollTop) {
				console.log(scrollTop);
				if (this.prevScrollTop > scrollTop) {

					// 内容下滑，即手指从下往上滚
					this.topInfoTranslateY = 0
				} else {
					// 内容上滑，即手指从上往下滚
					if (scrollTop > this.topInfo.height) {
						this.topInfoTranslateY = this.topInfo.height
					}

				}

				this.prevScrollTop = scrollTop
			},
		}
	}
</script>

<style lang="scss" scoped>
	.template-product {}

	.tn-tabbar-height {
		min-height: 20rpx;
		height: calc(40rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 用户头像 start */
	.logo-image {
		width: 110rpx;
		height: 110rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 10rpx;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

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

	/* 轮播视觉差 start */
	.card-swiper {
		height: 750rpx !important;
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
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
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

	/* 间隔线 start*/
	.tn-strip-bottom-min {
		width: 100%;
		border-bottom: 1rpx solid #F8F9FB;
	}

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 46rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

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

	/* 底部*/
	.tn-footerfixed {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		bottom: 0;
		width: 100%;
		transition: all 0.25s ease-out;
		will-change: transform;
		z-index: 100;
	}

	/* 底部 start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 标签内容 start*/
	.tn-tag-content {
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

	/* 标签内容 end*/

	/* 内容图 start */
	.content-backgroup {
		z-index: -1;

		.backgroud-image {
			width: 100%;
		}
	}

	/* 内容图 end */

	/* 商家商品 start*/
	.tn-blogger-content {
		&__wrap {
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
			border-radius: 20rpx;
			margin: 15rpx;
		}

		&__info {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__label {
			&__item {
				line-height: 45rpx;
				padding: 0 10rpx;
				margin: 5rpx 18rpx 0 0;

				&--prefix {
					color: #E83A30;
					padding-right: 10rpx;
				}
			}

			&__desc {
				line-height: 35rpx;
			}
		}

		&__main-image {
			border-radius: 16rpx 16rpx 0 0;

			&--1 {
				max-width: 690rpx;
				min-width: 690rpx;
				max-height: 400rpx;
				min-height: 400rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 24rpx;
			padding-right: 5rpx;
		}
	}

	.image-good {
		width: 180rpx;
		height: 300rpx;
		position: relative;
	}

	.image-pic {
		border: 1rpx solid #F8F7F8;
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: center;
		border-radius: 20rpx;
	}

	.image-book {
		padding: 150rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-picbook {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 15rpx 15rpx 0 0;
	}

	/* 按钮 */
	.button-1 {
		background-color: rgba(0, 0, 0, 0.15);
		position: absolute;
		/* bottom:200rpx;
      right: 20rpx; */
		top: 700rpx;
		right: 30rpx;
		z-index: 1001;
		border-radius: 100px;
	}

	/* 图标容器15 start */
	.icon15 {
		&__item {
			width: 30%;

			// border-radius: 10rpx;
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
</style>
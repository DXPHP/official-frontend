<template>
	<view class="template-blogger tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack :backgroundColor="isFixed?'#ffffff !important;':''">
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<!-- 立体头像-->
		<view class='cube'
			:style="'background-image: url(https://resource.tuniaokj.com/images/blogger/bg_image_1.jpg);'">
			<view class="cube__container">
				<view class="cube__container__body">
					<view class="cube__container__body__item cube__container__body__item--front"
						:style="{backgroundImage: `url(${companyInfo.company.logo})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--back"
						:style="{backgroundImage: `url(${companyInfo.company.logo})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--right"
						:style="{backgroundImage: `url(${companyInfo.company.logo})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--left"
						:style="{backgroundImage: `url(${companyInfo.company.logo})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--top"
						:style="{backgroundImage: `url(${companyInfo.company.logo})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--bottom"
						:style="{backgroundImage: `url(${companyInfo.company.logo})`}"></view>
				</view>
			</view>


			<view class='tn-text-center tn-margin-top-lg'>
				<view class="tn-padding tn-text-bold tn-text-lg">{{ companyInfo.company.name }}</view>
				<view class="tn-padding-bottom-xl tn-text-lg">{{ companyInfo.company.address }}</view>
			</view>
		</view>
		<!-- 边距间隔 -->
		<view class="tn-strip-bottom" :style="isFixed?'background-color: #ffffff;':''"></view>
		<view class="">
			<tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height" @fixed="fixed" @unfixed="unfixed">
				<view class="" :style="isFixed?'background-color: #ffffff;':''">
					<tn-tabs :list="fixedList" :current="current" :isScroll="false" activeColor="#000" :bold="true"
						:fontSize="32" :badgeOffset="[20, 50]" @change="tabChange"></tn-tabs>
				</view>

			</tn-sticky>
		</view>



		<view class="" v-if="current==0">
			<view class="" style="padding: 30rpx 20rpx;">
				<tn-waterfall ref="waterfall" v-model="companyInfo.album" @finish="handleWaterFallFinish">
					<template v-slot:left="{ leftList }">
						<view v-for="(item, index) in leftList" :key="item.id" class="product__item" @click="tn('/homePages/photo?id='+item.id)">
							<view class="item__image">
								<tn-lazy-load :threshold="6000" height="100%" :image="item.image" :index="item.id"
									imgMode="widthFix"></tn-lazy-load>
							</view>
							<!-- <text class="item__title tn-color-black">{{ item.title }}</text> -->
							<view class="item__data">
								<view class="item__title-container">
									<text class="item__title tn-color-black">{{ item.name }}</text>
								</view>
								<!-- <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
									<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
										{{ tagItem }}</view>
								</view> -->
							</view>
						</view>
					</template>
					<template v-slot:right="{ rightList }">
						<view v-for="(item, index) in rightList" :key="item.id" class="product__item"
							@click="tn('/homePages/photo?id='+item.id)">
							<view class="item__image">
								<tn-lazy-load :threshold="6000" height="100%" :image="item.image" :index="item.id"
									imgMode="widthFix"></tn-lazy-load>
							</view>
							<!-- <text class="item__title tn-color-black">{{ item.title }}</text> -->
							<view class="item__data">
								<view class="item__title-container">
									<text class="item__title tn-color-black">{{ item.name }}</text>
								</view>
								<!-- 	<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
									<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
										{{ tagItem }}</view>
								</view> -->
							</view>
						</view>
					</template>
				</tn-waterfall>
			</view>
			<tn-load-more :status="loadStatus"></tn-load-more>
		</view>
		<view class="" v-if="current==1">
			<!-- 发展历程 start-->
			<view class="tn-flex tn-flex-wrap tn-padding-bottom">
				<view class="king-list tn-margin-top-sm" v-for="(item,index) in info.develop" :key="item.id">


					<view class="king-icon">
						<text class='tn-icon-trophy tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
						<text class='tn-text-xl tn-margin-left tn-color-gray'>{{item.that_time}}</text>
					</view>
					<view class='king-item  tn-icon-circle-fill tn-color-red'>
						<view class="article-shadow tn-bg-white" @click="tn('')">
							<view class="tn-flex">
								<view class="image-pic tn-margin-left-sm tn-margin-top-sm tn-margin-bottom-sm img-solid"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1663571007436-assets/web-upload/e3fdeb91-d8d1-4187-8d91-593559543af3.jpeg');width: 160rpx;height: 160rpx;background-size: cover;">
									<view class="image-article">
									</view>
								</view>
								<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
									<view class="" style="min-height: 105rpx;">
										<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
											{{item.event}}
										</text>

									</view>
									<view class="tn-flex tn-flex-row-between tn-flex-col-between">
										<view
											class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
											<text class="tn-tag-content__item--prefix">#</text> 随便聊聊
										</view>
										<view
											class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
											style="padding-top: 5rpx;">
											<!-- <text class="tn-icon-footprint tn-padding-right-xs tn-text-lg"></text>
						       <text class="tn-padding-right tn-text-df">232</text> -->
											<text class="tn-icon-rocket tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">129</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>





				</view>
			</view>
			<!--发展历程 end-->
		</view>
		<view class="" v-if="current==2">
			<view class="tn-text-center">
				<!-- 比例图文 start-->
				<view class="tn-flex tn-flex-wrap tn-padding-bottom">
					<block v-for="(item, index) in info.honor" :key="index">
						<view class="" style="width: 50%;" @click="tn('/pageA/product/product')">
							<view class="tn-margin-xs img-shadow" style="border-radius: 10rpx;">
								<view class="" style="position: absolute;padding: 20rpx 15rpx 15rpx 15rpx;">
									<text class="tn-icon-honor-fill tn-text-xl"></text>
								</view>
								<view class="tn-padding-sm" style="position: absolute;">
									<text
										class="tn-padding-left-lg tn-padding-top-sm tn-text-sm">{{ item.that_time }}</text>
								</view>
								<view class="" style="padding: 15rpx;">
									<view class="image-picbook" :style="'background-image:url(' + item.image + ')'">
										<view class="image-book">
										</view>
									</view>
								</view>

								<view class="" style="padding: 0 15rpx 15rpx 15rpx;">
									<view class="">
										<view class=" ">
											<view class="tn-text-center">
												<text
													class="tn-color-black tn-text-sm tn-text-bold">{{ item.title }}</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</block>
				</view>
				<!-- 比例图文 end-->
			</view>


		</view>
		<view class="" v-if="current==3">
			<view class="tn-text-center">
				<!-- 比例图文 start-->
				<view class="tn-flex tn-flex-wrap tn-padding-bottom">
					<block v-for="(item, index) in info.certificate" :key="index">
						<view class="" style="width: 50%;" @click="tn('/pageA/product/product')">
							<view class="tn-margin-xs img-shadow" style="border-radius: 10rpx;">
								<view class="" style="position: absolute;padding: 20rpx 15rpx 15rpx 15rpx;">
									<text class="tn-icon-honor-fill tn-text-xl"></text>
								</view>
								<view class="tn-padding-sm" style="position: absolute;">
									<text
										class="tn-padding-left-lg tn-padding-top-sm tn-text-sm">{{ item.that_time }}</text>
								</view>
								<view class="" style="padding: 15rpx;">
									<view class="image-picbook" :style="'background-image:url(' + item.image + ')'">
										<view class="image-book">
										</view>
									</view>
								</view>

								<view class="" style="padding: 0 15rpx 15rpx 15rpx;">
									<view class="">
										<view class=" ">
											<view class="tn-text-center">
												<text
													class="tn-color-black tn-text-sm tn-text-bold">{{ item.title }}</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</block>
				</view>
				<!-- 比例图文 end-->
			</view>

		</view>

		<!-- <view class="" style="height: 100rpx;background-color: antiquewhite;width: 100%;" v-for="(item,index) in 20">
			
		</view> -->


	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		companyBaseInfo,
		company
	} from '@/api/home.js'
	export default {
		name: 'TemplateBase',
		mixins: [template_page_mixin],
		data() {
			return {
				companyInfo: {},
				info: {},
				isFixed: false,
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				current: 0,
				fixedList: [{
						name: '相册'
					},
					{
						name: '历程'
					},
					{
						name: '荣誉'
					},
					{
						name: '资质'
					}
				],

				/* 瀑布流*/
				loadStatus: 'loadmore',

			}
		},
		computed: {

		},
		onLoad() {
			this.getData()
			this.getBaseData()
		
		},
		onReady() {

		},
		onShow() {

		},
		onHide() {

		},
		methods: {
			// 获取企业信息
			async getData() {
				this.loadStatus = 'loading'
				let res = await company()
				this.companyInfo = res.data
			},
			async getBaseData() {

				let res = await companyBaseInfo()
				this.info = res.data
			},
			fixed(e) {
				this.isFixed = true
			},
			unfixed(n) {
				this.isFixed = false
			},
			
			// 瀑布流加载完毕事件
			handleWaterFallFinish() {
				this.loadStatus = 'loadmore'
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index
			},
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
	/* 页面阴影 start*/
	.img-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 图文内容 start*/
	.image-book {
		padding: 155rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-picbook {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 0;
		clip-path: polygon(200rpx 0, 100% 0, 100% 100%, 0 100%, 0 60rpx, 165rpx 50rpx);
	}

	/* 用户头像 start */
	.logo-image {
		width: 40rpx;
		height: 40rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 1rpx solid rgba(255, 255, 255, 1);
		// box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 文章内容 end*/
	.template-blogger {}

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

	$cube-size: 120rpx;
	$cube-split: 60rpx;

	/* 立体头像 start*/

	.cube {
		background: #fff;
		background-repeat: no-repeat;
		background-size: cover;
		height: 550rpx;
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		font-weight: 300;

		&__container {
			margin-top: 180rpx;
			position: relative;
			width: $cube-size;
			height: $cube-size;
			-webkit-perspective: 500px;
			perspective: 500px; //透视太大会超过屏幕就不好了吖

			&:before {
				content: '';
				width: $cube-size;
				height: $cube-size;
				position: absolute;
				// top: calc(50% - ($cube-split - 30px));
				// left: calc(50% - $cube-split);
				background-color: #3c6496;
				filter: blur(60px);
				opacity: .8;
			}

			&__body {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-style: preserve-3d;
				transform: translateZ(-75px);
				animation: cubeFrame 35s cubic-bezier(0.36, -0.03, 0.46, 0.95) infinite alternate;
				will-change: transform;

				&__item {
					position: absolute;
					display: block;
					display: flex;
					align-items: center;
					justify-content: center;
					width: $cube-size;
					height: $cube-size;
					font-size: 30px;
					background-repeat: no-repeat;
					background-size: cover;

					&--front {
						transform: rotateY(0deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--back {
						transform: rotateX(180deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--right {
						transform: rotateY(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--left {
						transform: rotateY(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--top {
						transform: rotateX(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--bottom {
						transform: rotateX(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}
				}
			}
		}
	}

	@keyframes cubeFrame {
		10% {
			transform: translateZ(-75px) rotateX(40deg) rotateY(60deg);
		}

		15% {
			transform: translateZ(-75px) rotateX(80deg) rotateY(20deg);
		}

		20% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-70deg);
		}

		30% {
			transform: translateZ(-75px) rotateX(90deg) rotateY(180deg);
		}

		40% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-140deg);
		}

		45% {
			transform: translateZ(-75px) rotateX(-100deg) rotateY(20deg);
		}

		55% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-35deg);
		}

		60% {
			transform: translateZ(-75px) rotateX(180deg) rotateY(360deg);
		}

		70% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-360deg);
		}

		80% {
			transform: translateZ(-75px) rotateX(45deg) rotateY(-70deg);
		}

		90% {
			transform: translateZ(-75px) rotateX(-45deg) rotateY(70deg);
		}

		100% {
			transform: translateZ(-75px) rotateX(-360deg) rotateY(360deg);
		}
	}

	/* 立体头像 end*/

	/* 信息提示 start */
	.blogger-tips-data {
		background-color: #F8F7F3;

		&__wrap {
			border-radius: 60rpx 60rpx 0 0;
		}

		&__message {
			padding-top: 60rpx;

			&__container {
				padding: 5rpx;
				border-radius: 100rpx;
			}

			&__avatar {
				margin: 6rpx 0 0 6rpx;
			}
		}

		&__info {
			padding: 40rpx 0 0 0;
		}
	}

	/* 信息提示 end */

	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__desc {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;
			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
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
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */

	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}


	// -----------------------

	/* 简历内容 */
	.king-list {
		display: block;
		// background-color: #ffffff;
	}

	.king-list .king-icon {
		width: 100%;
		text-align: left;
		padding: 20rpx 0 20rpx 37rpx;
		font-size: 26rpx;
		color: #888;
		display: block;
	}

	.king-list>.king-item {
		padding: 30rpx 30rpx 30rpx 120rpx;
		position: relative;
		display: block;
		z-index: 0;
	}

	.king-list>.king-item::after {
		content: "";
		display: block;
		position: absolute;
		width: 1rpx;
		background-color: #E6E6E6;
		left: 60rpx;
		height: 100%;
		top: 0;
		z-index: 8;
	}

	.king-list>.king-item::before {
		display: block;
		position: absolute;
		top: 36rpx;
		z-index: 9;
		background-color: #ffffff;
		width: 50rpx;
		height: 50rpx;
		text-align: center;
		border: none;
		line-height: 50rpx;
		left: 36rpx;
	}


	/* 名片微调 */
	.img-solid {
		border: 1rpx solid #eee;
	}

	.share-img {
		position: fixed;
		/* padding: 10rpx; */
		width: 100rpx;
		height: 100rpx;
		/* top: 680rpx; */
		bottom: 200rpx;
		right: 20rpx;
		z-index: 1024;
		opacity: 0.8;
		box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
		border: none;
		border: 6rpx solid rgba(255, 255, 255, 0);
	}

	.resume {
		display: flex;
		justify-content: space-between;
		padding-top: 10rpx;
		border-radius: 6rpx;
		color: #666;
		line-height: 1.6;
	}

	.resume+.resume {
		margin-top: 20rpx;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 35rpx;
			color: #1D2541;
			background-color: #F3F2F7;
			border-radius: 10rpx;
			font-size: 22rpx;
			padding: 5rpx 15rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 标签内容 end*/



	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 160rpx;
		height: 160rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}


	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		padding-right: 10rpx;
		display: inline-block;
		line-height: 35rpx;
		padding: 5rpx 25rpx;
	}



	/* 瀑布流*/
	.product__item {
		background-color: #FFFFFF;
		overflow: hidden;
		margin: 0 10rpx;
		margin-bottom: 20rpx;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

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
<template>
	<view class="template-content">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="">
				<block v-for="(item, index) in list" :key="index">
					<view class="article-shadow tn-margin tn-bg-white" @click="tn('/homePages/businessDetail?id='+item.id)">
						<view class="tn-flex">

							<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
								<view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
									<text class="">{{ item.title }}</text>
								</view>
								<view class="tn-padding-top-xs" style="min-height: 90rpx;">
									<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
										{{ item.subtitle }}
									</text>
								</view>
								<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-sm">
									<view v-for="(label_item,label_index) in item.label" :key="label_index"
										class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
										<text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
									</view>
									<view class="justify-content-item tn-color-gray tn-text-center"
										style="padding-top: 5rpx;">
										
										<text class="tn-icon-eye tn-padding-right-xs tn-text-lg"></text>
										<text class="tn-text-df">{{ item.likes }}</text>
									</view>
								</view>
							</view>
							<view class="image-pic tn-margin-sm"
								:style="'background-image:url(' + item.images[0] + ')'">
								<view class="image-article">
								</view>
							</view>
						</view>
					</view>
				</block>
				<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
					<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
					<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
					<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
				</view>
			</view>

		</view>

	
		<button class='' open-type="contact">
			<view class="wechat tnxuanfu">
				<view class="bg0 pa">
					<view class="bg1">
						<image src="https://resource.tuniaokj.com/images/my/my7.png" class="button-shop shadow"></image>
					</view>
				</view>
				<view class="hx-box pa">
					<view class="pr">
						<view class="hx-k1 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k2 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k3 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k4 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k5 pa0">
							<view class="span"></view>
						</view>
						<view class="hx-k6 pa0">
							<view class="span"></view>
						</view>
					</view>
				</view>
			</view>
		</button>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		business
	} from '@/api/home.js'
	export default {
		name: 'TemplateContent',
		mixins: [template_page_mixin],
		data() {
			return {
				cardCur: 0,
				loadStatus: 'loading',
				listStatus: 0,
				params: {
					page: 1,
					//  pageSize: 10,
				},
				list: []

			}
		},
		onLoad() {
			this.getList()
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
			// 初始化数据
			init() {
				this.loadStatus = 'loading';
				this.params.page = 1
				this.listStatus = 0;
			},
			async getList(refresh) {
				let params = {
					...this.params
				}
				try {
					let res = await business(params)
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
					// console.error('捕获到错误：', error);
					// 你可以根据错误类型或错误信息来执行不同的操作  
				}

			},
			/* ------------------加载数据列表 end------------------------  */
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
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


	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 20rpx;
		height: calc(40rpx + env(safe-area-inset-bottom) / 2);
		height: calc(40rpx + constant(safe-area-inset-bottom));
	}


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
	.wechat {
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


	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 镂空 */
	.tnloukong {
		position: fixed;
		padding: 4rpx 8rpx;
		bottom: 220rpx;
		border-radius: 5rpx;
		left: 30rpx;
		font-weight: bold;
		text-align: center;
		z-index: 1000;
		background: rgba(255, 255, 255, 1);
		color: #070707;
		/* mix-blend-mode: overlay; difference;lighten;hue*/
		mix-blend-mode: lighten;

	}


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

	.card-swiper swiper-item .swiper-item-text {
		margin: -200rpx 0 0 30rpx;
		width: 100%;
		transition: all 0.6s ease 0s;
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
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 30rpx;
		height: 6rpx;
		border-radius: 0rpx;
		left: -275rpx;
		top: -130rpx;
		margin: 0 5rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
	}


	/* 阴影 start*/
	.home-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}


	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		width: 200rpx;
		height: 200rpx;
		position: relative;
	}

	.image-pic {
		border: 1rpx solid #F8F7F8;
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
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


	/* 大单图 start*/
	.tn-blogger-content2 {
		&__wrap {
			padding: 30rpx;
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
				padding: 0 20rpx;
				margin: 5rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__desc {
				line-height: 55rpx;
			}
		}

		&__main-image {
			box-shadow: 0rpx 5rpx 40rpx 0rpx rgba(43, 158, 246, 0.2);
			border-radius: 16rpx;

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
			font-size: 40rpx;
			padding-right: 5rpx;
		}
	}

	.image-design {
		padding: 140rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	/* 文章内容 end*/
</style>
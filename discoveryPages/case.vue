<template>
	<view class="template-news tn-safe-area-inset-bottom">

		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
					<text class='icon tn-icon-left'></text>
					<text class='icon tn-icon-home-capsule-fill'></text>
				</view>
			</tn-nav-bar>
		</view>
		<view class="top-backgroup">
			<image
				src='https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1666862894380-assets/web-upload/e3a97a87-7b21-442a-be37-f6dae7750eae.jpeg'
				mode='widthFix' class='backgroud-image'></image>
		</view>
		<view class="tn-margin-top-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<swiper class="card-swiper" :circular="true" :autoplay="false" duration="500" interval="5000"
				previous-margin="170rpx" next-margin="170rpx" @change="cardSwiper" style="margin-top: -470rpx;">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="tnphone-white-min swiper-item  wow fadeInLeft2">
						<view class="skin wow fadeInRight2">
							<view class="screen wow fadeInUp2">

								<view class="peak wow">
									<view class="sound"></view>
									<view class="lens"></view>
								</view>

								<view class="image-banner">
									<image :src="item" mode="aspectFill"></image>
								</view>

							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="nav_title--wrap">
				<view class="nav_title tn-main-gradient-blue">
					{{info.data.title}}
				</view>
			</view>


			<view class="news-img tn-padding">
				<rich-text :nodes="info.data.content"></rich-text>
			</view>


		</view>

		<view class="tn-margin-top tn-padding-top-sm tn-margin-bottom">
			<view class="see">
				<view class="justify-content-item tn-flex tn-flex-col-center">

				</view>
				<view class="justify-content-item tn-color-gray tn-text-center tn-margin-right"
					style="padding-top: 5rpx;">
					<text class="tn-icon-eye tn-text-lg" style="padding-right: 5rpx;"></text>
					<text class="tn-padding-right tn-text-df">{{info.data.view}}</text>

				</view>

			</view>
		</view>





		<!-- 悬浮按钮-->
		<view class="evaluate-box" v-if="!commentShow">

			<view class="evaluate-input" @click="toComment(id,0)">
				点击开始评论
			</view>
			<view class="evaluate-icon">
				<view class="evaluate-icon" @click="sendGood">
					<text :class="info.is_likes?'tn-icon-like-fill text-red':'tn-icon-like'"
						style="font-size: 60rpx;margin-right: 10rpx;"></text>

					<view class="m-l-8">
						{{info.data.likes}}
					</view>
				</view>
				<view class="evaluate-icon" @click="toComment(id,0)">
					<text class="tn-icon-comment" style="font-size: 60rpx;margin-right: 10rpx;"></text>
					<view class="m-l-8">
						{{info.data.comment}}
					</view>
				</view>
			</view>

		</view>
		<view>
			<myEvaluateDialog ref="pinglun" @closeScrollview="closeScrollview" comment_type="2">
			</myEvaluateDialog>
		</view>


		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		caseDetail,
		likes
	} from '@/api/home.js'
	import myEvaluateDialog from '@/components/myEvaluateDialog/myEvaluateDialog.vue'
	export default {
		components: {
			myEvaluateDialog
		},
		name: 'TemplateNews',
		mixins: [template_page_mixin],
		data() {
			return {
				commentShow: false,
				groupList: [{
						src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
					},
					{
						src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
					},
					{
						src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
					},
					{
						src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
					},
					{
						src: 'https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg'
					},
				],
				cardCur: 0,
				swiperList: [],
				id: '',
				info: {}
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getData()
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			toComment(id, user_id) {
				this.commentShow = true
				this.$refs.pinglun.open(id, user_id)
			},
			sendGood() {
				likes({
					relation_id: this.id,
					likes_type: 2
				}).then(res => {
					this.getData(1)
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				})
			},
			closeScrollview() {
				// 点击评论里面的叉叉，就会关闭评论
				// this.$refs.pinglun.close();
				this.commentShow = false
				this.getData(1)
			},
			async getData(num) {
				let params = {
					id: this.id
				}
				if (num) {
					params.reload = 1
				}
				let res = await caseDetail(params)
				this.info = res.data
				this.swiperList = res.data.data.images
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
	/* 阴影 start*/
	.home-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}


	/* .tnphone-white-min 细边框*/
	.tnphone-white-min {
		width: 380rpx;
		height: 800rpx;
		border-radius: 40rpx;
		background: #E9E5F3;
		padding: 7rpx;
		display: table;
		color: #333;
		box-sizing: border-box;
		box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 0, 0, 0.15);
		margin: 70rpx auto;
		cursor: default;
		position: relative
	}

	.tnphone-white-min .skin {
		width: 100%;
		height: 100%;
		border-radius: 40rpx;
		background: #E9E5F3;
		padding: 10rpx;
	}

	.tnphone-white-min .screen {
		width: 100%;
		height: 100%;
		border-radius: 30rpx;
		background: #E9E5F3;
		position: relative;
		overflow: hidden
	}

	.tnphone-white-min .head {
		width: 100%;
		height: 90rpx;
		text-align: center;
		position: absolute;
		padding: 45rpx 15rpx 10rpx 15rpx;
	}

	.tnphone-white-min .peak {
		left: 22%;
		width: 56%;
		height: 27rpx;
		margin: -2rpx auto 0rpx;
		border-radius: 0 0 20rpx 20rpx;
		background: #E9E5F3;
		position: absolute
	}

	.tnphone-white-min .sound {
		width: 48rpx;
		height: 6rpx;
		border-radius: 15rpx;
		background: #555;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -24rpx;
		margin-top: -10rpx;
		box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset
	}

	.tnphone-white-min .lens {
		width: 6rpx;
		height: 6rpx;
		border-radius: 50%;
		background: #2c5487;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: 34rpx;
		margin-top: -10rpx
	}

	.tnphone-white-min .talk {
		width: 50%;
		height: 6rpx;
		border-radius: 15rpx;
		background: rgba(0, 0, 0, .3);
		position: absolute;
		bottom: 8rpx;
		left: 50%;
		margin-left: -25%
	}

	.tnphone-white-min .area-l,
	.tnphone-white-min .area-r {
		width: 70rpx;
		height: 16rpx;
		position: absolute;
		top: 6rpx
	}

	.tnphone-white-min .area-l {
		left: 0;
		text-align: center;
		font-size: 12rpx;
		line-height: 22rpx;
		text-indent: 10rpx;
		font-weight: 600;
		padding-left: 20rpx;
	}

	.tnphone-white-min .area-r {
		right: 0;
		text-align: center;
		font-size: 12rpx;
		line-height: 22rpx;
		text-indent: 10rpx;
		font-weight: 600;
		padding-right: 20rpx;
	}

	.tnphone-white-min .fa-feed {
		float: left;
		font-size: 12rpx !important;
		transform: rotate(-45deg);
		margin-top: 4rpx;
		margin-right: 8rpx
	}

	.tnphone-white-min .fa-battery-full {
		float: left;
		font-size: 12rpx !important;
		margin-top: 6rpx
	}

	.tnphone-white-min .fa-chevron-left {
		float: left;
		margin-top: 4rpx
	}

	.tnphone-white-min .fa-cog {
		float: right;
		margin-top: 4rpx
	}

	.tnphone-white-min .btn01 {
		width: 3rpx;
		height: 28rpx;
		border-radius: 3rpx 0 0 3rpx;
		background: #222;
		position: absolute;
		top: 105rpx;
		left: -3rpx
	}

	.tnphone-white-min .btn02 {
		width: 3rpx;
		height: 54rpx;
		border-radius: 3rpx 0 0 3rpx;
		background: #222;
		position: absolute;
		top: 160rpx;
		left: -3rpx
	}

	.tnphone-white-min .btn03 {
		width: 3rpx;
		height: 54rpx;
		border-radius: 3rpx 0 0 3rpx;
		background: #222;
		position: absolute;
		top: 230rpx;
		left: -3rpx
	}

	.tnphone-white-min .btn04 {
		width: 3rpx;
		height: 86rpx;
		border-radius: 0 3rpx 3rpx 0;
		background: #222;
		position: absolute;
		top: 180rpx;
		right: -3rpx
	}

	/* 顶部背景图 start */
	.top-backgroup {
		height: 450rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 446rpx;
			// z-index: -1;
		}
	}

	/* 顶部背景图 end */
	/* 轮播样机样式 start*/
	.card-swiper {
		height: 810rpx !important;
	}

	.card-swiper swiper-item {
		width: 260rpx !important;
		// left: 170rpx;
		// width: 380rpx !important;
		// left: 185rpx;
		box-sizing: border-box;
		padding: 0rpx 15rpx 90rpx 15rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		display: block;
		transform: scale(0.45);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: scale(0.65);
		transition: all 0.2s ease-in 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 770rpx;
		// border: 1rpx solid red;
	}

	// 评论 start
	.evaluate-box {
		z-index: 999;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10rpx 30rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1rpx solid #e1e1e1;

		.evaluate-input {
			flex: 1;
			padding: 20rpx;
			background-color: #f3f3f3;
			color: #666666;

		}

		.evaluate-icon {
			display: flex;
			align-items: center;
			margin: 0 10rpx;
		}

		.text-red {
			color: #ff0000;
		}

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

	/* 顶部渐变*/
	.tn-navbg {
		background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
		/* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */
		/* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */
		/* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 42rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title00.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 富文本图示意 start */
	.news-img {
		z-index: -1;
		padding-bottom: 40rpx;

		image {
			width: 100%;
			margin: 20rpx 0;
			// height: 3373rpx;
			// z-index: -1;
		}
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
		padding: 160rpx 0rpx;
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

	/* 底部 start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 底部悬浮按钮 end*/

	/* 查看*/
	.see {
		display: flex;
		justify-content: space-between;
		padding-top: 10rpx;
		border-radius: 6rpx;
		color: #666;
		line-height: 1.6;
	}

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
</style>
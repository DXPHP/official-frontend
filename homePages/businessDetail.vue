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

		<view class="tn-margin-top-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="nav_title--wrap">
				<view class="nav_title tn-main-gradient-blue">
					<!-- <text class="tn-icon-rocket tn-padding-right-sm"></text> -->
					{{info.data.title}}
					<!-- <text class="tn-icon-rocket tn-padding-left-sm"></text> -->
				</view>
			</view>


			<view class="news-img tn-padding">
				<rich-text :nodes="info.data.content"></rich-text>
				<!-- <image src='https://resource.tuniaokj.com/images/advertise/3.jpg' mode='widthFix' class=''></image> -->

			</view>


		</view>

		<view class="tn-margin-top tn-padding-top-sm tn-margin-bottom">
			<view class="see">
				<view class="justify-content-item tn-flex tn-flex-col-center">
					<!-- <view style="margin-left: 15rpx;margin-right: 6rpx;transform: scale(0.85);">
						<tn-avatar-group :lists="groupList" size="sm"></tn-avatar-group>
					</view>
					<text class="tn-color-gray">86人</text> -->
				</view>
				<view class="justify-content-item tn-color-gray tn-text-center tn-margin-right"
					style="padding-top: 5rpx;">
					<text class="tn-icon-eye tn-text-lg" style="padding-right: 5rpx;"></text>
					<text class="tn-padding-right tn-text-df">{{info.data.view}}</text>
					<!-- <text class="tn-icon-like-lack tn-text-lg" style="padding-right: 5rpx;"></text>
					<text class="tn-text-df">{{info.data.likes}}</text> -->
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
			<myEvaluateDialog ref="pinglun" @closeScrollview="closeScrollview" comment_type="1">
			</myEvaluateDialog>
		</view>

		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		businessDetail,
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
				id: '',
				info: {
					data: {
						title: '',
						content: '',
						likes: 0,
						comment: 0
					}
				},
				commentShow: false,

			}
		},
		onLoad(e) {
			this.id = e.id
			this.getData()
		},
		methods: {
			toComment(id, user_id) {
				this.commentShow = true
				this.$refs.pinglun.open(id, user_id)
			},
			sendGood() {
				likes({
					relation_id: this.id,
					likes_type: 1
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
				let res = await businessDetail(params)
				this.info = res.data
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
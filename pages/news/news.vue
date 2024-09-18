<template>
	<view class="news tn-safe-area-inset-bottom">

		<!-- <swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="18000"
			@change="cardSwiper">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item image-banner">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				</view>
				<view class="tn-text-df tn-text-bold tnloukong">{{item.title}}</view>
				<view class="swiper-item-text">
					<view class="tn-text-lg tn-text-bold tn-color-white">{{item.name}}</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item,index) in swiperList" :key="index">
				<view class="spot" :class="cardCur==index?'active':''"></view>
			</block>
		</view> -->
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">

		</view>
		<view class="" style="padding-bottom: 60rpx;;z-index: 999; position: relative;">
			<!-- 不建议写时间，因为写了时间，你就要经常更新文章了鸭-->
			<view class="">
				<block v-for="(item, index) in list" :key="index">
					<view class="article-shadow tn-margin tn-bg-white" @click="tn('/newsPages/article?id='+item.id)">
						<view class="tn-flex">

							<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
								<view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
									<text class="">{{ item.title }}</text>
								</view>
								<view class="tn-padding-top-xs" style="min-height: 90rpx;">
									<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
										{{ item.content }}
									</text>
								</view>
								<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-sm">
									<!-- <view v-for="(label_item,label_index) in item.label" :key="label_index"
										class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
										<text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
									</view> -->
									<view class="">

									</view>
									<view class="justify-content-item tn-color-gray tn-text-center"
										style="padding-top: 5rpx;">
										<text class="tn-icon-eye tn-padding-right-xs tn-text-lg"></text>
										<text class="tn-padding-right tn-text-df">{{ item.view }}</text>
										<text class="tn-icon-like-lack tn-padding-right-xs tn-text-lg"></text>
										<text class="tn-text-df">{{ item.likes }}</text>
									</view>
								</view>
							</view>
							<view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.image + ')'">
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


		<view class='tn-tabbar-height'></view>


	</view>
</template>

<script>
	import {
		newsList
	} from '@/api/home.js'
	export default {
		name: 'News',
		data() {
			return {

				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					title: '我不喜欢带伞',
					name: '因为雨水从不滴落在我心上',
					url: 'https://resource.tuniaokj.com/images/swiper/banner-animate3.png',
				}, {
					id: 1,
					type: 'image',
					title: '图鸟南南',
					name: '欢迎加入东东们',
					url: 'https://resource.tuniaokj.com/images/swiper/banner-animate2.png',
				}, {
					id: 2,
					type: 'image',
					title: '图鸟北北',
					name: '微信号 tnkewo',
					url: 'https://resource.tuniaokj.com/images/swiper/banner-animate3.png',
				}, {
					id: 3,
					type: 'image',
					title: '图鸟猪猪',
					name: '努力成为大佬',
					url: 'https://resource.tuniaokj.com/images/shop/banner2.jpg',
				}],

				news: [{
						userAvatar: 'https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg',
						userName: '可我会像',
						date: '2021年12月20日',
						color: 'cyan',
						label: ['模型'],
						title: '3D家具模型了解一下？',
						desc: '家具模型应有尽有',
						mainImage: 'https://resource.tuniaokj.com/images/shop/prototype1.jpg',
						viewUser: {
							latestUserAvatar: [{
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
							],
							viewUserCount: 987
						},
						collectionCount: 567,
						commentCount: 69,
						likeCount: 65
					},
					{
						userAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
						userName: '可我会像',
						date: '2021年12月20日',
						color: 'blue',
						label: ['神器'],
						title: '为什么资讯不显示时间？',
						desc: '你确定你经常更新文章吗？',
						mainImage: 'https://resource.tuniaokj.com/images/shop/computer2.jpg',
						viewUser: {
							latestUserAvatar: [{
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
							],
							viewUserCount: 321
						},
						collectionCount: 654,
						commentCount: 232,
						likeCount: 543
					}
				],
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

		},

		created() {
			this.getList()
		},
		methods: {
			// 触底加载
			isReachBottom() {
				// 如果数据加载完毕 不再调用方法
				if (this.loadStatus == 'nomore') return;
				// 否则调用数据加载方法
				this.params.page++;
				this.getList();
			},
			/* ------------------加载数据列表 start------------------------  */
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
					let res = await newsList(params)
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
		}
	}
</script>

<style lang="scss" scoped>
	.news {
		max-height: 100vh;
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 50rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				// color: #AAAAAA;
			}
		}
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
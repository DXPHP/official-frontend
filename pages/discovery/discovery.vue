<template>
	<view class="page-c">
		<view class="tn-margin-top-xl">
			<view class="nav_title--wrap">
				<view class="nav_title tn-main-gradient-aquablue">
					<text class="tn-icon-star tn-padding-right-sm tn-text-xxl"></text>
					<text class="tn-text-xxl">项 / 目 / 案 / 例</text>
					<text class="tn-icon-star tn-padding-left-sm tn-text-xxl"></text>
				</view>
			</view>
		</view>
		<!-- 图文 -->
		<view class="tn-flex tn-flex-direction-column tn-margin-bottom-xl">
			<block v-for="(item,index) in list" :key="index">
				<view class="tn-blogger-content2__wrap" @click="tn('/discoveryPages/case?id='+item.id)">
					<view class="tn-shadow-blur image-pic"
						:style="'background-image:url(' + item.image + ');background-size: cover;background-position: center;'">
						<view class="image-design">
							<view class="tn-text-df"
								style="width: 100%;height: 120rpx;background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0));position: absolute;bottom: 0;border-radius: 0 0 12rpx 12rpx;">
								<view
									class="tn-text-lg tn-text-bold tn-padding-top-xl tn-padding-left tn-padding-right tn-color-white clamp-text-1">
									{{ item.title }}
								</view>
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



		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import {
		casesList
	} from '@/api/home.js'
	export default {
		name: 'Discovery',
		data() {
			return {
				loadStatus: 'loading',
				listStatus: 0,
				params: {
					page: 1,
					//  pageSize: 10,
				},
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://resource.tuniaokj.com/images/index_bg/pro1.jpg',
				}, {
					id: 1,
					type: 'image',
					url: 'https://resource.tuniaokj.com/images/index_bg/pro2.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://resource.tuniaokj.com/images/index_bg/pro3.jpg',
				}, {
					id: 3,
					type: 'image',
					url: 'https://resource.tuniaokj.com/images/index_bg/pro4.jpg',
				}, {
					id: 4,
					type: 'image',
					url: 'https://resource.tuniaokj.com/images/index_bg/pro5.jpg',
				}, {
					id: 5,
					type: 'image',
					url: 'https://resource.tuniaokj.com/images/index_bg/pro6.jpg',
				}],
				list1: [],
				list: [],
				content3: [],
				linksData: [],

			}
		},

		onReady() {

		},
		created() {
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

			// 模拟触底刷新
			// 触底加载
			isReachBottom() {
				console.log('触底了')
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
					let res = await casesList(params)
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
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},

			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-c {
		max-height: 100vh;
	}

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
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
		background-color: #000;
		opacity: 0;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		margin: 0 8rpx !important;
		top: -80rpx;
		position: relative;
	}

	.spot.active {
		opacity: 0;
		width: 30rpx;
		background-color: #000;
	}

	/* 图标容器4 start */
	.tn-cool-color-icon4 {
		// background-image: -webkit-linear-gradient(135deg, #ED1C24, #FECE12);   16
		// background-image: linear-gradient(135deg, #ED1C24, #FECE12);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
	}

	.icon4 {
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
				width: 110rpx;
				height: 110rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
				box-shadow: 0px 10px 30px rgba(70, 23, 129, 0.12),
					0px -8px 40px rgba(255, 255, 255, 1),
					inset 0px -10px 10px rgba(70, 23, 129, 0.05),
					inset 0px 10px 20px rgba(255, 255, 255, 1);
			}
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
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 组件导航列表 start*/
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0rpx 12rpx 0rpx;
		justify-content: space-between;

		/* 列表元素 start */
		.nav-list-item {
			padding: 95rpx 30rpx 5rpx 30rpx;
			border-radius: 12rpx;
			width: 45%;
			margin: 0 18rpx 40rpx;
			background-size: cover;
			background-position: center;
			position: relative;
			z-index: 99;

			/* 元素标题 start */
			.nav-link {
				font-size: 32rpx;
				text-transform: capitalize;
				padding: 0 0 10rpx 0;
				position: relative;

				.title {
					color: #FFFFFF;
					margin-top: 100rpx;
					text-align: center;
				}

				.join {
					color: #FFFFFF;
					margin-top: 20rpx;
					margin-bottom: 40rpx;
					text-align: center;
				}
			}

			/* 元素标题 end */

			/* 元素图标 start */
			.icon {
				font-variant: small-caps;
				position: absolute;
				top: 60rpx;
				right: 50rpx;
				left: 37%;
				width: 90rpx;
				height: 90rpx;
				line-height: 90rpx;
				margin: 0;
				padding: 0;
				display: inline-flex;
				text-align: center;
				justify-content: center;
				vertical-align: middle;
				font-size: 50rpx;
				color: #FFFFFF;
				white-space: nowrap;
				opacity: 0.9;
				background-color: rgba(0, 0, 0, 0.05);
				background-size: cover;
				background-position: 50%;
				border-radius: 5000rpx;

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
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg2.png);
				}
			}

			/* 元素图标 end */
		}

		/* 列表元素 end */
	}

	/* 组件导航列表 end*/


	/* 文章内容 start*/
	.tn-blogger-content2 {
		&__wrap {
			padding: 30rpx 30rpx 10rpx 30rpx;
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
		padding: 180rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		// border: 1rpx solid rgba(0, 0, 0, 0.04);
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 15rpx;
	}

	/* 文章内容 end*/


	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		width: 200rpx;
		height: 200rpx;
		position: relative;
	}


	/* 伙伴主图 start*/
	.image-partner {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		height: 100rpx;
		position: relative;
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
</style>
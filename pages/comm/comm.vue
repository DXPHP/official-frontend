<template>
	<view class="order tn-safe-area-inset-bottom">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<!-- <view class="custom-nav__back" @click="tn('/homePages/search')">
					<view class="tn-icon-search-menu-fill"></view>
				</view> -->
				<view class="" style="width: 62vw;overflow: hidden;margin-top: 36rpx;">
					<tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" :bold="true"
						:fontSize="36"></tn-tabs>
				</view>
			</view>
		</tn-nav-bar>

		<view class="tn-margin-top-sm" :style="{paddingTop: vuex_custom_bar_height - 10 + 'px'}">
		<!-- 	<swiper class="card-swiper" @click="tn('/homePages/navigation')" :circular="true" :autoplay="true"
				duration="500" interval="8000" @change="cardSwiper">
				<swiper-item v-for="(item,index) in list" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item image-banner"
						:style="'background-image:url('+ item.image + ');background-size: cover;border-radius: 15rpx;'">
					</view>
					<view class="swiper-item-text">
            <view class="tn-text-bold tn-color-white" style="font-size: 50rpx;">{{item.title}}</view>
            <view class="tn-color-white tn-padding-top" style="font-size: 30rpx;">{{item.name}}</view>
            <view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm">{{item.text}}</view>
          </view>
				</swiper-item>
			</swiper> -->
			<!-- <view class="indication">
				<block v-for="(item,index) in swiperList" :key="index">
					<view class="spot" :class="cardCur==index?'active':''"></view>
				</block>
			</view> -->
		</view>


		<view class="">
			<view class="">

				<view class="" style="padding: 30rpx 20rpx;">
					<tn-waterfall ref="waterfall" v-model="list" >
						<template v-slot:left="{ leftList }">
							<view v-for="(item, index) in leftList" :key="item.id" class="product__item home-shadow"
								@click="tn('/commPages/product?id='+item.id)">
								<view class="item__image">
									<tn-lazy-load :threshold="6000" height="100%" :image="item.image" :index="item.id"
										imgMode="widthFix"></tn-lazy-load>
								</view>
								<view class="item__data tn-margin-left-sm tn-margin-right-sm">
									<view class="item__title-container">
										<text class="item__title tn-color-cat clamp-text-2">{{ item.name }}</text>
									</view>
									<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
										<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex"
											class="item__tag">{{ tagItem }}</view>
									</view>
									<!-- <view class="item__price-container tn-color-red">
                    <text class="item__price--unit">￥</text>
                    <text class="item__price--integer">{{ item.price }}</text>
                    <text class="tn-color-gray tn-text-sm tn-padding-left-sm" style="font-size: 24rpx;">{{ item.likes }} 人咨询</text>
                  </view> -->

									<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-xs">
										<view class="justify-content-item tn-color-red">
											<text class="tn-text-sm">￥</text>
											<text class="tn-text-xl">{{ item.price }}</text>
										</view>
										<view class="justify-content-item tn-color-gray tn-text-center"
											style="padding-top: 5rpx;">
											<text class="tn-icon-like tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">{{ item.likes }}</text>
										</view>
									</view>


									<!-- <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xs">
                    <view class="justify-content-item">
                      <view class="tn-flex tn-flex-col-center tn-flex-row-left">
                        <view class="logo-pic">
                          <view class="logo-image">
                            <view class="" :style="'background-image:url('+ item.userImage +');width: 40rpx;height: 40rpx;background-size: cover;'">
                            </view>
                          </view>
                        </view>
                        <view class="tn-padding-left-xs">
                          <text class="tn-color-gray tn-text-sm">{{ item.userName }}</text>
                        </view>
                  
                      </view>
                    </view>
                    <view class="justify-content-item">
                      <text class="tn-icon-fire tn-color-gray tn-padding-right-xs"></text>
                      <text class="tn-color-gray">{{ item.viewUser.viewUserCount }}</text>
                    </view>
                  </view> -->


								</view>
							</view>
						</template>
						<template v-slot:right="{ rightList }">
							<!-- <view class="tn-text-bold home-shadow tn-main-gradient-blue tn-color-white"
								style="height: 160rpx;margin: 0 10rpx 20rpx 10rpx;border-radius: 10rpx;"
								@click="tn('/commPages/nav')">
								<view class="tn-padding-left tn-padding-top-lg">
									导航 · 智途生态
								</view>
								<view class="tn-padding-left tn-padding-top-xs">
									看看都有什么
									<text class="tn-icon-link tn-padding-left-xs"></text>
								</view>
							</view> -->
							<view v-for="(item, index) in rightList" :key="item.id" class="product__item home-shadow"
								@click="tn('/commPages/product?id='+item.id)">
								<view class="item__image">
									<tn-lazy-load :threshold="6000" height="100%" :image="item.image" :index="item.id"
										imgMode="widthFix"></tn-lazy-load>
								</view>
								<view class="item__data tn-margin-left-sm tn-margin-right-sm">
									<view class="item__title-container">
										<text class="item__title tn-color-cat clamp-text-2">{{ item.name }}</text>
									</view>
									<view class="item__tags-container">
										<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex"
											class="item__tag">{{ tagItem }}</view>
									</view>
									<!-- <view class="item__price-container tn-color-red">
                    <text class="item__price--unit">￥</text>
                    <text class="item__price--integer">{{ item.price }}</text>
                    <text class="tn-color-gray tn-text-sm tn-padding-left-sm" style="font-size: 24rpx;">{{ item.likes }} 人咨询</text>
                  </view> -->
									<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-xs">
										<view class="justify-content-item tn-color-red">
											<text class="tn-text-sm">￥</text>
											<text class="tn-text-xl">{{ item.price }}</text>
										</view>
										<view class="justify-content-item tn-color-gray tn-text-center"
											style="padding-top: 5rpx;">
											<text class="tn-icon-like tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">{{ item.likes }}</text>
										</view>
									</view>
									<!-- <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xs">
                    <view class="justify-content-item">
                      <view class="tn-flex tn-flex-col-center tn-flex-row-left">
                        <view class="logo-pic">
                          <view class="logo-image">
                            <view class="" :style="'background-image:url('+ item.userImage +');width: 40rpx;height: 40rpx;background-size: cover;'">
                            </view>
                          </view>
                        </view>
                        <view class="tn-padding-left-xs">
                          <text class="tn-color-gray tn-text-sm">{{ item.userName }}</text>
                        </view>
                  
                      </view>
                    </view>
                    <view class="justify-content-item">
                      <text class="tn-icon-fire tn-color-gray tn-padding-right-xs"></text>
                      <text class="tn-color-gray">{{ item.viewUser.viewUserCount }}</text>
                    </view>
                  </view> -->
								</view>
							</view>
						</template>
					</tn-waterfall>
				</view>




			</view>


			<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
				<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
				<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
				<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
			</view>

			<!-- <view class="">
        <view class="" style="padding: 15vh 20rpx;">
          <view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
            <text class="tn-icon-wea-wind tn-color-gray--light"></text>
          </view>
          <view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了</view>
        </view>
      </view> -->



		</view>
		<view class='tn-tabbar-height'></view>


	</view>
</template>

<script>
	import {
		goodsList
	} from '@/api/home.js'
	export default {
		name: 'Comm',
		data() {
			return {
				loadStatus: 'loading',
				listStatus: 0,
				params: {
					page: 1,
					//  pageSize: 10,
				},
				current: 0,
				type: '1',
				scrollList: [{
						name: '推荐',
						type: '1'
					},
					{
						name: '最新',
						type: '2'
					},
					{
						name: '最热',
						type: '3'
					}
				],
				cardCur: 0,
				swiperList: [],

				/* 瀑布流*/
				loadStatus: 'loadmore',
				list: [],

			}
		},
		onLoad() {

		},
		/* 瀑布流*/
		created() {
			this.getList()
		},
		methods: {
			// 模拟触底加载
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
					...this.params,
					type: this.type

				}
				try {
					let res = await goodsList(params)
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
			// tab选项卡切换
			tabChange(index) {
				this.current = index
				this.type = this.scrollList[index].type
				this.init()
				this.getList()
			},


		}
	}
</script>

<style lang="scss" scoped>
	.order {
		max-height: 100vh;
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 45rpx;
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

	/* 阴影 start*/
	.home-shadow {
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

	/* 轮播视觉差 start */
	.card-swiper {
		height: 330rpx !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		padding: 40rpx 30rpx 30rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		border-radius: 10rpx;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		will-change: transform;
		// overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
		will-change: transform;
	}

	.card-swiper swiper-item .swiper-item-text {
		margin-top: -160rpx;
		text-align: center;
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 10rpx;
		transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -220rpx;
		width: 100%;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
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
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -70rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
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
		border: 1rpx solid rgba(255, 255, 255, 0.05);
		// box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 头像 start */
	.logo-image2 {
		width: 90rpx;
		height: 90rpx;
		position: relative;
	}

	.logo-pic2 {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
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
				border-radius: 10rpx 10rpx 0 0;
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

			&__title {
				font-size: 28rpx;
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

			/* 价格 start */
			&__price-container {
				font-size: 24rpx;
				color: #E83A30;
			}

			&__price {
				&--unit {}

				&--integer {
					font-size: 38rpx;
				}

				&--decimal {}
			}

			/* 价格 end */
			/* 内容 end */
		}
	}
</style>
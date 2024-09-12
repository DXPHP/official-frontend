<template>
	<view class="tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>


		<view>

			<swiper class="card-swiper" :circular="false" vertical="true" :autoplay="false" duration="500"
				interval="5000" @change="cardSwiper">
				<swiper-item v-for="(item,index) in list" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item image-banner" @click="changePlay(index)">
						<video :id="`video-${item.id}`" :src="item.url" :show-loading='false' :show-play-btn='false'
							:show-fullscreen-btn='false' :controls='false' :autoplay='false'
							:enable-play-gesture='false' loop style="height: 100vh;width: 100vw;"></video>
						<view class="play-btn" v-show="cardCur==index && !isPlay">
							<text class="tn-icon-play-fill"
								style="font-size: 120rpx;color: #f3f3f3;opacity: 0.5;"></text>
						</view>
					</view>
					<view class="swiper-item-icon image-banner">
						<view class="">
							<view class="user-pic button-0">
								<view class="user-image">
									<!-- <view class="tn-shadow-blur"
										:style="'background-image:url('+ item.url + ');width: 87rpx;height: 87rpx;background-size: cover;overflow: hidden;'">
									</view> -->
								</view>
							</view>
							<view
								class="icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-1">
								<view class="tn-icon-like-fill" style="font-size: 70rpx;"></view>
								<view class="tn-margin-top-xs" style="font-size: 20rpx;position: relative;">
									{{item.likes}}
								</view>
							</view>
							<view
								class="icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-2">
								<view class="tn-icon-message-fill" style="font-size: 70rpx;"></view>
								<view class="tn-margin-top-xs" style="font-size: 20rpx;position: relative;">
									{{item.comment}}
								</view>
							</view>
							<view
								class="icon15__item--icon tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center tn-shadow-blur button-3"
								style="height: 100rpx;">
								<button class="tn-flex-col-center tn-button--clear-style" open-type="share">
									<view class="tn-icon-send-fill" style="font-size: 70rpx;"></view>
									<view class="tn-margin-top-xs" style="font-size: 20rpx;position: relative;">
										{{item.view}}
									</view>
								</button>

							</view>
						</view>

						<view class="swiper-item-text">
							<view class="tn-color-white tn-text-xl">
								<text class="tn-icon-topics tn-padding-right-xs"></text>
								<!-- <text class="tn-text-bold">{{item.user}}</text> -->

							</view>
							<view class="tn-color-white tn-padding-top-xs tn-text-lg clamp-text-2" style="width: 72%;">
								{{item.title}}
							</view>
						</view>

					</view>

				</swiper-item>
			</swiper>
			<!-- <view class="indication">
          <block v-for="(item,index) in swiperList" :key="index">
              <view class="spot" :class="cardCur==index?'active':''"></view>
          </block>
      </view> -->


			<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
				<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
				<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
				<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
			</view>
		</view>


		<view class="edit tnxuanfu" @click="goBack">
			<view class="bg0 pa">
				<view class="bg1">
					<image src="https://resource.tuniaokj.com/images/my/my6.png" class="button-shop shadow"></image>
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

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		videosList
	} from '@/api/home.js'
	export default {
		name: 'TemplateResult',
		mixins: [template_page_mixin],
		data() {
			return {
				listStatus: 0, //1首次数据加载完成没有数据 0有数据 2网络不佳
				loadStatus: 'loading',
				params: {
					page: 1,
					//  pageSize: 10,
				},
				cardCur: 0,
				list: [],
				isPlay: true
			}
		},
		async onLoad() {
			await this.getList()
			const videoContext = uni.createVideoContext(`video-${this.list[0]['id']}`, this)
			// #ifdef H5
			videoContext.play()
			// #endif
			// #ifndef H5
			videoContext.play()
			// #endif
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
			changePlay(index) {
				this.isPlay = !this.isPlay
				const videoContext = uni.createVideoContext(`video-${this.list[index]['id']}`, this)
				if (this.isPlay) {
					// #ifdef H5
					videoContext.play()
					// #endif
					// #ifndef H5
					videoContext.play()
					// #endif
				} else {
					// #ifdef MP-WEIXIN
					videoContext.stop()
					// #endif
					// #ifndef MP-WEIXIN
					videoContext.pause()
					// #endif
				}
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
					let res = await videosList(params)
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
						const videoContext = uni.createVideoContext(`video-${this.list[0]['id']}`, this)
						// #ifdef H5
						videoContext.play()
						// #endif
						// #ifndef H5
						videoContext.play()
						// #endif
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
				for (let i = 0; i < this.list.length; i++) {
					const videoContext = uni.createVideoContext(`video-${this.list[i]['id']}`, this)
					if (i === this.cardCur) {
						// #ifdef H5
						videoContext.play()
						// #endif
						// #ifndef H5
						videoContext.play()
						// #endif

					} else {
						// #ifdef MP-WEIXIN
						videoContext.stop()
						// #endif
						// #ifndef MP-WEIXIN
						videoContext.pause()
						// #endif
					}
				}
				this.isPlay=true
			},
			// 暂停所有视频
			stopAllVideo() {},

			// 跳转
			tn(e) {
				wx.vibrateLong();
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

	/* 全屏轮播  start*/
	.card-swiper {
		height: 100vh !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		overflow: initial;
		position: relative;
	}

	.play-btn {
		position: absolute;
		left: 0;
		right: 140rpx;
		top: 120rpx;
		bottom: 340rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 140rpx;
		padding-top: 220rpx;

	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100vh;
		border-radius: 0rpx;
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
		margin-top: -320rpx;
		// margin-top: calc(-380rpx + env(safe-area-inset-bottom) / 2);
		// margin-top: calc(-380rpx + constant(safe-area-inset-bottom));
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 10rpx;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -320rpx;
		margin-top: calc(-320rpx - env(safe-area-inset-bottom) / 2);
		margin-top: calc(-320rpx - constant(safe-area-inset-bottom));
		width: 100%;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
		text-shadow: 0rpx 10rpx 20rpx rgba(0, 0, 0, 0.1);
	}

	.card-swiper swiper-item .swiper-item-icon {
		// transform: translate(0rpx, 0rpx) scale(1, 1);
		transition: all 0.6s ease 0s;
		// overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-icon {
		// transform: translate(0rpx, 0rpx) scale(1, 1);
		transition: all 0.6s ease 0s;
	}

	/* 用户头像 start */
	.user-image {
		width: 87rpx;
		height: 87rpx;
		position: relative;
		overflow: hidden;
		border-radius: 50%;

	}

	.user-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 6rpx solid rgba(255, 255, 255, 0.9);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}


	/* 图标容器15 start */
	.icon15 {
		&__item {
			width: 30%;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				color: #EAEBEF;
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
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


				}
			}
		}
	}

	/* 按钮 */
	.button-0 {
		position: fixed;
		/* bottom:200rpx;
        right: 20rpx; */
		bottom: 52%;
		right: 30rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}

	/* 按钮 */
	.button-1 {
		position: fixed;
		/* bottom:200rpx;
        right: 20rpx; */
		bottom: 41%;
		right: 30rpx;
		z-index: 1001;
		border-radius: 0px;
		opacity: 0.9;
	}

	.button-2 {
		position: fixed;
		/* bottom:200rpx;
        right: 20rpx; */
		bottom: 33%;
		right: 30rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}

	.button-3 {
		position: fixed;
		/* bottom:200rpx;
        right: 20rpx; */
		bottom: 25%;
		right: 30rpx;
		z-index: 1001;
		border-radius: 0px;
		opacity: 0.9;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: fixed;
		// display:flex;
		display: block;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #000;
		opacity: 0.3;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		margin: 20rpx 0 !important;
		left: 95vw;
		top: -60vh;
		position: relative;
	}

	.spot.active {
		opacity: 0.6;
		height: 30rpx;
		background-color: #000;
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
	.edit {
		bottom: 220rpx;
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
</style>
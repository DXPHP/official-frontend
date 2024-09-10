<template>
	<view class="template-order">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#FFFFFF">
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left-arrow'></text>
			</view>
			<view class="tn-flex tn-flex-col-center tn-flex-row-center ">
				<text class="tn-text-bold tn-text-xl tn-color-black ">产品订单</text>
			</view>
		</tn-nav-bar>

		<view class="order--wrap" :style="{top: vuex_custom_bar_height + 20 +'px'}">
			<!-- 顶部标签 -->
			<view class="tn-bg-white">
				<tn-tabs-swiper class="order__tabs tn-text-xl" ref="tabs" activeColor="#3165CC" inactiveColor="#080808"
					:list="tabList" :current="tabsIndex" :isScroll="false" @change="tabsChange"></tn-tabs-swiper>
			</view>

			<!-- 标签内容 -->
			<swiper class="order__swiper" :style="{top: `${swiperTop}px`, height: `${swiperHeight}px`}"
				:current="swiperIndex" @transition="swiperTransition" @animationfinish="swiperAnimationFinish">

				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y @scrolltolower="inReachBottom">
						<view v-for="(item,index) in list" :key="index" class="order__item"
							@click.stop="tn('/discoveryPages/orderDetail?id='+item.details_id)">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">
									<text class="tn-text-bold">订单编号：{{item.order_sn}}</text>
									<text
										class="tn-color-blue--disabled tn-padding-left-xs tn-text-df tn-icon-copy "></text>
								</view>
								<view class="tn-color-gray">
									{{filterStatus(item.order_status)}}
								</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="aspectFill"></image>
								</view>

								<view class="tn-flex-1">
									<view class="order__item__content__title tn-text-bold ">
										{{item.goods_name}}
									</view>
									<view class="tn-padding-top-xs">
										{{item.spec_name}}
									</view>

								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.goods_price}}</text>
										<!-- <text class="order__item__content__info__price__value--decimal">.00</text> -->
									</view>
									<!-- <view class="order__item__content__info__count">
                    <text>共1件</text>
                  </view> -->
								</view>
							</view>

							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text
										class="order__item__operaation__left--text tn-color-gray">{{item.order_sn}}</text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==0" backgroundColor="tn-bg-purplered" :fontSize="24"
											height="auto" padding="10rpx 18rpx"
											@click="paying(item.order_id)">立即支付</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==2" backgroundColor="tn-bg-orange" :fontSize="24"
											height="auto" padding="10rpx 18rpx">确认完成</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==3" backgroundColor="tn-bg-blue" :fontSize="24"
											height="auto" padding="10rpx 18rpx">再次购买</tn-button>
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="tn-padding-bottom"></view> -->
						<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
							<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
							<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
							<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y @scrolltolower="inReachBottom">
						<view v-for="(item,index) in list" :key="index" class="order__item"
							@click="tn('/discoveryPages/orderDetail?id='+item.details_id)">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">
									<text class="tn-text-bold">订单编号：{{item.order_sn}}</text>
									<text
										class="tn-color-blue--disabled tn-padding-left-xs tn-text-df tn-icon-copy"></text>
								</view>
								<view class="tn-color-gray">
									{{filterStatus(item.order_status)}}
								</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="aspectFill"></image>
								</view>

								<view class="tn-flex-1">
									<view class="order__item__content__title tn-text-bold">
										{{item.goods_name}}
									</view>
									<view class="tn-padding-top-xs">
										{{item.spec_name}}
									</view>

								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.goods_price}}</text>
										<!-- <text class="order__item__content__info__price__value--decimal">.00</text> -->
									</view>
									<!-- <view class="order__item__content__info__count">
				    <text>共1件</text>
				  </view> -->
								</view>
							</view>

							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text
										class="order__item__operaation__left--text tn-color-gray">{{item.order_sn}}</text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==0" backgroundColor="tn-bg-purplered" :fontSize="24"
											height="auto" padding="10rpx 18rpx"
											@click="paying(item.order_id)">立即支付</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==2" backgroundColor="tn-bg-orange" :fontSize="24"
											height="auto" padding="10rpx 18rpx">确认完成</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==3" backgroundColor="tn-bg-blue" :fontSize="24"
											height="auto" padding="10rpx 18rpx">再次购买</tn-button>
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="tn-padding-bottom"></view> -->
						<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
							<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
							<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
							<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y @scrolltolower="inReachBottom">
						<view v-for="(item,index) in list" :key="index" class="order__item"
							@click="tn('/discoveryPages/orderDetail?id='+item.details_id)">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">
									<text class="tn-text-bold">订单编号：{{item.order_sn}}</text>
									<text
										class="tn-color-blue--disabled tn-padding-left-xs tn-text-df tn-icon-copy"></text>
								</view>
								<view class="tn-color-gray">
									{{filterStatus(item.order_status)}}
								</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="aspectFill"></image>
								</view>

								<view class="tn-flex-1">
									<view class="order__item__content__title tn-text-bold">
										{{item.goods_name}}
									</view>
									<view class="tn-padding-top-xs">
										{{item.spec_name}}
									</view>

								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.goods_price}}</text>
										<!-- <text class="order__item__content__info__price__value--decimal">.00</text> -->
									</view>
									<!-- <view class="order__item__content__info__count">
				    <text>共1件</text>
				  </view> -->
								</view>
							</view>

							<view
								class="order__item__operation tn-flex  tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text
										class="order__item__operaation__left--text tn-color-gray">{{item.order_sn}}</text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==0" backgroundColor="tn-bg-purplered" :fontSize="24"
											height="auto" padding="10rpx 18rpx"
											@click="paying(item.order_id)">立即支付</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==2" backgroundColor="tn-bg-orange" :fontSize="24"
											height="auto" padding="10rpx 18rpx">确认完成</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==3" backgroundColor="tn-bg-blue" :fontSize="24"
											height="auto" padding="10rpx 18rpx">再次购买</tn-button>
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="tn-padding-bottom"></view> -->
						<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
							<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
							<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
							<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y @scrolltolower="inReachBottom">
						<view v-for="(item,index) in list" :key="index" class="order__item"
							@click="tn('/discoveryPages/orderDetail?id='+item.details_id)">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">
									<text class="tn-text-bold">订单编号：{{item.order_sn}}</text>
									<text
										class="tn-color-blue--disabled tn-padding-left-xs tn-text-df tn-icon-copy"></text>
								</view>
								<view class="tn-color-gray">
									{{filterStatus(item.order_status)}}
								</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="aspectFill"></image>
								</view>

								<view class="tn-flex-1">
									<view class="order__item__content__title tn-text-bold">
										{{item.goods_name}}
									</view>
									<view class="tn-padding-top-xs">
										{{item.spec_name}}
									</view>

								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.goods_price}}</text>
										<!-- <text class="order__item__content__info__price__value--decimal">.00</text> -->
									</view>
									<!-- <view class="order__item__content__info__count">
				    <text>共1件</text>
				  </view> -->
								</view>
							</view>

							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text
										class="order__item__operaation__left--text tn-color-gray">{{item.order_sn}}</text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==0" backgroundColor="tn-bg-purplered" :fontSize="24"
											height="auto" padding="10rpx 18rpx"
											@click="paying(item.order_id)">立即支付</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==2" backgroundColor="tn-bg-orange" :fontSize="24"
											height="auto" padding="10rpx 18rpx">确认完成</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==3" backgroundColor="tn-bg-blue" :fontSize="24"
											height="auto" padding="10rpx 18rpx">再次购买</tn-button>
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="tn-padding-bottom"></view> -->
						<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
							<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
							<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
							<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y @scrolltolower="inReachBottom">
						<view v-for="(item,index) in list" :key="index" class="order__item"
							@click="tn('/discoveryPages/orderDetail?id='+item.details_id)">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">
									<text class="tn-text-bold">订单编号：{{item.order_sn}}</text>
									<text
										class="tn-color-blue--disabled tn-padding-left-xs tn-text-df tn-icon-copy"></text>
								</view>
								<view class="tn-color-gray">
									{{filterStatus(item.order_status)}}
								</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="aspectFill"></image>
								</view>

								<view class="tn-flex-1">
									<view class="order__item__content__title tn-text-bold">
										{{item.goods_name}}
									</view>
									<view class="tn-padding-top-xs">
										{{item.spec_name}}
									</view>

								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.goods_price}}</text>
										<!-- <text class="order__item__content__info__price__value--decimal">.00</text> -->
									</view>
									<!-- <view class="order__item__content__info__count">
				    <text>共1件</text>
				  </view> -->
								</view>
							</view>

							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text
										class="order__item__operaation__left--text tn-color-gray">{{item.order_sn}}</text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==0" backgroundColor="tn-bg-purplered" :fontSize="24"
											height="auto" padding="10rpx 18rpx"
											@click="paying(item.order_id)">立即支付</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==2" backgroundColor="tn-bg-orange" :fontSize="24"
											height="auto" padding="10rpx 18rpx">确认完成</tn-button>
										<tn-button shadow shape="round" fontColor="tn-color-white"
											v-if="item.order_status==3" backgroundColor="tn-bg-blue" :fontSize="24"
											height="auto" padding="10rpx 18rpx">再次购买</tn-button>
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="tn-padding-bottom"></view> -->
						<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
							<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
							<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
							<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
						</view>
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>



	</view>
</template>

<script>
	import templatePageMixin from '@/libs/mixin/template_page_mixin.js'
	import {
		orderList,
		payNow
	} from '@/api/order.js'
	export default {
		name: 'TemplateOrder',
		mixins: [templatePageMixin],
		data() {
			return {
				tabList: [{
						name: '全部',
						status: ''
					},
					{
						name: '待支付',
						status: 0
					},
					{
						name: '待发货',
						status: 1

					},
					{
						name: '待收货',
						status: 2

					},
					{
						name: '已完成',
						status: 3
					}
				],
				tabsIndex: 0,
				swiperIndex: 0,
				swiperTop: 0,
				swiperHeight: 0,
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
		onReady() {
			this.$nextTick(() => {
				this.updateSwiperInfo()
			})
		},




		methods: {
			filterStatus(status) {
				if (status == 0) return '待支付'
				if (status == 1) return '待发货'
				if (status == 2) return '待收获'
				if (status == 3) return '已完成'
			},
			// 触底刷新
			inReachBottom() {
				console.log('chu4444')
				// 如果数据加载完毕 不再调用方法
				if (this.loadStatus == 'nomore') return;
				// 否则调用数据加载方法
				this.params.page++;
				this.getList();
			},
			async paying(id) {
				let that = this
				let res = await payNow({
					order_id: id
				})
				uni.requestPayment({
					"provider": "wxpay",
					"appId": res.data.appId, // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
					"nonceStr": res.data.nonceStr, // 随机字符串
					"package": res.data.package, // 固定值
					"timeStamp": res.data.timeStamp, // 时间戳（单位：秒）
					"signType": 'MD5',
					"paySign": res.data.paySign, // 签名，这里用的 MD5/RSA 签名
					success(res2) {
						that.$tn.message.toast('支付成功')
						that.init()
						that.getList()
					},
					fail(e1) {
						console.log('支付失败', e1)
						that.$tn.message.toast('支付失败')
					}
				})

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
					order_status: this.tabList[this.tabsIndex].status
				}
				try {
					let res = await orderList(params)
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


			// 计算可滑动区域的高度信息
			updateSwiperInfo() {
				// 获取可滑动菜单的信息
				this._tGetRect('.order__tabs').then(res => {
					if (!res) {
						setTimeout(() => {
							this.updateSwiperInfo()
						}, 10)
						return
					}
					const systemInfo = uni.getSystemInfoSync()
					this.swiperTop = res.bottom - this.vuex_custom_bar_height
					this.swiperHeight = systemInfo.safeArea.height - res.bottom + systemInfo.statusBarHeight
				})
			},
			// 标签栏值发生改变
			tabsChange(index) {
				this.swiperIndex = index
				this.init()
				this.list = []
			},
			// swiper-item位置发生改变
			swiperTransition(event) {
				this.$refs.tabs.setDx(event.detail.dx)
			},
			// swiper动画结束
			swiperAnimationFinish(event) {
				const current = event.detail.current
				if (this.tabsIndex == current) return
				this.list = []
				this.init()

				this.$refs.tabs.setFinishCurrent(current)
				this.swiperIndex = current
				console.log('滑动值发生该百年')
				this.tabsIndex = current
				this.getList()

			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-order {
		background-color: #FFFFFF;
	}

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 60%;
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

	}

	.order {
		&--wrap {
			position: fixed;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
		}

		/* 导航栏 start */
		&__tabs {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			background-color: inherit;
		}

		/* 导航栏 end */

		/* swiper start */
		&__swiper {
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
			// padding: 0 16rpx;
		}

		/* swiper end */

		/* 订单内容 start */
		&__item {
			margin: 30rpx;
			padding: 36rpx 26rpx;
			background-color: #FFFFFF;
			border-radius: 15rpx;
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);

			&:first-child {
				margin-top: 40rpx;
			}

			&:last-child {
				margin-bottom: 0;
			}

			/* 头部 start */
			&__head {

				&__title {
					padding-bottom: 10rpx;
					line-height: normal;

					&--right-icon {
						font-size: 24rpx;
						margin-left: 8rpx;
					}
				}

				&__status {
					font-size: 22rpx;
					color: #AAAAAA;
				}
			}

			/* 头部 end */

			/* 内容 start */
			&__content {

				margin-top: 20rpx;

				&__image {
					margin-right: 20rpx;

					image {
						width: 140rpx;
						height: 140rpx;
						border-radius: 10rpx;
					}
				}

				&__title {
					padding-right: 40rpx;
					display: -webkit-box;
					overflow: hidden;
					white-space: normal !important;
					text-overflow: ellipsis;
					word-wrap: break-word;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				&__info {

					&__price {
						&--unit {
							font-size: 20rpx;
						}

						&__value--integer,
						&__value--decimal {
							font-weight: bold;
						}

						&__value--decimal {
							font-size: 20rpx;
						}
					}

					&__count {
						color: #AAAAAA;
						font-size: 24rpx;
					}
				}
			}

			/* 内容 end */

			/* 操作按钮 start */
			&__operation {
				margin-top: 30rpx;

				&__right {
					&__button {
						margin-left: 10rpx;
					}
				}
			}

			/* 操作按钮 end */
		}

		/* 订单内容 end */
	}
</style>
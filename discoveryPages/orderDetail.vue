<template>
	<view class="orderDetail tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<view class="tn-padding-left-xs tn-padding-right-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class=" tn-margin-top-xs tn-radius  tn-bg-white tn-padding-xs">
				<view class="tn-flex tn-flex-col-center tn-padding-xs">
					<text class="tn-icon-loading"></text><text
						class="tn-padding-left-xs tn-text-lg">{{filterStatus()}}</text>
				</view>
				<!-- 	<view class="tn-text-xs tn-padding-xs tn-text-gray">
					{{orderInfo.order_status_desc}}
				</view> -->
			</view>
			<view class=" tn-margin-top-xs tn-radius tn-bg-white tn-padding-xs">
				<view class="tn-flex tn-flex-col-center tn-padding-xs">
					<text class="tn-icon-identity"></text><text class="tn-padding-left-xs">收货信息</text>
				</view>
				<view class="tn-text-gray tn-text-xs tn-padding-xs ">
					<view class="">
						{{orderInfo.contact}} {{orderInfo.phone}}
					</view>
					<view class="tn-margin-top-sm tn-flex tn-flex-col-center">
						<text class="tn-icon-location"></text>
						<view class="tn-margin-left-xs">
							{{orderInfo.address}}
						</view>
					</view>
				</view>
			</view>
			<view class=" tn-margin-top-xs tn-radius tn-bg-white tn-padding-xs" v-if="orderInfo.express_number">
				<view class="tn-flex tn-flex-col-center tn-padding-xs">
					<text class="tn-icon-logistics"></text><text class="tn-padding-left-xs">收货信息</text><text
						class="tn-padding-left-xs ">配送信息</text>
				</view>
				<view class="tn-text-xs tn-padding-xs tn-text-gray">
					配送方式：{{orderInfo.express}}
				</view>
				<view class="tn-text-xs tn-padding-xs tn-text-gray tn-flex tn-flex-col-center">
					物流单号：{{orderInfo.express_number}} <text class="copy_text"
						@click="copy(orderInfo.express_number)">复制</text>
				</view>
				<!-- <view class="wuliu_tag tn-flex tn-flex-col-center tn-radius tn-text-xs"
					@click="tn('/pages_index/loginstics_tracking/loginstics_tracking')">
					<text class="text_ellipsis"
						style="width: 650rpx;">{{orderInfo.status=='待收货'?'派送中，【深圳市】【深证某某某】安排某某某某某某':'您已签收，签收时间为2023-12-25 12:00:00'}}</text>
					<u-icon name="arrow-right"></u-icon>
				</view> -->
			</view>
			<view class=" tn-margin-top-xs tn-radius tn-bg-white tn-padding-xs">
				<view class="tn-flex tn-padding-xs tn-margin-top-xs tn-padding-xs">
					<view class="shangpin_img">
						<image style="width: 160rpx;height: 160rpx;" mode="aspectFill" :src="orderInfo.image">
						</image>
					</view>

					<view class="tn-flex tn-flex-1 tn-flex-direction-row tn-margin-left-xs tn-flex-row-between">
						<view class="tn-text-xs">
							<text class="shangpin_content_ellipsis">{{orderInfo.goods_name}}</text>
							<view class="">
								{{orderInfo.spec_name}}
							</view>
						</view>
						<view class="tn-text-xs tn-text-gray tn-flex tn-flex-row-between tn-margin-top-xs">
							<view class="fw tn-color-red-dark">
								￥{{orderInfo.goods_price}}
							</view>
							<view class="tn-margin-left-xs tn-text-gray">
								x{{orderInfo.goods_num}}
							</view>
						</view>
					</view>
				</view>
				<view class="tn-text-xs">

					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">商品总额</text><text>￥{{orderInfo.goods_price}}</text>
					</view>
					<!-- <view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">邮费</text><text>￥{{orderInfo.shipping_price}}</text>
					</view> -->
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">实付款</text><text
							class="tn-color-red-dark">￥{{orderInfo.goods_price}}</text>
					</view>
				</view>

			</view>
			<view class=" tn-margin-top-xs tn-radius tn-bg-white tn-padding-xs">
				<view class="tn-flex tn-flex-col-center tn-padding-xs">
					<text class="tn-icon-order"></text><text class="tn-padding-left-xs">订单信息</text>
				</view>
				<view class="tn-text-xs">
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">订单编号</text>
						<view class="tn-flex tn-flex-col-center">
							<text>{{orderInfo.order_sn}}</text><text class="copy_text"
								@click="copy(orderInfo.order_sn)">复制</text>
						</view>
					</view>
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">创建时间：</text><text>{{orderInfo.createtime}}</text>
					</view>
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">支付时间：</text><text class="">{{orderInfo.pay_time}}</text>
					</view>
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">支付方式：</text><text class="">在线支付</text>
					</view>
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-xs">
						<text class="tn-text-gray">发货时间：</text><text class="">{{orderInfo.pay_time}}</text>
					</view>
				</view>

			</view>
		</view>

		<view class="stick-bottom tn-bg-white">
			<view class="tn-padding-xs tn-flex tn-flex-row-between m-b-10">
				<view class="">
				</view>
				<view class="tn-flex tn-flex-col-center tn-padding-xs">
					<!-- 	<view class="cancel_btn m-r-10" v-if="orderInfo.status=='待发货'">
						取消订单
					</view> -->
					<view class="tn-margin-xs" v-if="type=='shopOrder' && orderInfo.order_status_text=='待发货'"
						@click="tn('/pages_index/deliver_goods/deliver_goods?id='+orderInfo.order_id)">
						<tn-button width="100%" backgroundColor="tn-main-gradient-red"
							fontColor="#ffffff">去发货</tn-button>
					</view>
					<view class="tn-margin-xs" v-if="type=='order' && orderInfo.order_status=='0'" @click="paySubmit">
						<tn-button width="100%" backgroundColor="tn-main-gradient-red"
							fontColor="#ffffff">立即支付</tn-button>
					</view>
					<view class="tn-margin-xs" v-if="type=='order'"
						@click="makePhoneCall(orderInfo.service_phone)">
						<tn-button width="100%" backgroundColor="tn-main-gradient-red"
							fontColor="#ffffff">联系客服</tn-button>
					</view>
					<view class="tn-margin-xs" v-if="type=='order' && orderInfo.order_status_text=='待收货'" @click="receipt">
						<tn-button width="100%" backgroundColor="tn-main-gradient-red"
							fontColor="#ffffff">确认收货</tn-button>
					</view>

					
					<!-- <view class="right_btn m-l-10" v-if="type=='shopOrder' && orderInfo.order_status_text=='待发货'"
						@click="tn('/pages_index/deliver_goods/deliver_goods?id='+orderInfo.order_id)">
						去发货
					</view> -->
					<!-- <view class="left_btn m-l-10" v-if="type=='order' && orderInfo.order_status=='0'"
						@click="paySubmit">
						立即支付
					</view> -->
					<!-- 	<view class="left_btn m-l-10" v-if="type=='order'"
						@click="makePhoneCall(orderInfo.service_phone)">
						联系客服
					</view> -->
					<!-- 	<view class="right_btn m-l-10" @click="receipt"
						v-if="type=='order' && orderInfo.order_status_text=='待收货'">
						确认收货
					</view> -->
				</view>
			</view>
		</view>


	</view>



</template>

<script>
	import {
		orderDetail,
		// shop_orderDetail,
		payNow,
		ordertake,
	} from '@/api/order.js'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

	export default {
		mixins: [template_page_mixin],
		data() {
			return {
				id: '',
				type: 'order',
				orderInfo: {
					status: '待发货'
				},
			};
		},
		computed: {

		},
		onLoad(e) {
			if (e && e.id) {
				this.id = e.id
				if (e.type && e.type == 'shopOrder') {
					this.type = e.type + ""
				}
				this.getData()

			}
		},
		onShow() {},
		onReady() {

		},
		methods: {
			makePhoneCall(num) {
				uni.makePhoneCall({
					phoneNumber: num
				});
			},
			filterStatus() {
				let status = this.orderInfo.order_status
				if (status == 0) return '待支付'
				if (status == 1) return '待发货'
				if (status == 2) return '待收获'
				if (status == 3) return '已完成'
			},
			getData() {
				let that = this
				if (that.type && that.type == 'shopOrder') {
					// shop_orderDetail
					// 	({
					// 		details_id: that.id
					// 	}).then(res => {
					// 		that.orderInfo = res.data
					// 	})
				} else {
					orderDetail
						({
							details_id: that.id
						}).then(res => {
							that.orderInfo = res.data
						})
				}
			},
			receipt() {
				let that = this
				//拉起确认收货组件
				if (wx.openBusinessView) {
					wx.openBusinessView({
						businessType: 'weappOrderConfirm',
						extraData: {
							transaction_id: that.orderInfo.transaction_id //用户交易单号
						},
						success: e => {
							// console.log('进入success',e)
							if (e.extraData.status === 'success') {
								// 用户确认收货成功，再执行自己的代码
								uni.showToast({
									title: "确认收货成功!",
									icon: "none",
								});
							} else if (e.extraData.status === 'fail') {
								// 用户确认收货失败
								uni.showToast({
									title: "确认收货失败!",
									icon: "none",
								});
							} else if (e.extraData.status === 'cancel') {
								// 用户取消
								uni.showToast({
									title: "取消确认收货!",
									icon: "none",
								});
							}
						},
						fail: e => {
							// console.log('进入fail',e)
							uni.showToast({
								title: e.errMsg,
								duration: 2000,
								icon: "none",
							});
						},
						complete: e => {
							that.ordertake(that.orderInfo.transaction_id);
						}
					});
				} else {
					//引导用户升级微信版本
					uni.showToast({
						title: "请升级微信版本",
						duration: 3000,
						icon: "none",
					});
				}

			},
			ordertake(transaction_id) {
				ordertake({
					transaction_id: transaction_id
				}).then(res => {
					if (res.code == 1) {
						this.getData();
					}
				})
			},
			paySubmit() {
				let that = this
				payNow({
					order_id: that.orderInfo.order_id
				}).then(res1 => {
					uni.requestPayment({
						"provider": "wxpay",
						"appId": res1.data.appId, // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
						"nonceStr": res1.data.nonceStr, // 随机字符串
						"package": res1.data.package, // 固定值
						"timeStamp": res1.data.timeStamp, // 时间戳（单位：秒）
						"signType": 'MD5',
						"paySign": res1.data.paySign, // 签名，这里用的 MD5/RSA 签名
						success(res2) {
							that.$tn.message.toast('支付成功')
							setTimeout(function() {
								that.getData()
							}, 2000);
						},
						fail(e1) {
							console.log('支付失败', e1)
							that.$tn.message.toast('支付失败')
						}
					})
				})
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			
			copy(text) {
				// 调用uni.setClipboardData()函数进行复制操作
				uni.setClipboardData({
					data: text, // 设置要复制的文本内容
					success(res) {
						this.$tn.message.toast('复制成功')
					},
					fail(err) {
						this.$tn.message.toast('复制失败')
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.stick-bottom {
		z-index: 999;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
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

	.orderDetail {
		padding-bottom: 100rpx;

	}

	.left_btn {
		box-sizing: border-box;
		height: 48rpx;
		border-radius: 26rpx;
		text-align: center;
		line-height: 48rpx;
		font-size: 24rpx;
		color: #07c160;
		border: 1px solid #07c160;
		// background: linear-gradient(to bottom, #07df6c, #07c160) !important;
		width: 180rpx;
		box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;


		&:hover {
			box-shadow: 0 1vw 2vw rgba(0, 0, 0, 0.2);
			transform: translateY(-0.5vw);
		}
	}

	.right_btn {
		margin-left: 30rpx;
		box-sizing: border-box;
		height: 48rpx;
		border-radius: 26rpx;
		text-align: center;
		line-height: 48rpx;
		font-size: 24rpx;
		color: #3668fc;
		border: 1px solid #3668fc;
		width: 180rpx;
		box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;


		&:hover {
			box-shadow: 0 1vw 2vw rgba(0, 0, 0, 0.2);
			transform: translateY(-0.5vw);
		}
	}

	.copy_text {
		color: #07c160;
		margin-left: 10rpx;
	}

	.shangpin_content_ellipsis {
		// width: 400rpx;
		height: 76rpx;
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/

		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/

		-webkit-line-clamp: 2;
		/** 显示的行数 **/

		overflow: hidden;
		/** 隐藏超出的内容 **/

		text-overflow: ellipsis;
	}

	.wuliu_tag {
		background-color: #bbd1ff;
		color: #0055ff;
		padding: 4rpx 12rpx;
	}
</style>
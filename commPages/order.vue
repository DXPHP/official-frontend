<template>
	<view class="confirmOrder tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<view class=" tn-margin-top-sm tn-radius tn-bg-white tn-padding-bottom-sm"
			:style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="tn-flex tn-flex-col-center tn-flex-row-between">
				<view class="tn-flex tn-flex-row-between tn-text-gray">
					联系人信息
				</view>
				<view class="tn-color-blue--dark tn-flex tn-flex-col-center "
					@click="tn(`/minePages/address?isChoosed=1&id= ${addressInfo.id?addressInfo.id:''}`)">
					{{addressInfo.id?"更换收获地址":"选择收获地址"}}<u-icon name="arrow-right" color="#3668fc"></u-icon>
				</view>

			</view>
			<view class="tn-padding-sm" v-if="addressInfo.id">
				<view class="tn-flex tn-flex-col-center">
					<text class="iconfont icon-a-25Dicon-chunse_dingweilv tn-margin-right-sm"></text>
					<text class="tn-text-bold tn-padding-sm">{{addressInfo.contact}}</text>
					<text class="min_text tn-text-gray">{{addressInfo.phone}}</text>
				</view>
				<view class="min_text tn-text-gray tn-margin-left-sm tn-padding-left-sm ">
					{{addressInfo.address}}{{addressInfo.detail}}
				</view>
			</view>

		</view>
		<view class=" tn-margin-top-sm tn-radius  tn-bg-white tn-shadow-grey tn-border-red--disabled">
			<view class="tn-text-gray">
				商品信息
			</view>
			<view class=" ">
				<view class="tn-flex tn-padding-sm tn-margin-top-sm">
					<view class="shangpin_img">
						<image style="width: 180rpx;height: 180rpx;" :src="goodInfo.image">
						</image>
					</view>

					<view class="tn-flex tn-flex-1 tn-flex-direction-column tn-margin-left-sm tn-flex-row-between ">
						<view class="min_text">
							<text class="shangpin_content_ellipsis">{{goodInfo.name}}</text>
							<view class="tn-padding-top-xs">
								{{goodInfo.spec_name}}
							</view>
						</view>
						<view class="min_text tn-text-gray tn-flex tn-flex-row-between tn-margin-top-sm">
							<view class="tn-text-bold text_red">
								￥{{goodInfo.price}}
							</view>
							<view class="tn-text-xs tn-text-gray tn-text-lg">
								x{{goodInfo.num}}
							</view>
						</view>
					</view>


				</view>
			</view>
		</view>
		<view class=" tn-margin-top-sm tn-radius tn-bg-white tn-padding-sm">
			<view class="tn-flex tn-flex-row-between tn-flex-col-center">
				<text class="">备注</text><input placeholder="请输入备注" suffixIcon="arrow-right"
					suffixIconStyle="color: #909399" v-model="remark" border="none" inputAlign="right"></input>
			</view>
		</view>
		<view class="stick-bottom tn-padding-bottom-xl tn-bg-white">
			<view class="tn-flex tn-flex-row-between tn-padding-sm m-b-10 tn-flex-col-center">
				<view class="tn-text-bold tn-padding-sm m-l-20">
					共{{goodInfo.num}}件
				</view>
				<view class="tn-flex justify_center tn-flex-col-center">
					<view class="tn-margin-right-sm">
						<text class="tn-text-bold">合计:</text><text
							class="text_red tn-text-bold tn-text-lg ">￥{{goodInfo.num*goodInfo.price}}</text>
					</view>
					<tn-button shape="round" backgroundColor="tn-main-gradient-red" padding="38rpx 0" width="360rpx"
						:fontSize="30" shadow @click="makeOrder">
						<text class="tn-color-white" hover-class="tn-hover" :hover-stay-time="150">
							立即支付
						</text>
					</tn-button>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		addressList,
	} from '@/api/user.js'
	import {
		confirmOrder,
	} from '@/api/order.js'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		getStorage,
		removeStorage,
		setStorage
	} from '@/common/db.js';

	export default {
		mixins: [template_page_mixin],
		data() {
			return {
				remark: '',
				order_info: {},
				goodInfo: {},
				addressInfo: {
					id: ''
				}
			}
		},
		onLoad(e) {
			console.log('7777777', e)
			if (e && e.info) {
				const good = JSON.parse(e.info)
				this.goodInfo = good
				setStorage('goodInfo', JSON.stringify(this.goodInfo))
			} else {
				console.log('没传值')
				this.goodInfo = JSON.parse(getStorage('goodInfo')) || {}
			}
			const copyAddress = JSON.parse(getStorage('defaultAddress')) || {}
			addressList().then(res => {
				res.data.list.map(res => {
					// 判断默认地址回显---1表示为默认地址
					if (res.id == copyAddress.id) {
						this.addressInfo = res
					}
				})
			})
			// console.log('goodInfo', this.goodInfo)
			// console.log('addressInfo', this.addressInfo)
		},
		methods: {
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 下单
			makeOrder() {
				let that = this
				if (!this.addressInfo.id) return this.$tn.message.toast('请先选择地址')
				confirmOrder({
					address_id: this.addressInfo.id,
					spec_id: this.goodInfo.spec_id,
					goods_id: this.goodInfo.id,
					goods_num: this.goodInfo.num,
					remarks: this.remark
				}).then(res => {
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
							setTimeout(function() {
								uni.reLaunch({
									url: 'minePages/order'
								})
							}, 2000);
						},
						fail(e1) {
							console.log('支付失败', e1)
							that.$tn.message.toast('支付失败')
						}
					})

				})
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

	.confirmOrder {

		padding: 0 24rpx;
	}

	.shangpin_img {
		width: 240rpx;
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

	.pay_buy {
		box-sizing: border-box;
		height: 64rpx;
		border-radius: 26rpx;
		text-align: center;
		line-height: 64rpx;
		font-size: 32rpx;
		color: #ffffff;
		// background-color: #07c160 !important;
		background: linear-gradient(to bottom, #6dbbff, #3668fc) !important;
		width: 220rpx;
		box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;


		&:hover {
			box-shadow: 0 1vw 2vw rgba(0, 0, 0, 0.2);
			transform: translateY(-0.5vw);
		}
	}
</style>
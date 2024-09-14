<template>
	<view v-if="openModal" class="wx-modal">
		<view class="wam__mask" @touchmove.prevent="" @tap.stop="closeModal"></view>

		<!-- 内容区域 -->
		<view class="wam__wrapper">
			<!-- 关闭按钮 -->
			<view class="wam__close-btn" @tap.stop="closeModal">
				<text class="tn-icon-close"></text>
			</view>

			<view class="tn-flex tn-flex-col-top">

				<view class="tn-padding-bottom">
					<view class="image-pic"
						:style="'background-image:url('+info.image+');background-size: cover;background-position: center;'">
						<view class="image-goods">
						</view>
					</view>
					<!-- <view class="tn-icon-fire tn-color-red" style="position: absolute;margin: -105rpx 0 0 72rpx;border-radius: 100rpx;padding: 5rpx;"></view> -->
				</view>
				<view class="tn-padding-left-sm" style="width: 100%;">
					<view class="tn-padding-top-xs">
						<view class="">
							<text class="tn-text-lg tn-text-bold">{{info.name}}</text>
						</view>
					</view>
					<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-padding-top-sm">
						<view class="justify-content-item" style="color: #FF6E16;">
							<text class="tn-text-lg tn-text-bold"></text>
							<text class="tn-padding-right-xs tn-text-xs">￥</text>
							<text class="tn-text-bold" style="font-size: 40rpx;">{{dataInfo.price}}</text>
							<!-- <text class="tn-padding-left-sm tn-text-xs">优惠价格</text> -->
						</view>
						<view class="justify-content-item tn-round tn-text-xs tn-color-orangered">
							<!-- <text class="tn-padding-right-xs"></text> 预留 -->
						</view>
					</view>
				</view>
			</view>

			<scroll-view scroll-y="true" style="max-height: 30vh;margin: 20rpx 0;">

				<view class="tn-text-bold">规格</view>

				<view class="tn-tag-content tn-text-justify">
					<view v-for="(item, index) in tagList1" :key="index"
						class="tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold"
						:class="[item.select ? 'tag-select' : 'tag-select-no ']" @click="handleClick1(index)">
						<image :src="item.image" mode="aspectFill"
							style="width: 40rpx;height: 40rpx;margin-right: 10rpx;"></image>
						<!-- <text :class="['tn-icon-' + item.icon]"></text> -->
						{{ item.spec_name }}
					</view>
				</view>

				<!-- <view class="tn-text-bold tn-margin-top">后端技术栈</view> -->

				<!--  <view class="tn-tag-content tn-text-justify">
          <view v-for="(item, index) in tagList2" :key="index" class="tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold" :class="[item.select ? 'tag-select' : 'tag-select-no ']"  @click="handleClick2(index)">
            <text :class="['tn-icon-' + item.icon]"></text> {{ item.title }}
          </view>
        </view> -->

				<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-lg tn-padding-bottom">
					<view class="justify-content-item tn-text-bold">
						数量
					</view>
					<view class="justify-content-item" style="">
						<tn-number-box v-model="valueNum" :min="1" :max="dataInfo.maxNum" :disabledInput="true"></tn-number-box>
					</view>
				</view>
			</scroll-view>

			<!-- 悬浮按钮-->
			<view class="tn-flex tn-footerfixed">
				<view class="tn-flex-1 justify-content-item tn-margin-left-xs tn-text-center">
					<tn-button backgroundColor="tn-main-gradient-red " padding="40rpx 0" width="100%" :fontSize="28"
						fontColor="#FFFFFF" shape="round" shadow @click="returnData">
						<text class="">立即购买</text>
					</tn-button>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		mixins: [template_page_mixin],
		options: {
			// 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
			virtualHost: true
		},
		props: {
			value: {
				type: Boolean,
				default: false
			},
			data: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				valueNum: 1,
				openModal: false,
				info: {},

				tagList1: [{
						title: "uniapp-v2",
						select: true
					},
					{
						title: "uniapp-v3",
						select: false
					}
				],

				tagList2: [{
						title: "纯前端模板",
						select: false
					},
					{
						title: "PHP",
						select: true
					},
					{
						title: "Java",
						select: false
					},
					{
						title: "Nest",
						select: false
					},
				],
				dataInfo: {
					maxNum: 20,
					price: 0
				}
			}
		},
		watch: {
			value: {
				handler(val) {
					this.openModal = val
				},
				immediate: true
			},
			data: {
				handler(val) {
					this.info = val
					this.dataInfo.price=this.info.price
					let data = val.spec
					data.forEach(res => {
						res.select = false
					})
					this.tagList1 = data
					console.log('监听到了传入的数据', val, this.tagList1)
				},
				immediate: true
			}
		},
		methods: {
			// 处理点击事件
			handleClick1(index) {
				this.tagList1[index].select = !this.tagList1[index].select
				console.log('点击率变化', this.tagList1[index].select)
				if (this.tagList1[index].select) {
					this.tagList1.forEach(res => {
						console.log('点击率变化888')
						if (res.spec_id != this.tagList1[index].spec_id) {
							console.log('点击率变化6666666', res.spec_id)
							res.select = false
						}else{
							this.dataInfo.price=res.price
							this.dataInfo.maxNum=res.stock
						}
					})
				}
				this.$forceUpdate()
			},
			returnData() {
				let info = {
					val: {
						spec_id: ''
					},
					num: this.valueNum
				}
				this.tagList1.forEach(res => {
					if (res.select) {
						info.val = res
					}
				})
				if (!info.val.spec_id) return this.$tn.message.toast('请先选择规格')
				this.$emit('input', false)
				this.$emit('confirm', info)
			},
			handleClick2(index) {
				this.tagList2[index].select = !this.tagList2[index].select
			},

			// 关闭弹框
			closeModal() {
				this.$emit('input', false)
			},


		}
	}
</script>

<style lang="scss" scoped>
	.tag-select {
		color: #e83845;
		border: 1rpx solid #e83845;
		background-color: #FFFFFF;
		border-radius: 16rpx;
	}

	.tag-select-no {
		color: #000000;
		border: 1rpx solid #F9F9F9;
		background-color: #F9F9F9;
		border-radius: 16rpx;
	}

	/* 商品小 start */
	.image-goods {
		border-radius: 8rpx;
		width: 120rpx;
		height: 120rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 标签内容 end*/

	.wx-modal {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: 99998;

		view {
			box-sizing: border-box;
		}

		.image {
			width: 100%;
			height: 100%;
			border-radius: inherit;
		}

		.wam {

			/* mask */
			&__mask {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				opacity: 0;
				animation: showMask 0.25s ease 0.1s forwards;
			}

			/* close-btn */
			&__close-btn {
				position: absolute;
				top: 30rpx;
				right: 30rpx;
				z-index: 99999;
				font-size: 40rpx;
			}

			/* wrapper */
			&__wrapper {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				background-color: #FFFFFF;
				border-radius: 20rpx 20rpx 0rpx 0rpx;
				padding: 40rpx;
				padding-top: 60rpx;
				padding-bottom: 40rpx;
				padding-bottom: calc(constant(safe-area-inset-bottom) + 40rpx);
				padding-bottom: calc(env(safe-area-inset-bottom) + 40rpx);
				transform-origin: center bottom;
				transform: scaleY(0);
				animation: showWrapper 0.25s ease 0.1s forwards;
				z-index: 99999;
			}

		}
	}

	.tn-btn-hover-class {
		box-shadow: inset 10rpx 2rpx 40rpx 0rpx rgba(0, 0, 0, 0.05);
	}

	@keyframes showMask {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes showWrapper {
		0% {
			transform: scaleY(0);
		}

		100% {
			transform: scaleY(1);
		}
	}

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 160rpx;
		height: calc(180rpx + env(safe-area-inset-bottom) / 2);
		height: calc(180rpx + constant(safe-area-inset-bottom));
	}

	.tn-footerfixed {
		width: 100%;
		margin-top: 30rpx;
		margin-bottom: calc(env(safe-area-inset-bottom)- 20rpx);
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/
</style>
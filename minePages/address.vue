<template>
	<view class="my_address">
		<view class="tn-margin-left-sm tn-margin-right-sm">
			<tn-radio-group v-model="defalutAddress" @change="radioGroupChange" active-color="#3668fc"
				placement="column">
				<view class="tn-bg-white tn-radius tn-margin-top-sm tn-padding-xs" v-for="(item,index) in list"
					:key="index">
					<view class="tn-flex tn-flex-row-between tn-border-solid-bottom tn-padding-sm">
						<view class="tn-flex-1">
							<view class="tn-flex tn-flex-direction-column">
								<view class="tn-flex tn-flex-col-center tn-padding-sm">
									<text class="iconfont icon-yonghuziliao-xianxing tn-margin-right-sm "></text>
									<view class="tn-padding-sm">
										{{item.contact}}
									</view>
									<view class="">
										{{item.phone}}
									</view>
								</view>
								<view
									class="tn-text-sm tn-text-shadow-gray address_wrap tn-padding-sm tn-flex tn-flex-col-center">
									<text class="tn-icon-trusty"></text>{{item.address}}

								</view>
							</view>
						</view>
						<view
							@click="$common.gotoUrl('/pages_index/my_address/edit_address?id='+item.id+'&isChoosed='+isChoosed+'&isChoosedId='+isChoosedId)">
							<u-icon name="edit-pen" size="36rpx"></u-icon>
						</view>

					</view>
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-sm tn-text-sm">
						<tn-radio @change="radioChange_default" :name="item.id" :disabled="item.disabled"
							v-if="isChoosed=='0'">
							默认地址
						</tn-radio>
						<tn-radio @change="radioChange_choosed" :name="item.id" :disabled="item.disabled"
							v-if="isChoosed=='1'">
							选择地址
						</tn-radio>
						<view class="text_gray">
							<text class="tn-icon-trusty" @click="address_deleteFn(item.id)"></text>

						</view>
					</view>
				</view>
			</tn-radio-group>

		</view>
		<!-- 数据为空 -->

		<view class="tn-flex tn-flex-col-center tn-flex-row-center tn-padding-top">
			<tn-empty mode="data" v-if="list.length == 0"></tn-empty>
		</view>

		<view class="tn-footerfixed tn-padding-bottom">
			<view class="tn-flex tn-flex-col-center tn-flex-row-between">
				<view class=" tn-margin-right-sm" v-if="isChoosed=='1' && list.length > 0" @click="choose_address">
					<tn-button backgroundColor="#01BEFF" fontColor="#080808">确认</tn-button>
				</view>

				<view class=""
					@click="$common.gotoUrl('/pages_index/my_address/edit_address?isChoosed='+isChoosed+'&isChoosedId='+isChoosedId)">
					<tn-button backgroundColor="#01BEFF" fontColor="#080808">新增收获地址</tn-button>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	import {
		addressList,
		addressDefault,
	} from '@/api/user.js';

	export default {

		data() {
			return {
				defalutAddress: '',
				copyAddress: {},
				isChoosed: 0,
				isChoosedId: '',
				list: []

			}
		},
		onLoad(e) {
			if (e && e.isChoosed == 1) {
				this.isChoosed = e.isChoosed ? e.isChoosed : ''
			}
			if (e && e.id) {
				this.isChoosedId = e.id
			}

			this.getAddressList()
		},
		methods: {
			getAddressList() {
				this.defalutAddress = ''
				addressList().then(res => {
					this.list = res.data.list
					// 判断是否是选址  && 是否已选有地址--有则回显选中---否则默认选中
					if (this.isChoosed == 1 && this.$common.isFalse(this.isChoosedId)) {
						this.list.map(res => {
							if (res.id == this.isChoosedId) {
								this.defalutAddress = res.id
								this.copyAddress = res
							}
						})

					} else {
						this.list.map(res => {
							// 判断默认地址回显---1表示为默认地址
							if (res.is_default == 1) {
								this.defalutAddress = res.id
								this.copyAddress = res
							}
						})


					}

				})
			},
			// 点击默认地址
			radioChange_default(e) {
				// console.log(e);
				addressDefault({
					id: e
				}).then(res => {
					this.getAddressList()
				})
			},
			// 点击选址
			radioChange_choosed(e) {
				// console.log(e);
				this.list.map(res => {
					if (res.id == e) {
						this.copyAddress = res
					}
				})
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {},

			choose_address() {
				// 存入本地
				this.$storageFn.set('default_address', JSON.stringify(this.copyAddress))
				uni.redirectTo({
					url: '/pages_index/confirm_order/confirm_order'
				})
			},
			address_deleteFn(itemid) {
				let that = this
				uni.showModal({
					title: '',
					content: '您确认删除此地址吗？',
					confirmText: '确认',
					confirmColor: '#3668fc',
					success: function(res) {
						if (res.confirm == true) {
							let address = that.$storageFn.get('default_address')
							if (address.id == itemid) {
								that.$storageFn.set('default_address', {})
							}
							address_delete({
								id: itemid
							}).then(res => {
								that.getAddressList()
								setTimeout(function() {
									uni.showToast({
										title: res.msg,
										duration: 2000
									});
								}, 1000)
							})

						}
					}
				});
			}


		}
	}
</script>

<style lang="scss" scoped>
	.my_address {
		padding-bottom: 120rpx;
	}

	.address_wrap {
		width: 600rpx;
		overflow-wrap: break-word;

	}
</style>
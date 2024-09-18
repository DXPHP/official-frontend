<template>
	<view class="tn-safe-area-inset-bottom" style="width:750rpx;box-sizing: border-box;padding-bottom: 140rpx;">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<radio-group @change="radioGroupChange" placement="column">
				<view class="tn-shadow-gray  tn-radius tn-margin-sm tn-padding-sm" v-for="(item,index) in list"
					:key="index">
					<view class="tn-flex tn-flex-row-between">
						<view class="tn-flex-1">
							<view class="tn-flex tn-flex-direction-column">
								<view class="tn-flex tn-flex-col-center ">
									<text class="tn-icon-my-formal tn-text-lg tn-margin-right-sm"></text>
									<view class="tn-text-bold tn-margin-right-sm">
										{{item.contact}}
									</view>
									<view class="">
										{{item.phone}}
									</view>
								</view>
								<view class="tn-text-sm tn-text-gray tn-padding-top-sm  tn-flex tn-flex-col-center">
									<text class="tn-icon-location tn-text-lg tn-margin-right-sm"></text>{{item.address}}

								</view>
							</view>
						</view>
						<view
							@click="tn('/minePages/editAddress?id='+item.id+'&isChoosed='+isChoosed+'&isChoosedId='+isChoosedId)">

							<text class="tn-icon-edit tn-text-lg"></text>
						</view>

					</view>
					<view class="tn-flex tn-flex-col-center tn-flex-row-between tn-padding-top-lg">
						<radio style="transform:scale(0.8)" @change="radioChangeDefault" :value="item.id"
							:checked="item.is_default" v-if="isChoosed=='0'">
							默认地址
						</radio>
						<radio style="transform:scale(0.8)" @change="radioChangeChoosed" :value="item.id"
							:checked="item.is_default" v-if="isChoosed=='1'">
							选择地址
						</radio>
						<view>
							<text class="tn-icon-delete tn-text-lg" @click="address_deleteFn(item.id)"></text>

						</view>
					</view>
				</view>
			</radio-group>


			<!-- 数据为空 -->

			<view class="tn-flex tn-flex-col-center tn-flex-row-center tn-padding-top">
				<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
				<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
				<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
			</view>

			<view class="stick-bottom">
				<view class="tn-flex tn-flex-col-center tn-flex-row-center"
					style="width: 750rpx;box-sizing: border-box;">
					<view v-if="isChoosed=='1' && list.length > 0" @click="chooseAddress"
						class="tn-flex tn-flex-col-center tn-flex-row-center tn-margin-xs">
						<tn-button size="lg" width="300rpx" backgroundColor="tn-main-gradient-red"
							fontColor="#ffffff">确认</tn-button>
					</view>

					<view class="tn-flex tn-flex-col-center tn-flex-row-center tn-margin-xs"
						@click="tn('/minePages/editAddress?isChoosed='+isChoosed+'&isChoosedId='+isChoosedId)">
						<tn-button size="lg" :width="(isChoosed=='1' && list.length > 0)?'300rpx':'600rpx'"
							backgroundColor="tn-main-gradient-red" fontColor="#ffffff">新增收获地址</tn-button>
					</view>

				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		addressList,
		addressDefault,
		addressDelete
	} from '@/api/user.js';
	import {
		getStorage,
		setStorage
	} from '@/common/db.js';

	export default {
		mixins: [template_page_mixin],
		data() {
			return {
				copyAddress: {},
				isChoosed: 0,
				isChoosedId: '',
				list: [],
				loadStatus: 'loading',
				listStatus: 0,
				params: {
					page: 1,
					//  pageSize: 10,
				},

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
			isFalse(val) {
				let arr = [undefined, null, 'NaN', '']
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == val) {
						return false
					}
				}
				return true
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			getAddressList() {
				addressList().then(res => {
					if (res.data.list.length > 0) {
						this.list = res.data.list
						// 判断是否是选址  && 是否已选有地址--有则回显选中---否则默认选中
						if (this.isChoosed == 1 && this.isFalse(this.isChoosedId)) {
							this.list.forEach(res => {
								if (res.id == this.isChoosedId) {
									res.is_default = 1
									this.copyAddress = res
								} else {
									res.is_default = 0
								}
							})
						} else {
							this.list.map(res => {
								// 判断默认地址回显---1表示为默认地址
								if (res.is_default == 1) {
									this.copyAddress = res

								}
							})
						}
						this.loadStatus = 'nomore'; //数据加载完毕
					} else {
						this.listStatus = 1;
					}
				}).catch(err => {
					this.listStatus = 2;
				})
			},
			// 点击默认地址
			radioChangeDefault(e) {
				// console.log(e);
				addressDefault({
					id: e
				}).then(res => {
					this.getAddressList()
				})
			},
			// 点击选址
			radioChangeChoosed(e) {
				// console.log(e);
				this.list.map(res => {
					if (res.id == e) {
						this.copyAddress = res
					}
				})
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				console.log('5555', e, this.defalutAddress)
				if (this.isChoosed) {
					this.radioChangeChoosed(e.detail.value)
				} else {
					this.radioChangeDefault(e.detail.value)
				}
			},

			chooseAddress() {
				// 存入本地
				setStorage('defaultAddress', JSON.stringify(this.copyAddress))
				uni.redirectTo({
					url: '/commPages/order'
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
							let address = getStorage('defaultAddress')
							if (address.id == itemid) {
								setStorage('defaultAddress', {})
							}
							addressDelete({
								id: itemid
							}).then(res => {
								that.getAddressList()
								setTimeout(function() {
									uni.showToast({
										title: res.msg,
										duration: 1000
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

	.my_address {
		padding-bottom: 120rpx;
		width: 750rpx;
		box-sizing: border-box;
	}

	.stick-bottom {
		background-color: #ffffff;
		width: 750rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		padding-bottom: 16rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
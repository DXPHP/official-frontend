<template>
	<view class="tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<tn-form :labelWidth="180" labelPosition="left" :model="model1" ref="uForm">

				<view class="tn-padding-sm tn-text-lg tn-text-bold">
					地址信息
				</view>


				<view class="tn-form-item1" @click="prependClick">
					<tn-form-item required label="所在地区" prop="userInfo.area" ref="item1" rightIcon="right">
						<view class="tn-flex tn-flex-row-between tn-flex-col-center" style="width: 100%;">
							<view>
							</view>
							<view class="">
								<view style="font-size: 28rpx;color: #080808;" v-if="model1.userInfo.area">
									{{model1.userInfo.area}}
								</view>
								<view v-else style="font-size: 28rpx;color: #aaaaaa;">
									请选择所在地区
								</view>
							</view>
							<!-- <tn-input inputAlign="right" disabled v-model="model1.userInfo.area" disabledColor="#ffffff"
								placeholder="请选择所在地区"></tn-input> -->
						</view>

					</tn-form-item>
				</view>

				<view class="tn-form-item1">
					<tn-form-item required label="详细地址" prop="userInfo.detail" ref="item1">
						<tn-input inputAlign="right" placeholder="请输入详细地址" v-model="model1.userInfo.detail"></tn-input>
					</tn-form-item>
				</view>


				<view class="tn-padding-sm tn-text-lg tn-text-bold">
					用户信息
				</view>

				<view class="tn-form-item1">
					<tn-form-item :labelWidth="200" required label="联系人姓名" prop="userInfo.contact" ref="item1">
						<tn-input inputAlign="right" placeholder="请输入姓名" v-model="model1.userInfo.contact"></tn-input>
					</tn-form-item>
				</view>

				<view class="tn-form-item1">
					<tn-form-item required label="联系电话" prop="userInfo.phone" ref="item1">
						<tn-input inputAlign="right" type="number" placeholder="请输入电话"
							v-model="model1.userInfo.phone"></tn-input>
					</tn-form-item>
				</view>

			</tn-form>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-sm">
				<view class="">
					设为默认地址
				</view>
				<view class="p-10 box_radius flex1">
					<tn-checkbox-group v-model="isDefault">
						<tn-checkbox activeColor="#3668fc" shape="circle"></tn-checkbox>
					</tn-checkbox-group>
				</view>

			</view>
		</view>
		<tn-picker mode="region" v-model="showRegion"
			:areaCode='[model1.userInfo.location.province_id, model1.userInfo.location.city_id, model1.userInfo.location.district_id]'
			@confirm="regionConfirm"></tn-picker>

		<view class="stick-bottom">
			<tn-button v-if="isEdit" size="lg" width="600rpx" backgroundColor="tn-main-gradient-red" fontColor="#ffffff"
				@click="submit">保存修改</tn-button>
			<tn-button v-if="!isEdit" size="lg" width="600rpx" backgroundColor="tn-main-gradient-red"
				fontColor="#ffffff" @click="submit">确认新建</tn-button>
			<!-- <view class="btn" v-if="isEdit" @click="submit">
				保存修改
			</view>
			<view class="btn" v-if="!isEdit" @click="submit">
				确认新建
			</view> -->
		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

	import {
		addressEdit,
		addressDetail
	} from '@/api/user.js'
	export default {
		mixins: [template_page_mixin],
		data() {
			return {
				showRegion: false,
				isEdit: '',
				isDefault: [],
				isChoosed: 0,
				isChoosedId: '',
				id: '',
				model1: {
					userInfo: {
						contact: '',
						area: '',
						detail: '',
						location: {
							district_id: '',
							city_id: '',
							province_id: ''
						}
					},
				},

				rules: {
					'userInfo.area': {
						type: 'string',
						required: true,
						message: '请选择所在地区',
						trigger: ['blur', 'change']
					},
					'userInfo.detail': {
						type: 'string',
						required: true,
						message: '请输入详细地址',
						trigger: ['blur', 'change']
					},

					'userInfo.contact': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.phone': {
						type: 'string',
						required: true,
						message: '请填写联系方式',
						trigger: ['blur', 'change']
					},
					'userInfo.sex': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择男或女',
						trigger: ['blur', 'change']
					},
				},

			}
		},
		onLoad(e) {
			if (e && e.id) {
				this.id = e.id
				this.isEdit = true
				addressDetail({
					id: this.id
				}).then(res => {
					let data = res.data
					let info = {
						area: data.province + '' + data.city + '' + data.district,
						city: data.city,
						contact: data.contact,
						detail: data.detail,
						district: data.district,
						id: data.id,
						phone: data.phone,
						province: data.province,
					}
					if (data.is_default == 1) {
						this.isDefault = ['']
					} else {
						this.isDefault = []
					}
					let location = {
						district_id: data.district_id,
						city_id: data.city_id,
						province_id: data.province_id
					}
					info.location = location
					this.model1.userInfo = info
				})
			}
			if (e && e.isChoosed) {
				this.isChoosed = e.isChoosed
				this.isChoosedId = e.isChoosedId

			}
		},



		methods: {
			prependClick() {
				this.showRegion = true
			},
			regionConfirm(val) {
				this.model1.userInfo.area = val.province.label + '' + val.city.label + '' + val.area.label
				this.model1.userInfo.province = val.province.label
				this.model1.userInfo.city = val.city.label
				this.model1.userInfo.district = val.area.label
				let location = {
					province_id: val.province.value,
					city_id: val.city.value,
					district_id: val.area.value,
				}
				this.model1.userInfo.location = location

			},
			// 提交表单
			submit() {
				if (!this.model1.userInfo.area.trim()) return this.$tn.message.toast('请先选择所在地区')
				if (!this.model1.userInfo.detail.trim()) return this.$tn.message.toast('请先输入详细地址')
				if (!this.model1.userInfo.contact.trim()) return this.$tn.message.toast('请先输入姓名')
				if (!this.model1.userInfo.phone.trim()) return this.$tn.message.toast('请先输入联系电话')

				let params = {
					...this.model1.userInfo,
					...this.model1.userInfo.location
				}

				if (this.isDefault.length > 0) {
					params.is_default = 1
				} else {
					params.is_default = 0
				}
				if (this.isEdit) {
					params.id = this.id
				}
				delete params.location
				delete params.area
				let that = this


				addressEdit(params).then(res => {
					this.$tn.message.toast(res.msg)
					setTimeout(function() {
						uni.redirectTo({
							url: '/minePages/address?isChoosed=' +
								that
								.isChoosed +
								'&id=' + that.isChoosedId
						})
					}, 2000);

				}).catch(errors => {
					this.$tn.message.toast(errors.msg)
				})


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

	.radio_group {
		width: 100%;
	}

	.tn-form-item {}

	.tn-form-item1 {
		padding: 0 32rpx;
		margin-top: 6rpx;
		background-color: #ffffff !important;
	}

	.apply {
		padding-bottom: 90rpx;
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
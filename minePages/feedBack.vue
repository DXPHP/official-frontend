<template>

	<view class="feedBack tn-bg-white tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<view class="tn-padding" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<tn-form labelPosition="top" :model="model1" :rules="rules" ref="uForm" :labelWidth="80">
				<tn-form-item label="问题标签" prop="userInfo.type" required ref="item1">
					<view class=" tn-flex tn-flex-col-center  tn-flex-wrap">
						<view class="tn-margin-left-xs tn-margin-top-xs" v-for="(item,index) in radiolist1">
							<tn-tag :fontColor="item.type==model1.userInfo.type?'#3668fc':'#ccc'"
								:backgroundColor="item.type==model1.userInfo.type?'#3668fc':'#ccc'" plain
								@click="groupChange(item.type)">{{item.name}}</tn-tag>
						</view>
					</view>
				</tn-form-item>
				<tn-form-item label="信息内容" required prop="userInfo.content" borderBottom ref="item2">
					<textarea v-model="model1.userInfo.content" placeholder="请输入内容"></textarea>
				</tn-form-item>
				<tn-form-item label="附加图片" required ref="item3">
					<tn-image-upload ref="imageUpload" :action="action" :header={Token:token} :maxSize="5 * 1024 * 1024"
						:maxCount="6"></tn-image-upload>
				</tn-form-item>
				<tn-form-item label="联系方式" prop="userInfo.contact" borderBottom ref="item4" labelPosition="left"
					:labelWidth="140">
					<tn-input v-model="model1.userInfo.contact" placeholder="可输入电话邮箱或其他联系方式"
						inputAlign="right"></tn-input>

				</tn-form-item>
			</tn-form>
		</view>
		<view class="stick-bottom tn-padding-bottom-sm">
			<view @click="submit" style="width: 750rpx;display: flex;justify-content: center;box-sizing: border-box;">
				<tn-button width="640rpx" shadow shape="round" fontColor="tn-color-white" backgroundColor="tn-bg-blue"
					:fontSize="24" height="auto" padding="26rpx 18rpx">提交</tn-button>
			</view>
		</view>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		feedback
	} from '@/api/home.js'
	import {
		getStorage
	} from '@/common/db.js'
	import {
		baseURL,
		storageKey
	} from '@/common/config.js'

	const {
		storage_token
	} = storageKey
	export default {
		mixins: [template_page_mixin],
		data() {
			return {
				token: '',
				action: '',
				is_upload: false,
				fileList1: [],
				model1: {
					userInfo: {
						content: '',
						type: '1',
					},
				},

				rules: {
					'userInfo.content': {
						type: 'string',
						required: true,
						message: '请填写信息内容',
						trigger: ['blur', 'change']
					},
					'userInfo.type': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择问题类型',
						trigger: ['blur']
					},
				},
				radiolist1: [{
						name: '功能建议',
						type: "1"
					},
					{
						name: 'bug上报',
						type: "2"
					},
					{
						name: '联系业务',
						type: "3"
					}

				],


			}
		},

		// #ifdef MP-WEIXIN
		onReady() {
			this.$refs.form.setRules(this.rules);
		},
		// #endif
		onLoad() {
			this.action = baseURL + '/api/common/upload'
			console.log('777777', this.action)
			this.token = getStorage(storage_token)
		},
		methods: {
			groupChange(n) {
				this.model1.userInfo.type = n
				console.log('groupChange', n, this.model1.userInfo.type);
			},

			// 提交表单
			submit() {

				console.log('form', this.model1.userInfo)
				this.$refs.uForm.validate().then(res => {
					let params = {
						...this.model1.userInfo
					}
					let files = [];
					// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
					files = this.$refs.imageUpload.lists.filter(val => {
						return val.progress == 100
					})
					console.log('files', files, this.$refs.imageUpload)
					let mapimg = files.map(res => res.response.data.url)
					params.image = mapimg.join(',')
					console.log('params', params)
					feedback(params).then(res => {
						this.$tn.message.toast(res.msg)
						setTimeout(function() {
							uni.navigateBack()
						}, 2000);

					}).catch(errors => {
						this.$tn.message.toast(errors.msg)
					})

				}).catch(errors => {
					console.log('errors', errors)
					this.$tn.message.toast('校验失败')
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
	.stick-bottom {
		z-index: 999;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.feedBack {

		padding-bottom: 100rpx;
	}

	.tag_scroll {
		height: 300rpx;
		overflow-y: scroll;
	}
</style>
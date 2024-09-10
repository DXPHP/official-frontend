<template>
	<view class="feedBack bg_white">
		<view class="p-10 box_margin">
			<tn-form labelPosition="top" :model="model1" :rules="rules" ref="uForm" labelWidth="80">
				<tn-form-item label="问题标签" prop="userInfo.type" required borderBottom ref="item1">
					<view class="m-l-10 p-10 flex align_center flex_wrap">
						<view class="m-l-10 m-t-10 p-10" v-for="(item,index) in radiolist1">
							<tn-tag :text="item.name" :color="item.type==model1.userInfo.type?'#3668fc':'#ccc'"
								:borderColor="item.type==model1.userInfo.type?'#3668fc':'#ccc'" plain
								@click="groupChange(item.type)"></tn-tag>
						</view>
					</view>
				</tn-form-item>
				<tn-form-item label="信息内容" required prop="userInfo.content" borderBottom ref="item2">
					<u--textarea v-model="model1.userInfo.content" placeholder="请输入内容" count></u--textarea>
				</tn-form-item>
				<tn-form-item label="附加图片" required borderBottom ref="item3">
					<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="6"></u-upload>
				</tn-form-item>
				<tn-form-item label="联系方式" prop="userInfo.contact" borderBottom ref="item4" labelPosition="left">
					<u--input v-model="model1.userInfo.contact" placeholder="可输入电话邮箱或其他联系方式" border="none"
						inputAlign="right"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</tn-form-item>
			</tn-form>
		</view>
		<view class="stick-bottom p-b-30">
			<view @click="submit">
				<view class="btn">
					提交
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		feedback
	} from '@/api/home.js'
	export default {
		data() {
			return {
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
		methods: {
			groupChange(n) {
				this.model1.userInfo.type = n
				console.log('groupChange', n, this.model1.userInfo.type);
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				this.is_upload = true
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.$common.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result.url
					}))
					fileListLen++
					if (i == lists.length - 1) {
						this.is_upload = false
					}
				}
			},
			// 提交表单
			submit() {
				if (this.fileList1.length < 1) {
					return uni.$u.toast('请先上传图片')
				}
				if (this.is_upload) {
					return uni.$u.toast('请等待图片上传完毕');
				}
				console.log('form', this.model1.userInfo)
				this.$refs.uForm.validate().then(res => {
					let params = {
						...this.model1.userInfo
					}
					let mapimg = this.fileList1.map(res => res.url)
					params.img = mapimg.join(',')

					console.log('params', params)
					feedback(params).then(res => {
						uni.$u.toast(res.msg)
						setTimeout(function() {
							uni.reLaunch({
								url: '/pages/user/user'
							})
						}, 2000);

					}).catch(errors => {
						uni.$u.toast(errors.msg)
					})

				}).catch(errors => {
					console.log('errors', errors)
					uni.$u.toast('校验失败')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.feedBack {
		height: 100%;
		padding-bottom: 100rpx;
	}

	.tag_scroll {
		height: 300rpx;
		overflow-y: scroll;
	}
</style>
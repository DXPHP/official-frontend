<template>
	<uni-popup type="bottom" ref="evaluate_pop" :safe-area="false" @maskClick="close">
		<view class="evaluateDialog">
			<view style="display: flex; justify-content: space-between; align-items: center;">
				<view class="">

				</view>
				<view class="fw min_text">
					{{pinlunNum}}条评论
				</view>
				<view @click="close">
					<image src="./close.png" mode="widthFix" style="width: 60rpx;"></image>
				</view>
			</view>
			<view style="padding-bottom: 80px;" @click="hideKeyBoard">
				<scroll-view style="height:70vh;" scroll-y="true" @scrolltolower="scrolltolower">
					<view class="flex align_center justify_center m-t-50 p-t-50 min_text" v-if="pinlunList.length == 0">
						<text>快来评论吧 ~～</text>
					</view>
					<view class="m-t-40" v-for="(item,index) in pinlunList" :key="item.comment_id">
						<view class="flex">
							<!-- 1.用户的头像 -->
							<image :src="item.user.avatar" mode="aspectFill"
								style="width: 70rpx; height: 70rpx; border-radius: 50%;">
							</image>

							<view class="m-l-16 flex1">
								<!-- 一级评论start -->
								<view class="" @longpress="openDelete(item.user.id,item.comment_id,0,index)">
									<view class="flex">
										<text class="c_a3a1a4 mini_text">{{item.user.name}}</text>
										<!-- 4.如果是视频作者就显示 作者 -->
										<view v-if="videoUserID == item.user_id"
											style="background-color: #E43D33; border-radius: 2.5px; margin-left: 7.5px;">
											<text
												style="font-size: 8px;  padding: 2.5px; padding-left: 4px; padding-right: 4px;  color: #FFFFFF;">作者</text>
										</view>
									</view>
									<view class="m-t-8">
										<view v-if="item.type=='text'">
											{{item.content}}
										</view>
										<view v-if="item.type=='image'">
											<image @click.stop="$common.previewImage([item.content])"
												:src="item.content"
												style="width: 116rpx;height: 116rpx;border-radius: 24rpx;"></image>
										</view>

									</view>
									<view class="flex  align_center justify_bettwen c_a3a1a4 min_text m-t-20">
										<view class="flex align_center mini_text">
											<view class="">
												{{item.create_time}}
											</view>
											<!-- 	<view class="">
														|
													</view>
													<view class="">
													
														四川
													</view> -->
											<view class="m-l-40 fw" @click.stop="huifu(item,index,0)">
												回复
											</view>
										</view>
										<view class="flex align_center">
											<!-- <view class="" @click="avaluateToLike(item)">
													<u-icon v-if="item.is_likes==0" name="heart"
														color="#a3a1a4"></u-icon>
													<u-icon v-if="item.is_likes==1" name="heart-fill"
														color="#ff0000"></u-icon>
												</view>
												<view class="m-l-10">
													{{item.likes}}
												</view> -->

										</view>
									</view>
									<!-- 展开收起start -->
									<view v-if="item.has_more==1 && (!item.back_info)">
										<view class="m-t-30 flex align_center min_text fw"
											@click.stop="get_back_pinglun(item,0)">
											<view class="flex align_center">
												<view class="open-line">
													----
												</view>
												<view class="m-l-10 flex">
													<view>
														展开{{item.num}}条回复
													</view>
												</view>
												<view class="m-l-10">
													<u-icon name="arrow-down" color="#a3a1a4"></u-icon>
												</view>
											</view>
										</view>
									</view>
									<!-- 展开收起end -->
								</view>


								<!-- 一级评论end -->
								<!-- 二级评论start -->
								<view v-if="item.back_info && item.back_info.list && item.back_info.list.length > 0">
									<view class="m-t-20" v-for="(item_back,index_back) in item.back_info.list"
										:key="item_back.comment_id"
										@longpress="openDelete(item_back.user1.id,item_back.comment_id,1,index,index_back)">
										<view class="flex">
											<image :src="item_back.user1.avatar" mode="aspectFill"
												style="width: 46rpx; height: 46rpx; border-radius: 50%;">
											</image>
											<view class="m-l-10 flex1">
												<view class="">
													<view class="flex flex_nowrap">
														<text class="c_a3a1a4 mini_text text_ellipsis"
															:style="$common.isEmptyObj(item_back.user2)?'max-width:260rpx;':''">{{item_back.user1.name}}</text>
														<!-- 4.如果是视频作者就显示 作者 -->
														<view v-if="videoUserID == item_back.user1.id"
															style="background-color: #E43D33; border-radius: 2.5px; margin-left: 7.5px;">
															<text
																style="font-size: 8px;  padding: 2.5px; padding-left: 4px; padding-right: 4px;  color: #FFFFFF;">作者</text>
														</view>
														<view
															class="arrow-container c_a3a1a4 text_ellipsis flex1 mini_text"
															style="max-width: 260rpx;"
															v-if="$common.isEmptyObj(item_back.user2)">
															{{item_back.user2.name}}
														</view>
													</view>
													<view class="mt-4">
														<view v-if="item.type=='text'">
															{{item_back.content}}
														</view>
														<view v-if="item.type=='image'">
															<image @click="$common.previewImage([item_back.content])"
																:src="item_back.content"
																style="width: 116rpx;height: 116rpx;border-radius: 24rpx;">
															</image>
														</view>
													</view>
													<view
														class="flex align_center justify_bettwen  c_a3a1a4 min_text m-t-20">
														<view class="flex align_center mini_text">
															<view class="">
																{{item_back.create_time}}
															</view>
															<!-- <view class="">
																		|
																	</view>
																	<view class="">
																	
																		四川
																	</view> -->
															<view class="m-l-40 fw"
																@click.stop="huifu(item_back,index,1)">
																回复
															</view>
														</view>
														<view class="flex align_center">
															<!-- <view class="" @click="avaluateToLike(item_back)">
																	<u-icon v-if="item_back.is_likes==0" name="heart"
																		color="#a3a1a4"></u-icon>
																	<u-icon v-if="item_back.is_likes==1"
																		name="heart-fill" color="#ff0000"></u-icon>
																</view>
																<view class="m-l-10">
																	{{item_back.likes}}
																</view> -->

														</view>
													</view>
												</view>
											</view>
										</view>
									</view>
									<!-- 展开收起start -->
									<view v-if="item.back_info && item.back_info.list.length>0">
										<view class="m-t-30 flex align_center min_text fw">
											<view class="flex align_center"
												@click.stop="get_back_pinglun(item,item.back_info.cursor)"
												v-if="item.back_info.list && item.back_info.has_more==1">
												<view class="open-line">
													----
												</view>
												<view class="m-l-10 flex align_center">
													<view>
														展开更多回复
													</view>
												</view>
												<view class="m-l-10">
													<u-icon name="arrow-down" color="#a3a1a4"></u-icon>
												</view>
											</view>
											<view class="flex align_center m-l-40"
												@click.stop="hide_evaluate_some(item)"
												v-if="item.has_more==1 && item.back_info && item.back_info.list.length>0">
												<view class="">
													收起
												</view>
												<view class="">
													<u-icon name="arrow-up" color="#a3a1a4"></u-icon>
												</view>
											</view>
										</view>
									</view>
									<!-- 展开收起end -->
								</view>

							</view>
						</view>
					</view>

				</scroll-view>
				<view class="sticky-b">
					<myInput ref="myInput" @send="sendMessage" :comment_user="comment_user">
					</myInput>
				</view>
			</view>
		</view>
		<uni-popup @close="delete_close" mode="bottom" ref="deleteRef">
			<view class="p-30 flex_column flex align_center">
				<view class="text_red p-20" @click="delete_cm">
					删除
				</view>
				<view class="p-40" @click="delete_close">
					取消
				</view>
			</view>
		</uni-popup>

	</uni-popup>

</template>

<script>
	import {
		storageKey
	} from '@/common/config.js'
	const {
		storage_userInfo
	} = storageKey
	import {
		commentList,
		childCommentList,
		delComment,
		// likes_comment,
		comment
	} from "@/api/home.js"
	import myInput from './myinput.vue'
	export default {
		name: "myEvaluateDialog",
		components: {
			myInput
		},
		data() {
			return {
				pinlunList: [],
				pinlunNum: 0, //总评论数量
				relationID: "",
				videoUserID: "",
				update: true, //用于刷新视图
				update_one_info: {
					moments_id: '',
					index: 0,
				},
				params: {
					page: 1
				},
				first_has_more: 1,
				relation_id: 0,
				delete_info: {
					index: undefined,
					index1: undefined,
					id: 0
				},
				reply_template: {
					comment_id: 57,
					content: "",
					create_time: "1天前",
					has_more: 0,
					is_likes: 0,
					likes: 0,
					num: 0,
					type: "image",
					user1: {
						avatar: "",
						id: 21,
						name: "绿道网络"
					},
					user2: []
				}, //前端回复的模板
				reply_index: 0, //前端回复的对应item的索引
				evaluate_template: {
					comment_id: 57,
					content: "",
					create_time: "1天前",
					has_more: 0,
					is_likes: 0,
					likes: 0,
					num: 0,
					type: "image",
					user: {
						avatar: "",
						id: 21,
						name: "绿道网络"
					},
					user_id: 21
				}, //直接评论的模板
				self_info: {},


				comment_user: '',
				back_comment_type: ''

				// ----- end ----- 评论内容部分
			}
		},

		props: {
			Width: Number,
			Height: Number,
			comment_type: String
		},
		watch: {

		},
		created() {
			console.log('userInfo', uni.getStorageSync(storage_userInfo))
			let data = uni.getStorageSync(storage_userInfo)
		let	userInfo = JSON.parse(data).userinfo || {}

			let info = {
				avatar: userInfo.avatar,
				id: userInfo.user_id,
				name: userInfo.nickname
			}
			this.self_info = info
		},
		methods: {
			// 模仿触底刷新
			scrolltolower(e) {
				// console.log('触底刷新', e)
				// 如果数据加载完毕 不再调用方法
				if (this.first_has_more == '0') return;
				// 否则调用数据加载方法
				this.params.page++;
				this.getEvaluateList();
			},
			// 关闭键盘输入框
			hideKeyBoard() {
				this.$refs.myInput.hideInput()
				this.back_comment_type = ''
				this.comment_user = ''

			},
			clearKeyBoard() {
				this.$refs.myInput.clearMsg()
			},
			// 点赞
			avaluateToLike(item) {
				likes_comment({
					comment_id: item.comment_id
				}).then(res => {
					if (item.is_likes == 0) {
						item.is_likes = 1
						item.likes++
					} else {
						item.is_likes = 0
						item.likes--
					}
				})
			},
			// 长按事件
			openDelete(user_id_c, id_c, num, index_c, index1_c) {
				if (user_id_c != this.self_info.id) return 1
				// console.log('长按事件', user_id_c, id_c, num, index_c, index1_c)
				if (num == 0) {
					this.delete_info.index = index_c
					this.delete_info.id = id_c
					this.$refs.deleteRef.open('bottom')
				}
				if (num == 1) {
					this.delete_info.index = index_c
					this.delete_info.index1 = index1_c
					this.delete_info.id = id_c
					this.$refs.deleteRef.open('bottom')
				}
			},
			// 确定删除某条评论
			delete_cm() {
				let params = {
					// relation_id: this.relationID,
					comment_id: this.delete_info.id
				}
				// console.log('params', params)
				delComment(params).then(res => {
					this.$refs.deleteRef.close()
					if (this.delete_info.index1 != undefined) {
						// 删除回复的评论
						this.pinlunList[this.delete_info.index].back_info.list.splice(this.delete_info.index1, 1)
						this.init_delete_info()

					} else {
						// 删除最外层评论
						this.pinlunList.splice(this.delete_info.index, 1)
						this.init_delete_info()

					}
				}).catch(err => {
					this.init_delete_info()
				})

			},
			// 初始化删除的评论信息
			init_delete_info() {
				this.delete_info = {
					index: undefined,
					index1: undefined,
					id: ''
				}
			},
			// 关闭要删除的评论弹窗
			delete_close() {
				this.init_delete_info()
				this.$refs.deleteRef.close()

			},

			// 提供给外部的方法--打开此评论弹窗---传入ID和USERID
			open(relation_id, video_user_id) {
				this.relationID = relation_id
				this.videoUserID = video_user_id
				// #ifdef H5
				let that = this
				setTimeout(function() {
					that.$refs.evaluate_pop.open('bottom')
					that.getEvaluateList(relation_id)
				}, 300);
				// #endif
				// #ifndef H5
				this.$refs.evaluate_pop.open('bottom')
				this.getEvaluateList(relation_id)
				// #endif

			},
			// 关闭评论弹窗---初始化数据
			close() {
				this.hideKeyBoard()
				this.$refs.evaluate_pop.close()
				this.videoUserID = 0
				this.relationID = 0
				this.pinlunNum = 0
				this.pinlunList = []
				// console.log('评论区关闭', this.pinlunList)
				this.first_has_more = 1

				this.$emit('closeScrollview');

			},
			// 展开更多评论
			get_back_pinglun(item, index) {
				childCommentList({
					comment_id: item.comment_id,
					cursor: index
				}).then(res => {
					if (item.back_info) {
						item.back_info.cursor = res.data.cursor
						item.back_info.has_more = res.data.has_more
						item.back_info.list = [...item.back_info.list, ...res.data.list]
					} else {
						item.back_info = res.data
					}
					this.$forceUpdate()
					// console.log('查看更多评论', res.data, item)
				})
			},

			// 获取最外层的评论列表
			getEvaluateList(id) {
				if (id) {
					this.relation_id = id
				}
				let params = {
					page: this.params.page,
					relation_id: this.relation_id,
					comment_type: this.comment_type
				}
				commentList(params).then(res => {
					this.pinlunNum = res.data.count
					this.pinlunList = this.pinlunList.concat(res.data.list)
					if (res.data.list.length < 10) this.first_has_more = 0
					// console.log('pinlunList', this.pinlunList)
				})
			},

			// 收起其中一条评论的更多评论
			hide_evaluate_some(item) {
				delete item.back_info
				this.$forceUpdate()
			},
			// 这个用于更新一条信息---目前用不到
			// updateOne(id, index) {
			// 	let params = {
			// 		page: 1,
			// 		keyword: '',
			// 		moments_id: id
			// 	};
			// 	moments(params).then(res => {
			// 		let list = res.data; //数据列表
			// 		this.list[index] = list[0]
			// 	}).catch(err => {

			// 	})
			// },
			// 发送消息
			sendMessage(message, file) {
				// console.log('message', message)
				let comment_id_c = 0
				if (this.back_comment_type == 'back') {
					comment_id_c = this.reply_template.comment_id
				}
				// 文字评论
				if (message) {
					comment({
						comment_type: this.comment_type,
						type: 'text',
						relation_id: this.relationID,
						comment_id: comment_id_c,
						content: message
					}).then(res => {
						// comment_typ == 'back'是回复  否则是评论
						if (this.back_comment_type == 'back') {
							this.reply_template.comment_id = res.data.comment_id
							this.reply_template.create_time = '刚刚'
							this.reply_template.type = 'text'
							this.reply_template.content = message
							if (!this.pinlunList[this.reply_index].back_info) {
								this.pinlunList[this.reply_index].back_info = {
									list: [],
									cursor: 1,
									has_more: 0,
								}
							}
							let deepClone = JSON.parse(JSON.stringify(this.reply_template))
							this.pinlunList[this.reply_index].back_info.list.push(deepClone)
							// console.log('评论数组', this.pinlunList)
							this.hideKeyBoard()
							this.clearKeyBoard()
						} else {
							this.evaluate_template.comment_id = res.data.comment_id
							this.evaluate_template.create_time = '刚刚'
							this.evaluate_template.type = 'text'
							this.evaluate_template.content = message
							this.evaluate_template.user = JSON.parse(JSON.stringify(this.self_info))
							let deepClone = JSON.parse(JSON.stringify(this.evaluate_template))
							this.pinlunList.unshift(deepClone)
							this.hideKeyBoard()
							this.clearKeyBoard()
						}
						// this.updateOne(this.update_one_info.moments_id, this.update_one_info.index)
					})
				}
				// 图片评论 
				if (file.length > 0) {
					this.$common.uploadFilePromise(file[0].path).then(res => {
						const url = res.data.fullurl
						let img = url
						// console.log('img', img)
						comment({
							comment_type: this.comment_type,
							type: 'image',
							relation_id: this.relationID,
							comment_id: comment_id_c,
							content: img
						}).then(res => {
							if (this.back_comment_type == 'back') {
								this.reply_template.comment_id = res.data.comment_id
								this.reply_template.create_time = '刚刚'
								this.reply_template.content = img
								this.reply_template.type = 'image'
								if (!this.pinlunList[this.reply_index].back_info) {
									this.pinlunList[this.reply_index].back_info = {
										list: [],
										cursor: 1,
										has_more: 0,
									}
								}
								let deepClone = JSON.parse(JSON.stringify(this.reply_template))
								this.pinlunList[this.reply_index].back_info.list.push(deepClone)
							} else {
								this.evaluate_template.comment_id = res.data.comment_id
								this.evaluate_template.create_time = '刚刚'
								this.evaluate_template.content = img
								this.evaluate_template.type = 'image'
								this.evaluate_template.user = JSON.parse(JSON.stringify(this
									.self_info))
								let deepClone = JSON.parse(JSON.stringify(this.evaluate_template))
								this.pinlunList.unshift(deepClone)
							}
							// this.updateOne(this.update_one_info.moments_id, this.update_one_info.index)
						})

					})

				}
			},

			huifu(item, index, num) {
				let my_info = JSON.parse(JSON.stringify(this.self_info))
				this.reply_index = index
				this.reply_template = JSON.parse(JSON.stringify(item))
				this.reply_template.is_likes = 0
				this.reply_template.likes = 0
				this.reply_template.user1 = my_info
				// num==0  代表评论的是最外层的--外层和里层返回的字段不一样--所以在底下要做判断赋值
				this.reply_template.user2 = (num == 0) ? [] : JSON.parse(JSON.stringify(item.user1))
				delete this.reply_template.user
				this.comment_user = (num == 0) ? JSON.parse(JSON.stringify(item.user.name)) : JSON.parse(JSON.stringify(
					item.user1.name))
				this.$refs.myInput.openInout()
				this.back_comment_type = 'back'
				// console.log('回复的模板', this.reply_template)
			},


		}
	}
</script>

<style lang="scss" scoped>
	// 定义内外边距，历遍1-60
	@for $i from 0 through 60 {

		// 只要双数和能被5除尽的数
		@if $i % 2==0 or $i % 5==0 {

			// 如：m-30
			.m-#{$i} {
				margin: $i + rpx;
			}

			// 如：p-30
			.p-#{$i} {
				padding: $i + rpx;
			}

			@each $short,
			$long in l left,
			t top,
			r right,
			b bottom {

				//结果如： m-l-30
				// 定义外边距
				.m-#{$short}-#{$i} {
					margin-#{$long}: $i + rpx;
				}

				// 定义内边距
				//结果如： p-l-30
				.p-#{$short}-#{$i} {
					padding-#{$long}: $i + rpx;
				}
			}
		}
	}

	.bg_white {
		background-color: #ffffff;
	}

	.flex {
		display: flex;
	}

	.flex1 {
		flex: 1;
	}

	.flex_column {
		flex-direction: column;
	}

	.flex_wrap {
		flex-wrap: wrap;
	}

	.justify_bettwen {
		justify-content: space-between;
	}

	.justify_arround {
		justify-content: space-around;
	}

	.justify_center {
		justify-content: center;
	}

	.align_center {
		align-items: center;
	}

	.dianzan {
		width: 17.5px;
		height: 17.5px;
		position: absolute;
		right: 22.5px;
		margin-left: 2.5px;
	}

	.sticky-b {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
	}

	.c_a3a1a4 {
		color: #a3a1a4;
	}

	.evaluateDialog {
		border-radius: 24rpx 24rpx 0 0;
		width: 750rpx;
		padding: 20rpx 40rpx 0;
		background-color: #ffffff;
		position: relative;
		box-sizing: border-box;

	}

	.tabar_bottom {
		/* padding-bottom: 50px; */
	}

	.arrow-container {
		position: relative;
		display: inline-block;
		/* 或者其他你需要的显示方式 */
		padding-left: 12px;
		margin-left: 6rpx;
		/* 根据需要调整，为三角形留出空间 */
		/* 其他样式... */
	}

	.arrow-container::before {
		content: "";
		position: absolute;
		left: 0;
		top: 50%;
		/* 垂直居中，可以根据需要调整 */
		transform: translateY(-50%);
		/* 与 top: 50% 配合使用，实现垂直居中 */
		width: 0;
		height: 0;
		border-top: 5px solid transparent;
		/* 左边框透明 */
		border-bottom: 5px solid transparent;
		/* 右边框透明 */
		border-left: 10px solid #a3a1a4;
		/* 上边框为黑色，形成向下的箭头 */
		/* 其他样式，如 margin、z-index 等... */
	}
</style>
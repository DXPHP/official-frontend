<template>
	<view>
		<!-- <u-popup mode="bottom" v-model="pop_show" :mask="false"> -->
		<view class="bg_white p-t-10" :style="[{height:boxHeight+textLineHeight+'px'}]" @click.stop="">
			<view class="flex justify_bettwen  bg_grey box_radius m-l-20 m-r-20 m-b-10 p-l-30 ">
				<textarea ref="myinput" auto-height :show-confirm-bar="false" :adjust-position='false' v-model="msg"
					class="im-input c-333 m-t-10 m-b-10" confirm-type="send" maxlength="-1" @focus.stop="InputFocus"
					@confirm="sendMsg(msg,'')" @blur="InputBlur" :focus="isFocus"
					:placeholder="comment_user?'回复'+comment_user:'有爱评论，说点好听的～'"
					@keyboardheightchange="keyboardheightchange" @linechange="linechange" />
				<view class="flex">
					<view class="im-menus font-size-28" hover-class="tap" @click.stop="showAppBox(1)">🙂</view>
					<!-- <view class="im-menus font-size-28 mr-10" hover-class="tap" v-if="!msg" @click="chooseImg">📷</view> -->
					<view v-if="msg">
						<button size="" class="button_box bg_primay box_shadow" @tap.stop="sendMsg(msg,'')"
							:disabled="is_loading" :loading="is_loading" style="border-radius:24rpx">发送</button>
					</view>
				</view>
			</view>
			<!-- 表情窗口 -->
			<view v-if="appBox==1">
				<scroll-view scroll-y class="bg_white im-emoji-body">
					<view :style="[{height:emojiHeight+'px'}]">
						<myemoji @input="handleEmojiInput"></myemoji>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- </u-popup> -->

	</view>
</template>
<script>
	import myemoji from '@/components/emoji/emoji.vue';
	export default {
		name: "myinput",
		components: {
			myemoji
		},
		props: {
			comment_user: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				is_loading: false,
				appBox: 0,
				isFocus: false,
				KeyboardHeight: 0,
				myeditor: '',
				msg: '',
				emojiList2: [],
				pad_bottom: 0,
				boxHeight: 46,
				emojiHeight: 300,
				is_open: false,
				textLineHeight: 0,
				statusBarHeight: 0,
			}
		},
		watch: {

		},
		created: function() {
			// 监听键盘高度
			//#ifdef MP-WEIXIN || MP-ALIPAY
			// uni.onKeyboardHeightChange(res => {
			// })
			//#endif
			uni.getSystemInfo({
				success: res => {
					let windowHeight = res.windowHeight;
					this.mainHeight = windowHeight;
					// console.log('页面的系统配置', res)
					this.statusBarHeight = res.statusBarHeight
				}
			});

		},
		destroyed() {
			// console.log('destroyed')
			// uni.offKeyboardHeightChange()
		},
		methods: {
			// 监听输入框的高度--实时更新整体的高度
			linechange(e) {
				// console.log('输入框换行', e)
				this.textLineHeight = e.detail.height
			},
			// 监听键盘
			keyboardheightchange(e) {
				if (e.detail.height > 0 && (this.boxHeight != (e.detail.height + 46 - this
						.statusBarHeight))) {
					// console.log('监听键盘高度重新给弹框赋值高度', e)
					this.boxHeight = e.detail.height + 46
					if (this.emojiHeight != e.detail.height) {
						this.emojiHeight = e.detail.height
					}
				}

			},
			// 选择表情时
			handleEmojiInput(val) {
				this.msg = this.msg + val
			},
			// 点击发送发送
			sendMsg(content, file) {
				this.is_loading = true
				let content_c = content.trim()
				if (!content_c && !file) return this.$toast({
					title: '不可以发送空白消息'
				})
				// console.log('input组件向父组件发送的消息', content, file)
				this.$emit('send', content, file);

				// 发送消息之后如果需要弹起键盘就打开这里
				// if (this.appBox == 0 && this.boxHeight > 300) {
				// 	this.openInout()
				// }
			},
			// 打开表情选择
			showAppBox(val) {
				this.appBox = val;
				if (this.boxHeight < 100) {
					this.boxHeight = this.emojiHeight + 46
				}
			},
			// 隐藏表情
			hideEmoji() {
				this.appBox = 0
			},
			// 收起高度
			hideInput() {
				if (this.boxHeight == 46) return
				this.boxHeight = 46
				this.hideEmoji()
				this.isFocus = false
				this.is_loading = false
			},
			// 弹起键盘
			openInout() {
				this.isFocus = true
			},
			// 选择图片
			chooseImg() {
				let message = {
					type: 'image',
					status: 'going'
				};
				uni.chooseImage({
					count: 9,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFiles = res.tempFiles;
						// console.log('----', tempFiles)
						if (this.appBox == 0) {
							this.openInout()
						}
						this.$emit('send', '', tempFiles);
					},
					complete: (content) => {
						if (this.appBox == 0) {
							this.openInout()
						}
					}

				});
			},
			clearMsg(e) {
				this.msg = ''
				this.is_loading = false
			},
			InputFocus(e) {
				this.appBox = 0
			},
			InputBlur(e) {}

		}
	}
</script>
<style lang="scss" scoped>
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
	
	.button_box ::after {
		border: none
	}

	.send-box {
		padding: 6rpx 16rpx;
	}

	.items {
		width: auto;
		line-height: 88rpx;
		font-size: 28rpx;
		color: #2B2E3D;
	}

	.im-menus {
		box-sizing: border-box;
		width: 80rpx;
		height: 60rpx;
		font-size: 40rpx;
		text-align: center;
	}

	.im-input {

		// line-height: 1.5;
		flex: 1;
		// font-size: 28rpx !important;
		word-break: break-all;
		word-wrap: break-word;
	}
</style>
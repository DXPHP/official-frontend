<template>
	<view>
		<!-- <u-popup mode="bottom" v-model="pop_show" :mask="false"> -->
		<view class="bg_white p-t-10" :style="[{height:boxHeight+textLineHeight+'px'}]" @click.stop="">
			<view class="input-box">
				<textarea ref="myinput" auto-height :show-confirm-bar="false" :adjust-position='false' v-model="msg"
					class="im-input c-333 m-t-10 m-b-10" confirm-type="send" maxlength="-1" @focus.stop="InputFocus"
					@confirm="sendMsg(msg,'')" @blur="InputBlur" :focus="isFocus"
					:placeholder="commentUser?'回复'+commentUser:'有爱评论，说点好听的～'"
					@keyboardheightchange="keyboardheightchange" @linechange="linechange" />
				<view class="flex">
					<view class="im-menus font-size-28" hover-class="tap" @click.stop="showAppBox(1)">🙂</view>
					<!-- <view class="im-menus font-size-28 mr-10" hover-class="tap" v-if="!msg" @click="chooseImg">📷</view> -->
					<view v-if="msg">
						<button  class="button_box" @tap.stop="sendMsg(msg,'')"
							:disabled="isLoading" :loading="isLoading">发送</button>
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
			commentUser: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				isLoading: false,
				appBox: 0,
				isFocus: false,
				KeyboardHeight: 0,
				myeditor: '',
				msg: '',
				emojiList2: [],
				boxHeight: 46,
				emojiHeight: 300,
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
				this.isLoading = true
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
				this.isLoading = false
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
				this.isLoading = false
			},
			InputFocus(e) {
				this.appBox = 0
			},
			InputBlur(e) {}

		}
	}
</script>
<style lang="scss" scoped>
	.input-box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx 20rpx;
		margin: 0 20rpx;
		background-color: #e2e2e2;
		border-radius: 8rpx;
	}
	.flex {
		display: flex;
	}
	.bg_white{
		background-color: #ffffff;
	}
	.m-t-10{
		margin-top: 10rpx;
	}
	.m-b-10{
		margin-bottom: 10rpx;
	}
	.p-t-10{
		padding-top: 10rpx;
	}
	.button_box{
		background-color: aqua;
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
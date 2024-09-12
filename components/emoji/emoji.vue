<template>
	<view class="emoji">
		<view class="emoji-lists">
			<view class="emoji-item" v-for="(item, index) in emoji" @tap="handleClick(item)" :key="index">
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import emoji from './data.js'
	export default {
		name: "emoji",
		data() {
			return {
				emoji
			};
		},
		created() {
		},
		methods: {
			handleClick(emoji) {
				this.$emit('input', `${emoji}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.emoji-lists {
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx;

		.emoji-item {
			width: 12.5%;
			font-size: 44rpx;
			text-align: center;
			padding: 10rpx 0;
			transform: scale(1.2);
		}
	}
</style>
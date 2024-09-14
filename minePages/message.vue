<template>
	<view class="tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>

			我的消息

		</tn-nav-bar>
		<view class="tn-margin-top" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<view
				class="tn-padding-top-sm tn-padding-bottom-sm tn-padding-left-lg tn-padding-right-lg tn-flex tn-flex-row-center"
				v-for="(item,index) in list" @click="gotoUrl(item)">
				<view class="">
					<image :src="item.comment_user.avatar" mode="aspectFill"
						style="width: 106rpx;height: 106rpx;border-radius: 50%;border: 1rpx solid #ccc;"></image>
				</view>
				<view class="tn-flex-1 tn-margin-left-xs">
					<view class="tn-text-bold">
						{{item.comment_user.nickname}}
					</view>
					<view class="tn-margin-top-xs clamp-text-2">
						评论了你：{{item.content}}<text class="tn-text-xs tn-color-gray tn-margin-left-xs">{{item.createtime}}</text>
					</view>
					<view class="tn-text-xs tn-margin-top-xs">

					</view>
				</view>
				<view class="">
					<image :src="item.image" mode="aspectFill"
						style="width: 88rpx;height: 110rpx;border-radius: 8rpx;border: 1rpx solid #ccc;"></image>

				</view>
			</view>
			<view class="tn-padding-top-lg tn-flex tn-flex-col-center tn-flex-row-center">
				<tn-load-more :status="loadStatus" v-if="listStatus === 0"></tn-load-more>
				<tn-empty mode="network" v-if="listStatus === 2"></tn-empty>
				<tn-empty mode="data" v-if="listStatus === 1"></tn-empty>
			</view>
		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		myNotification
	} from '@/api/user.js'
	export default {
		mixins: [template_page_mixin],
		data() {
			return {
				loadStatus: 'loading',
				listStatus: 0,
				params: {
					page: 1,
					//  pageSize: 10,
				},
				list: []
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			// 初始化数据
			this.init();
			this.getList('refresh');
		},
		// 触底加载
		onReachBottom() {
			// 如果数据加载完毕 不再调用方法
			if (this.loadStatus == 'nomore') return;
			// 否则调用数据加载方法
			this.params.page++;
			this.getList();
		},
		onLoad() {
			this.getList()
		},
		methods: {
			gotoUrl(item){
				if(item.type==1){
					uni.navigateTo({
						url:'/homePages/businessDetail?id='+item.relation_id
					})
				}
				if(item.type==2){
					uni.navigateTo({
						url:'/discoveryPages/case?id='+item.relation_id
					})
				}
				if(item.type==3){
					uni.navigateTo({
						url:'/newsPages/article?id='+item.relation_id
					})
				}
				if(item.type==4){
					uni.navigateTo({
						url:'/commPages/product?id='+item.relation_id
					})
				}
				if(item.type==5){
					uni.navigateTo({
						url:'/homePages/video?id='+item.relation_id
					})
				}
			},
			/* ------------------加载数据列表 start------------------------  */
			// 初始化数据
			init() {
				this.loadStatus = 'loading';
				this.params.page = 1
				this.listStatus = 0;
			},
			async getList(refresh) {
				let params = {
					...this.params

				}
				try {
					let res = await myNotification(params)
					let list = res.data.list //拿到数据格式可能不同----只需要修改这里
					let curPageLen = list.length; //数据列表长度
					if (this.params.page == 1) this.list = []; // 如果数据是第一页 需置空数据列表重新加载
					if (curPageLen != 0) {
						this.list = this.list.concat(list); //追加新数据
						// 如果传回数组长度小于10 数据加载完毕。 反之数据可以继续加载
						curPageLen < 10 ? this.loadStatus = 'nomore' : this.loadStatus = 'loading';
					} else {
						this.loadStatus = 'nomore'; //数据加载完毕
						// 如果首次加载 数据列表为空
						if (this.params.page == 1) this.listStatus = 1;
					}
					// 如果点击下拉加载
					if (refresh) {
						uni.stopPullDownRefresh();
					}
				} catch (error) {
					// 在这里处理错误  
					this.listStatus = 2;
					console.error('捕获到错误：', error);
					// 你可以根据错误类型或错误信息来执行不同的操作  
				}

			},
			/* ------------------加载数据列表 end------------------------  */
		}
	}
</script>

<style lang="scss" scoped>
	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}
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
</style>
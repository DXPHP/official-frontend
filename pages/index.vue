<template>
	<view class="start-index">
		<!-- 首页 -->
		<view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<Home ref="home" @change="switchTabbar"></Home>
			</scroll-view>
		</view>

		<!-- 产品 -->
		<view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<Comm ref="comm"></Comm>
			</scroll-view>
		</view>

		<!-- 案例 -->
		<view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<Discovery ref="discovery"></Discovery>
			</scroll-view>
		</view>

		<!-- 资讯 -->
		<view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<News ref="news"></News>
			</scroll-view>
		</view>

		<!-- 我的 -->
		<view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<Mine ref="mine"></Mine>
			</scroll-view>
		</view>

		<!-- 底部导航 -->
		<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
			activeIconColor="#3668FC" :animation="true" :safeAreaInsetBottom="true" @change="switchTabbar"></tn-tabbar>
	</view>
</template>

<script>
	import Home from './home/home.vue'
	import Comm from './comm/comm.vue'
	import Discovery from './discovery/discovery.vue'
	import News from './news/news.vue'
	import Mine from './mine/mine.vue'

	import {
		toast
	} from '@/utils/dataUtils.js'
	export default {
		components: {
			Home,
			Comm,
			Discovery,
			News,
			Mine
		},
		data() {
			return {
				// 底部tabbar菜单数据
				tabbarList: [{
						title: '首页',
						activeIcon: 'home-in-fill',
						inactiveIcon: 'home-in'
					},
					{
						title: '产品',
						activeIcon: 'iot-fill',
						inactiveIcon: 'iot'
					},
					{
						title: '案例',
						activeIcon: 'reload-planet-fill',
						inactiveIcon: 'rocket',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true
					},
					{
						title: '资讯',
						activeIcon: 'topics-fill',
						inactiveIcon: 'topics',

					},
					{
						title: '我的',
						activeIcon: 'my-circle-fill',
						inactiveIcon: 'my-circle'
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
				// 自定义底栏对应页面的加载情况
				tabberPageLoadFlag: []
			}
		},
		onLoad(options) {
			toast()
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				return index === tabbar_index
			})
			this.switchTabbar(index)
		},
		onShow() {
			if (this.currentIndex == 4) {
				this.$refs.mine.updateInfo && this.$refs.mine.updateInfo()
			}
		},
		methods: {
			// 切换导航
			switchTabbar(index) {
				this._switchTabbarPage(index)
			},


			// 瀑布流导航页面滚动到底部
			tabbarPageScrollLower(e) {
				if (this.currentIndex === 1) {
					this.$refs.comm.isReachBottom && this.$refs.comm.isReachBottom()
				}
				if (this.currentIndex === 2) {
					this.$refs.discovery.isReachBottom && this.$refs.discovery.isReachBottom()
				}
				if (this.currentIndex === 3) {
					this.$refs.news.isReachBottom && this.$refs.news.isReachBottom()
				}
				if (this.currentIndex === 4) {
					this.$refs.mine.updateInfo && this.$refs.mine.updateInfo()
				}
			},

			// 切换导航页面
			_switchTabbarPage(index) {
				wx.vibrateShort();
				const selectPageFlag = this.tabberPageLoadFlag[index]
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
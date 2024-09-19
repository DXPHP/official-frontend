<template>
	<view class="template-index tn-safe-area-inset-bottom">

		<!-- 安卓酷炫顶部自定义导航，为什么要分成安卓和苹果的导航？你试试就知道为什么了，很多骚操作在苹果不生效 -->
		<view v-if="isAndroid" class=""
			style="width: 100%;height: 220rpx;background: linear-gradient(0deg, rgba(255,255,255,0), rgba(0,0,0,0.16));position: fixed;top: 0;z-index: 1;">
			<tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF00">
				<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
					<!-- 图标logo -->
					<view class="custom-nav__back" @click="tn('/homePages/about')">
						<!-- 图片模式-->
						<!-- <view class="logo-pic tn-shadow-blur"
							style="background-image:url('')">
							<view class="logo-image">
							</view>
						</view> -->
						<!-- 如果有图片那就放图片，如果没有，那就删掉上面的放字体icon -->
						<!-- <view class="tn-icon-left"></view> -->
					</view>
					<!-- 搜索框 -->
					<!-- <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center"
						@click="tn('/homePages/search')">
						<view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left"
							style="background-color: rgba(230,230,230,0.3);">
							<view class="custom-nav__search__icon tn-icon-search tn-color-white"></view>
							<view class="custom-nav__search__text tn-padding-left-xs tn-color-white">搜索 </view>
							<view class="tn-color-white" style="width: 100%;">
								<tn-notice-bar :list="searlist" mode="vertical" leftIconName="search"
									:duration="6000"></tn-notice-bar>
							</view>
						</view>
					</view> -->
				</view>
			</tn-nav-bar>
		</view>


		<!-- 苹果简单顶部自定义导航 -->
		<view v-else class="">

			<tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF00">
				<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
					<!-- 图标logo -->
					<!-- <view class="custom-nav__back" @click="tn('/homePages/about')"> -->
					<!-- 图片模式-->
					<!-- <view class="logo-pic tn-shadow-blur"
							style="background-image:url('')">
							<view class="logo-image">
							</view>
						</view> -->
					<!-- 如果有图片那就放图片，如果没有，那就删掉上面的放字体icon -->
					<!-- <view class="tn-icon-left"></view> -->
					<!-- </view> -->
					<!-- 搜索框 -->
					<!-- <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center"
						@click="tn('/homePages/search')">
						<view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left"
							style="background-color: rgba(230,230,230,0.3);">
							
							<view class="tn-color-white" style="width: 100%;">
								<tn-notice-bar :list="searlist" mode="vertical" leftIconName="search"
									:duration="6000"></tn-notice-bar>
							</view>
						</view>
					</view> -->
				</view>
			</tn-nav-bar>
		</view>

		<!-- 轮播banner-->
		<swiper class="card-swiper" @click="tn('')" :circular="true" :autoplay="true" duration="500" interval="8000"
			@change="cardSwiper">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item image-banner">
					<image :src="item.image" mode="aspectFill" v-if="item.image"></image>
				</view>
				<!-- <view class="swiper-item-text">
					<view class="tn-text-bold tn-color-white" style="font-size: 90rpx;">{{item.title}}</view>
					<view class="tn-color-white tn-padding-top" style="font-size: 30rpx;">{{item.name}}</view>
					<view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm">
						{{item.text}}
					</view>
				</view> -->
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item,index) in swiperList" :key="index">
				<view class="spot" :class="cardCur==index?'active':''"></view>
			</block>
		</view>


		<!-- 通知-->
		<view class="tn-bg-white tn-margin-top" style="border-radius: 20rpx;">
			<tn-notice-bar :list="list" mode="vertical" leftIconName="notice"></tn-notice-bar>
		</view>


		<!-- 金刚区 start-->
		<view class="tn-flex tn-padding-top tn-margin-bottom tn-margin-top-xs">
			<view class="tn-flex-1 tn-radius" v-for="(itemMenus,indexMenus) in menusList" @click="tn(itemMenus.path)"
				style="width: 20%;">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
						<!-- <view class="tn-icon-identity-fill tn-three"></view> -->
						<image :src="itemMenus.image" mode="aspectFill" style="width: 100rpx;height: 100rpx;"></image>
					</view>
					<view class="tn-color-gray--dark tn-text-center tn-text-df">
						<text class="tn-text-ellipsis">{{itemMenus.name}}</text>
					</view>
				</view>
			</view>
			<!-- <view class="tn-flex-1 tn-radius" @click="tn('/homePages/base')" style="width: 20%;">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
						<view class="tn-icon-identity-fill tn-three"></view>
					</view>
					<view class="tn-color-gray--dark tn-text-center tn-text-df">
						<text class="tn-text-ellipsis">基本信息</text>
					</view>
				</view>
			</view> -->

			<!-- <view class="tn-flex-1 tn-radius" @click="tn('/homePages/brand')" style="width: 20%;">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
						<view class="tn-icon-plant-fill"></view>
					</view>
					<view class="tn-color-gray--dark tn-text-center tn-text-df">
						<text class="tn-text-ellipsis">品牌介绍</text>
					</view>
				</view>
			</view> -->
			<!-- 	<view class="tn-flex-1 tn-radius" @click="tn('/homePages/cooperate')" style="width: 20%;">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
						<view class="tn-icon-trusty-fill"></view>
					</view>
					<view class="tn-color-gray--dark tn-text-center tn-text-df">
						<text class="tn-text-ellipsis">合作共赢</text>
					</view>
				</view>
			</view> -->
			<!-- <view class="tn-flex-1 tn-radius" @click="tn('/homePages/group')" style="width: 20%;">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
						<view class="tn-icon-flower-fill"></view>
					</view>
					<view class="tn-color-gray--dark tn-text-center tn-text-df">
						<text class="tn-text-ellipsis">话题社区</text>
					</view>
				</view>
			</view> -->
			<!-- <view class="tn-flex-1 tn-radius" @click="tn('/homePages/video')" style="width: 20%;">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white">
						<view class="tn-icon-discover-fill"></view>
					</view>
					<view class="tn-color-gray--dark tn-text-center tn-text-df">
						<text class="tn-text-ellipsis">宣传短片</text>
					</view>
				</view>
			</view> -->
			<!-- <view class="tn-flex-1 tn-radius" @click="tn('')" style="width: 20%;">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purple tn-color-white">
            <view class="tn-icon-menu-circle-fill"></view>
          </view>  
          <view class="tn-color-gray--dark tn-text-center tn-text-df">
            <text class="tn-text-ellipsis">敬请期待</text>
          </view>
        </view>
      </view> -->
		</view>
		<!-- 金刚区 end-->


		<!-- 胶囊banner -->
		<!-- 	<view class="tn-flex tn-flex-wrap tn-padding-xs tn-margin-top" @click="tn('/homePages/member')">
			<view class="" style="width: 100%;">
				<view class="image-piccapsule tn-shadow-blur"
					style="background-image:url('https://cdn.nlark.com/yuque/0/2022/png/280373/1649746862795-assets/web-upload/f8e5a420-53d1-4c8c-b06f-35031672088c.png');">
					<view class="image-capsule">
					</view>
				</view>
			</view>
		</view> -->

		<!-- 标题-->
		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top" @click="switchTab(1)">
			<view class="justify-content-item tn-margin tn-text-bold tn-text-xl blue-title">
				推荐产品
			</view>
			<view class="justify-content-item tn-margin-right tn-text-df tn-color-gray">
				<text class="tn-padding-xs">更多</text>
				<text class="tn-icon-right"></text>
			</view>
		</view>
		<view
			class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin-left tn-margin-right">
			<block v-for="(item, index) in goodsList" :key="index">
				<view
					class="tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between  tn-shadow-blur tn-col-6"
					@click="tn(item.url)">
					<view class="product__item home-shadow" @click="tn('/commPages/product?id='+item.id)">
						<view class="item__image">
							<tn-lazy-load :threshold="6000" height="100%" :image="item.image" :index="item.id"
								imgMode="widthFix" style="border-radius: 10rpx 10rpx; 0 0"></tn-lazy-load>
						</view>
						<view class="item__data tn-margin-left-sm tn-margin-right-sm">
							<view class="item__title-container">
								<text class="item__title tn-color-cat clamp-text-2">{{ item.name }}</text>
							</view>
							<!-- 	<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
								<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
									{{ tagItem }}
								</view>
							</view> -->

							<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-xs">
								<view class="justify-content-item tn-color-red">
									<text class="tn-text-sm">￥</text>
									<text class="tn-text-xl">{{ item.price }}</text>
								</view>
								<view class="justify-content-item tn-color-gray tn-text-center"
									style="padding-top: 5rpx;">
									<text class="tn-icon-like tn-padding-right-xs tn-text-lg"></text>
									<text class="tn-text-df">{{ item.likes }}</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 
					<view class="tn-info__item__bottom">
						<view class='name tn-text-sm tn-color-gray' style="margin-left: -10rpx;">
							<text class="tn-icon-code tn-padding-right-xs" style="opacity: 0;"></text>
						</view>
					</view> -->
				</view>
			</block>
		</view>


		<!-- 标题-->
		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top" @click="switchTab(2)">
			<view class="justify-content-item tn-margin tn-text-bold tn-text-xl blue-title">
				热门案例
			</view>
			<view class="justify-content-item tn-margin-right tn-text-df tn-color-gray">
				<text class="tn-padding-xs">更多</text>
				<text class="tn-icon-right"></text>
			</view>
		</view>

		<!-- 热图推荐-->
		<view class="tn-flex tn-margin-left tn-margin-right tn-margin-top tn-margin-bottom-xl">
			<view class="tn-flex-2" @click="tn('/discoveryPages/case?id='+caseList[0].id)">
				<view class="image-pic tn-margin-right tn-shadow-blur"
					:style="'background-image:url('+caseList[0].image+')'">

					<view class="image-tuniao1">
					</view>
				</view>
			</view>
			<view class="tn-flex-1" v-if="caseList.length>2">
				<view class="image-pic tn-shadow-blur" @click="tn('/discoveryPages/case?id='+caseList[1].id)"
					:style="'background-image:url('+caseList[0].image+')'">
					<view class="image-tuniao2">
					</view>
				</view>

				<view class="image-pic tn-margin-top tn-shadow-blur"
					@click="tn('/discoveryPages/case?id='+caseList[2].id)"
					:style="'background-image:url('+caseList[0].image+')'">
					<view class="image-tuniao2">
					</view>
				</view>
			</view>
		</view>


		<!-- 标题-->
		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top" @click="switchTab(3)">
			<view class="justify-content-item tn-margin tn-text-bold tn-text-xl blue-title">
				企业资讯
			</view>
			<view class="justify-content-item tn-margin-right tn-text-df tn-color-gray">
				<text class="tn-padding-xs">更多</text>
				<text class="tn-icon-right"></text>
			</view>
		</view>

		<block v-for="(item, index) in news" :key="index">
			<view class="article-shadow tn-margin tn-bg-white" @click="tn('/newsPages/article?id='+item.id)">
				<view class="tn-flex">

					<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
						<view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
							<text class="">{{ item.title }}</text>
						</view>
						<view class="tn-padding-top-xs" style="min-height: 90rpx;">
							<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
								{{ item.subtitle }}
							</text>
						</view>
						<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-margin-top-sm">
							<!-- <view v-for="(label_item,label_index) in item.label" :key="label_index"
								class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
								<text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
							</view> -->
							<view class="">

							</view>
							<view class="justify-content-item tn-color-gray tn-text-center" style="padding-top: 5rpx;">
								<text class="tn-icon-eye tn-padding-right-xs tn-text-lg"></text>
								<text class="tn-padding-right tn-text-df">{{ item.view }}</text>
								<text class="tn-icon-like-lack tn-padding-right-xs tn-text-lg"></text>
								<text class="tn-text-df">{{ item.likes }}</text>
							</view>
						</view>
					</view>
					<view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.image + ')'">
						<view class="image-article">
						</view>
					</view>
				</view>
			</view>
		</block>
		<!-- 标题-->
		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top" @click="tn('')">
			<view class="justify-content-item tn-margin tn-text-bold tn-text-xl blue-title">
				企业地址
			</view>
			<view class="justify-content-item tn-margin-right tn-text-df tn-color-gray">
				<!-- <text class="tn-padding-xs">更多</text>
				<text class="tn-icon-right"></text> -->
			</view>
		</view>
		<view class="tn-shadow-blur tn-margin">
			<map class="map tn-shadow-blur" :latitude="company.lat" :longitude="company.lng" :markers="covers"
				@click="openLocation" :enable-scroll="false" :enable-zoom="false">
			</map>
			<view class="shop-shadow tn-margin tn-color-black tn-bg-white map-footerabsalute" @click="openLocation">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xs tn-padding-bottom-xs">
					<view class="justify-content-item">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left">
							<view class="tn-padding tn-color-black">
								<view class="tn-padding-right-sm tn-text-lg tn-text-bold">
									{{company.name}}
								</view>
								<view
									class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-text-xs tn-color-gray">
									<text class="">{{company.address}}</text>
									<!-- 	<text class="">距离你12.8km</text>
									<text class="tn-padding-left-xs">驾车24分钟</text>
									<text class="tn-padding-left-xs">公交地铁2小时</text> -->
								</view>
							</view>
						</view>
					</view>
					<view class="tn-flex justify-content-item tn-flex-row-center tn-padding-right-xs">
						<view class="tn-bg-gray--light tn-padding-xs tn-margin-sm tn-color-black tn-round">
							<text class="tn-icon-location-fill" style="font-size: 60rpx;"></text>
						</view>
					</view>
				</view>
			</view>

		</view>

		<!-- 标题-->
		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top" @click="tn('')">
			<view class="justify-content-item tn-margin tn-text-bold tn-text-xl blue-title">
				合作客户
			</view>
			<view class="justify-content-item tn-margin-right tn-text-df tn-color-gray">
				<!-- <text class="tn-padding-xs">更多</text>
				<text class="tn-icon-right"></text> -->
			</view>
		</view>
		<view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-margin-left tn-margin-right">
			<block v-for="(item, index) in cooperationList" :key="index">
				<view
					class="tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between tn-color-white tn-shadow-blur tn-col-3 tn-margin-top-sm"
					@click="tn()">
					<view class="partner__item home-shadow">
						<view class="item__image">
							<tn-lazy-load :threshold="6000" height="144" :image="item.image" :index="item.id"
								imgMode="aspectFill" style="border-radius: 10rpx;"></tn-lazy-load>
						</view>
					</view>
				</view>
			</block>
		</view>


		<!-- 标题-->
		<!-- 	<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top" @click="tn('')">
			<view class="justify-content-item tn-margin tn-text-bold tn-text-xl blue-title">
				关于我们
			</view>
			<view class="justify-content-item tn-margin-right tn-text-df tn-color-gray">
				<text class="tn-padding-xs">更多</text>
				<text class="tn-icon-right"></text>
			</view>
		</view> -->




		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import {
		index
	} from '@/api/home.js'
	export default {
		name: 'Home',
		data() {
			return {
				cardCur: 0,
				isAndroid: true,
				cooperationList: [],
				caseList: [],
				menusList: [],
				swiperList: [],

				list: [

				],

				searlist: [
					'搜索 登录注册模板',
					'搜索 新建表单模板',
					'搜索 对话聊天模板',
					'搜索 个人中心模板'
				],

				goodsList: [],
				news: [],
				company: {
					address: "广东省广州市海珠区赤岗街道23号",
					lat: "23.10647",
					lng: "113.32446",
					name: "小匠国际装修有限公司"
				},
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',

				covers: [{
					latitude: 23.10647,
					longitude: 113.32446,
					iconPath: 'https://cdn.nlark.com/yuque/0/2023/png/280373/1675936271542-assets/web-upload/8f3d0a29-cad4-4e4d-995b-0e08467dff02.png'
				}]

			}
		},
		created() {
			const systemInfo = uni.getSystemInfoSync()
			if (systemInfo.system.toLocaleLowerCase().includes('ios')) {
				this.isAndroid = false
			} else {
				this.isAndroid = true
			}
			this.getData()

		},
		methods: {
			async getData() {
				let res = await index()
				this.swiperList = res.data.banner
				this.menusList = res.data.menus
				this.goodsList = res.data.goods
				this.caseList = res.data.cases
				this.news = res.data.news
				this.cooperationList = res.data.cooperation
				this.list = res.data.notice.map(res1 => res1.title)
				this.company = res.data.company
				this.covers[0].latitude = res.data.company.lat
				this.covers[0].longitude = res.data.company.lng
			},
			openLocation() {
				wx.vibrateShort();
				uni.openLocation({
					longitude: Number(this.company.lng),
					latitude: Number(this.company.lat),
					name: this.company.name,
					address: this.company.address
				})
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			switchTab(e) {
				this.$emit('change', e)
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});

			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 35rpx;
			color: #1D2541;
			background-color: #F3F2F7;
			border-radius: 10rpx;
			font-size: 22rpx;
			padding: 5rpx 15rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.map {
		width: calc(100vw - 60rpx);
		// width: 100vw;
		height: 30vh;
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		// margin: 30rpx 30rpx 100rpx 30rpx;
	}

	/* 底部固定按钮*/
	.map-footerabsalute {
		position: absolute;
		width: calc(100vw - 120rpx);
		left: 0;
		right: 0;
		margin: auto;
		bottom: calc(100rpx + env(safe-area-inset-bottom));
		z-index: 1024;
	}

	/* 阴影 start*/
	.shop-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.template-index {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 阴影*/
	.home-shadow {
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				// color: #AAAAAA;
			}
		}
	}

	.logo-image {
		width: 65rpx;
		height: 65rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */


	/* 轮播视觉差 start */
	.card-swiper {
		height: 500rpx !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		// padding: 0rpx 30rpx 90rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
		will-change: transform;
	}

	.card-swiper swiper-item .swiper-item-text {
		margin-top: -300rpx;
		text-align: center;
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 10rpx;
		transform: translate(100rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -300rpx;
		width: 100%;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.4;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -60rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 0.6;
		width: 30rpx;
		background-color: #FFFFFF;
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		width: 220rpx;
		height: 120rpx;
		position: relative;
	}

	.image-pic {
		// border: 1rpx solid #F8F7F8;
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.blue-title::before {
		content: "";
		position: absolute;
		display: block;
		width: 80rpx;
		height: 26rpx;
		background: #269EFC;
		margin-top: 24rpx;
		margin-left: 75rpx;
		opacity: 0.3;
		z-index: -1;
		border-radius: 4rpx;
	}


	.icon12 {
		&__item {
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg2.png);


				}
			}
		}
	}


	/* 热门图片 start*/
	.image-tuniao1 {
		padding: 164rpx 0rpx 162rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao2 {
		padding: 74rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao3 {
		padding: 90rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	/* 胶囊banner*/
	.image-capsule {
		padding: 100rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-piccapsule {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20rpx 20rpx 0 0;
	}

	/* 工作区展示 start */
	.tn-info {

		&__container {
			margin-top: 10rpx;
			margin-bottom: 50rpx;
		}

		&__item {
			width: 47.7%;
			margin: 15rpx 0rpx 30rpx 0rpx;
			padding: 40rpx 30rpx;
			border-radius: 10rpx;


			position: relative;
			z-index: 1;

			&::after {
				content: " ";
				position: absolute;
				z-index: -1;
				width: 100%;
				height: 100%;
				left: 0;
				bottom: 0;
				border-radius: inherit;
				opacity: 1;
				transform: scale(1, 1);
				background-size: 100% 100%;
				background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/2.png);
			}

			&__left {

				&--icon {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					font-size: 40rpx;
					margin-right: 20rpx;
					position: relative;
					z-index: 1;

					&::after {
						content: " ";
						position: absolute;
						z-index: -1;
						width: 100%;
						height: 100%;
						left: 0;
						bottom: 0;
						border-radius: inherit;
						opacity: 1;
						transform: scale(1, 1);
						background-size: 100% 100%;
						background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png);
					}
				}

				&__content {
					font-size: 25rpx;

					&--data {
						color: rgba(255, 255, 255, 0.5);
						margin-top: 5rpx;
						// font-weight: bold;
					}
				}
			}

			&__right {
				&--icon {
					position: absolute;
					right: 0rpx;
					top: 50rpx;
					font-size: 100rpx;
					width: 108rpx;
					height: 108rpx;
					text-align: center;
					line-height: 60rpx;
					opacity: 0.15;
				}
			}

			&__bottom {
				box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.12);
				border-radius: 0 0 10rpx 10rpx;
				position: absolute;
				width: 85%;
				line-height: 15rpx;
				left: 50%;
				bottom: -15rpx;
				transform: translateX(-50%);
				z-index: -1;
				text-align: center;
			}
		}
	}

	/* 工作区展示 end */

	/* 产品*/
	.product__item {
		background-color: #FFFFFF;
		width: 100%;
		overflow: hidden;
		margin: 0 10rpx;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

		.item {

			/* 图片 start */
			&__image {
				width: 100%;
				height: 300rpx;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
				border-radius: 10rpx 10rpx 0 0;
				overflow: hidden;
			}

			/* 图片 end */

			/* 内容 start */
			&__data {
				padding: 14rpx 0rpx;
			}

			/* 标题 start */
			&__title-container {
				text-align: justify;
				line-height: 38rpx;
				vertical-align: middle;
			}

			&__title {
				font-size: 28rpx;
			}

			/* 标题 end */

			/* 标签 start */
			&__tags-container {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: flex-start;
			}

			&__tag {
				margin: 10rpx;
				color: #7C8191;
				background-color: #F3F2F7;
				padding: 4rpx 14rpx 6rpx;
				border-radius: 10rpx;
				font-size: 20rpx;

				&:first-child {
					margin-left: 0rpx !important;
				}
			}

			/* 标签 end */

			/* 价格 start */
			&__price-container {
				font-size: 24rpx;
				color: #E83A30;
			}

			&__price {
				&--unit {}

				&--integer {
					font-size: 38rpx;
				}

				&--decimal {}
			}

			/* 价格 end */
			/* 内容 end */
		}
	}

	.partner__item {
		background-color: #FFFFFF;
		width: 100%;
		overflow: hidden;
		margin: 0 10rpx;
		// box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

		.item {

			/* 图片 start */
			&__image {
				width: 100%;
				height: 144rpx;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
				border-radius: 10rpx;
				overflow: hidden;
			}

			/* 图片 end */
		}
	}
</style>
<template>
	<view class="template-blogger tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack :backgroundColor="isFixed?'#ffffff !important;':''">
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<!-- 立体头像-->
		<view class='cube'
			:style="'background-image: url(https://resource.tuniaokj.com/images/blogger/bg_image_1.jpg);'">
			<view class="cube__container">
				<view class="cube__container__body">
					<view class="cube__container__body__item cube__container__body__item--front"
						:style="{backgroundImage: `url(${userInfo.avatar[0]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--back"
						:style="{backgroundImage: `url(${userInfo.avatar[0]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--right"
						:style="{backgroundImage: `url(${userInfo.avatar[1]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--left"
						:style="{backgroundImage: `url(${userInfo.avatar[1]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--top"
						:style="{backgroundImage: `url(${userInfo.avatar[2]})`}"></view>
					<view class="cube__container__body__item cube__container__body__item--bottom"
						:style="{backgroundImage: `url(${userInfo.avatar[2]})`}"></view>
				</view>
			</view>


			<view class='tn-text-center tn-margin-top-lg'>
				<view class="tn-padding tn-text-bold tn-text-lg">{{ userInfo.username }}</view>
				<view class="tn-padding-bottom-xl tn-text-lg">{{ userInfo.desc }}</view>
			</view>
		</view>
		<!-- 边距间隔 -->
		<view class="tn-strip-bottom" :style="isFixed?'background-color: #ffffff;':''"></view>
		<view class="">
			<tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height" @fixed="fixed" @unfixed="unfixed">
				<view class="" :style="isFixed?'background-color: #ffffff;':''">
					<tn-tabs :list="fixedList" :current="current" :isScroll="false" activeColor="#000" bold="true"
						:fontSize="32" :badgeOffset="[20, 50]" @change="tabChange"></tn-tabs>
				</view>

			</tn-sticky>
		</view>



		<view class="" v-if="current==0">
			<view class="" style="padding: 30rpx 20rpx;">
				<tn-waterfall ref="waterfall" v-model="list" @finish="handleWaterFallFinish">
					<template v-slot:left="{ leftList }">
						<view v-for="(item, index) in leftList" :key="item.id" class="product__item" @click="">
							<view class="item__image">
								<tn-lazy-load :threshold="6000" height="100%" :image="item.mainImage" :index="item.id"
									imgMode="widthFix"></tn-lazy-load>
							</view>
							<!-- <text class="item__title tn-color-black">{{ item.title }}</text> -->
								<view class="item__data">
								<view class="item__title-container">
									<text class="item__title tn-color-black">{{ item.title }}</text>
								</view>
								<!-- <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
									<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
										{{ tagItem }}</view>
								</view> -->
							</view>
						</view>
					</template>
					<template v-slot:right="{ rightList }">
						<view v-for="(item, index) in rightList" :key="item.id" class="product__item"
							@click="tn('/pageA/photo/photo')">
							<view class="item__image">
								<tn-lazy-load :threshold="6000" height="100%" :image="item.mainImage" :index="item.id"
									imgMode="widthFix"></tn-lazy-load>
							</view>
							<!-- <text class="item__title tn-color-black">{{ item.title }}</text> -->
							<view class="item__data">
								<view class="item__title-container">
									<text class="item__title tn-color-black">{{ item.title }}</text>
								</view>
							<!-- 	<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
									<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
										{{ tagItem }}</view>
								</view> -->
							</view>
						</view>
					</template>
				</tn-waterfall>
			</view>
			<tn-load-more :status="loadStatus"></tn-load-more>
		</view>
		<view class="" v-if="current==1">
			<!-- 发展历程 start-->
			<view class="tn-flex tn-flex-wrap tn-padding-bottom">
				<view class="king-list tn-margin-top-sm">

					<view class="king-icon">
						<text class='tn-icon-trophy tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
						<text class='tn-text-xl tn-margin-left tn-color-gray'>2022-03-12</text>
					</view>

					<view class='king-item  tn-icon-circle-fill tn-color-red'>
						<view class="article-shadow tn-bg-white" @click="tn('')">
							<view class="tn-flex">
								<view class="image-pic tn-margin-left-sm tn-margin-top-sm tn-margin-bottom-sm img-solid"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1663571007436-assets/web-upload/e3fdeb91-d8d1-4187-8d91-593559543af3.jpeg');width: 160rpx;height: 160rpx;background-size: cover;">
									<view class="image-article">
									</view>
								</view>
								<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
									<view class="" style="min-height: 105rpx;">
										<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
											推出图鸟UI，嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
										</text>

									</view>
									<view class="tn-flex tn-flex-row-between tn-flex-col-between">
										<view
											class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
											<text class="tn-tag-content__item--prefix">#</text> 开源项目
										</view>
										<view
											class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
											style="padding-top: 5rpx;">
											<!-- <text class="tn-icon-footprint tn-padding-right-xs tn-text-lg"></text>
			               <text class="tn-padding-right tn-text-df">232</text> -->
											<text class="tn-icon-rocket tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">129</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>

					<view class='king-item  tn-icon-circle-fill tn-color-red'>
						<view class="article-shadow tn-bg-white" @click="tn('')">
							<view class="tn-flex">
								<view class="image-pic tn-margin-left-sm tn-margin-top-sm tn-margin-bottom-sm img-solid"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1663571007436-assets/web-upload/e3fdeb91-d8d1-4187-8d91-593559543af3.jpeg');width: 160rpx;height: 160rpx;background-size: cover;">
									<view class="image-article">
									</view>
								</view>
								<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
									<view class="" style="min-height: 105rpx;">
										<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
											发展历程发展历程发展历程发展历程
										</text>

									</view>
									<view class="tn-flex tn-flex-row-between tn-flex-col-between">
										<view
											class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
											<text class="tn-tag-content__item--prefix">#</text> 随便聊聊
										</view>
										<view
											class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
											style="padding-top: 5rpx;">
											<!-- <text class="tn-icon-footprint tn-padding-right-xs tn-text-lg"></text>
			               <text class="tn-padding-right tn-text-df">232</text> -->
											<text class="tn-icon-rocket tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">129</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>



					<view class="king-icon">
						<text class='tn-icon-trophy tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
						<text class='tn-text-xl tn-margin-left tn-color-gray'>2019-12-12</text>
					</view>

					<view class='king-item  tn-icon-circle-fill tn-color-red'>
						<view class="article-shadow tn-bg-white" @click="tn('')">
							<view class="tn-flex">
								<view class="image-pic tn-margin-left-sm tn-margin-top-sm tn-margin-bottom-sm img-solid"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1663571007436-assets/web-upload/e3fdeb91-d8d1-4187-8d91-593559543af3.jpeg');width: 160rpx;height: 160rpx;background-size: cover;">
									<view class="image-article">
									</view>
								</view>
								<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
									<view class="" style="min-height: 105rpx;">
										<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
											注册图鸟科技，蜗居小小工作室
										</text>

									</view>
									<view class="tn-flex tn-flex-row-between tn-flex-col-between">
										<view
											class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
											<text class="tn-tag-content__item--prefix">#</text> 图鸟科技
										</view>
										<view
											class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
											style="padding-top: 5rpx;">
											<!-- <text class="tn-icon-footprint tn-padding-right-xs tn-text-lg"></text>
			               <text class="tn-padding-right tn-text-df">232</text> -->
											<text class="tn-icon-rocket tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">129</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>

					<view class='king-item  tn-icon-circle-fill tn-color-red'>
						<view class="article-shadow tn-bg-white" @click="tn('')">
							<view class="tn-flex">
								<view class="image-pic tn-margin-left-sm tn-margin-top-sm tn-margin-bottom-sm img-solid"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1663571007436-assets/web-upload/e3fdeb91-d8d1-4187-8d91-593559543af3.jpeg');width: 160rpx;height: 160rpx;background-size: cover;">
									<view class="image-article">
									</view>
								</view>
								<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
									<view class="" style="min-height: 105rpx;">
										<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
											发展历程发展历程发展历程发展历程
										</text>

									</view>
									<view class="tn-flex tn-flex-row-between tn-flex-col-between">
										<view
											class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
											<text class="tn-tag-content__item--prefix">#</text> 随便聊聊
										</view>
										<view
											class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
											style="padding-top: 5rpx;">
											<!-- <text class="tn-icon-footprint tn-padding-right-xs tn-text-lg"></text>
			               <text class="tn-padding-right tn-text-df">232</text> -->
											<text class="tn-icon-rocket tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">129</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>


					<view class="king-icon">
						<text class='tn-icon-trophy tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
						<text class='tn-text-xl tn-margin-left tn-color-gray'>2018-06-19</text>
					</view>

					<view class='king-item  tn-icon-circle-fill tn-color-red'>
						<view class="article-shadow tn-bg-white" @click="tn('')">
							<view class="tn-flex">
								<view class="image-pic tn-margin-left-sm tn-margin-top-sm tn-margin-bottom-sm img-solid"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1663571007436-assets/web-upload/e3fdeb91-d8d1-4187-8d91-593559543af3.jpeg');width: 160rpx;height: 160rpx;background-size: cover;">
									<view class="image-article">
									</view>
								</view>
								<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
									<view class="" style="min-height: 105rpx;">
										<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
											毕业嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
										</text>

									</view>
									<view class="tn-flex tn-flex-row-between tn-flex-col-between">
										<view
											class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
											<text class="tn-tag-content__item--prefix">#</text> 毕业季
										</view>
										<view
											class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
											style="padding-top: 5rpx;">
											<!-- <text class="tn-icon-footprint tn-padding-right-xs tn-text-lg"></text>
			               <text class="tn-padding-right tn-text-df">232</text> -->
											<text class="tn-icon-rocket tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">232</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>


					<view class="king-icon">
						<text
							class='tn-icon-footprint tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
						<text class='tn-text-xl tn-margin-left tn-color-gray'>2018-01-11</text>
					</view>

					<view class='king-item  tn-icon-circle-fill tn-color-red'>
						<view class="article-shadow tn-bg-white" @click="tn('')">
							<view class="tn-flex">
								<view class="image-pic tn-margin-left-sm tn-margin-top-sm tn-margin-bottom-sm img-solid"
									style="background-image:url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629788206008-assets/web-upload/b82bc25b-c18f-4cd8-80ef-a1e9694d099a.jpeg');width: 160rpx;height: 160rpx;background-size: cover;">
									<view class="image-article">
									</view>
								</view>
								<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
									<view class="" style="min-height: 105rpx;">
										<text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
											注册图鸟工作室，在大学宿舍内，迈出了图鸟的第一步
										</text>

									</view>
									<view class="tn-flex tn-flex-row-between tn-flex-col-between">
										<view
											class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
											<text class="tn-tag-content__item--prefix">#</text> 工作室
										</view>
										<view
											class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
											style="padding-top: 5rpx;">
											<!-- <text class="tn-icon-footprint tn-padding-right-xs tn-text-lg"></text>
			               <text class="tn-padding-right tn-text-df">232</text> -->
											<text class="tn-icon-rocket tn-padding-right-xs tn-text-lg"></text>
											<text class="tn-text-df">129</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!--发展历程 end-->
		</view>
		<view class="" v-if="current==2">
			<view class="tn-text-center">
				<!-- 比例图文 start-->
				<view class="tn-flex tn-flex-wrap tn-padding-bottom">
					<block v-for="(item, index) in content" :key="index">
						<view class="" style="width: 50%;" @click="tn('/pageA/product/product')">
							<view class="tn-margin-xs img-shadow" style="border-radius: 10rpx;">
								<view class="" style="position: absolute;padding: 20rpx 15rpx 15rpx 15rpx;">
									<text class="tn-icon-honor-fill tn-text-xl"></text>
								</view>
								<view class="tn-padding-sm" style="position: absolute;">
									<text class="tn-padding-left-lg tn-padding-top-sm tn-text-sm">{{ item.date }}</text>
								</view>
								<view class="" style="padding: 15rpx;">
									<view class="image-picbook" :style="'background-image:url(' + item.mainImage + ')'">
										<view class="image-book">
										</view>
									</view>
								</view>

								<view class="" style="padding: 0 15rpx 15rpx 15rpx;">
									<view class="">
										<view class=" ">
											<view class="tn-text-center">
												<text
													class="tn-color-black tn-text-sm tn-text-bold">{{ item.userName }}</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</block>
				</view>
				<!-- 比例图文 end-->
			</view>


		</view>
		<view class="" v-if="current==3">
			<view class="tn-text-center">
				<!-- 比例图文 start-->
				<view class="tn-flex tn-flex-wrap tn-padding-bottom">
					<block v-for="(item, index) in content" :key="index">
						<view class="" style="width: 50%;" @click="tn('/pageA/product/product')">
							<view class="tn-margin-xs img-shadow" style="border-radius: 10rpx;">
								<view class="" style="position: absolute;padding: 20rpx 15rpx 15rpx 15rpx;">
									<text class="tn-icon-honor-fill tn-text-xl"></text>
								</view>
								<view class="tn-padding-sm" style="position: absolute;">
									<text class="tn-padding-left-lg tn-padding-top-sm tn-text-sm">{{ item.date }}</text>
								</view>
								<view class="" style="padding: 15rpx;">
									<view class="image-picbook" :style="'background-image:url(' + item.mainImage + ')'">
										<view class="image-book">
										</view>
									</view>
								</view>

								<view class="" style="padding: 0 15rpx 15rpx 15rpx;">
									<view class="">
										<view class=" ">
											<view class="tn-text-center">
												<text
													class="tn-color-black tn-text-sm tn-text-bold">{{ item.userName }}</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</block>
				</view>
				<!-- 比例图文 end-->
			</view>

		</view>

		<!-- <view class="" style="height: 100rpx;background-color: antiquewhite;width: 100%;" v-for="(item,index) in 20">
			
		</view> -->


	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateBase',
		mixins: [template_page_mixin],
		data() {
			return {
				isFixed: false,
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				userInfo: {
					avatar: [
						'https://resource.tuniaokj.com/images/blogger/blogger_avatar_1.jpeg',
						'https://resource.tuniaokj.com/images/blogger/blogger_avatar_2.jpeg',
						'https://resource.tuniaokj.com/images/blogger/blogger_avatar_3.jpeg',
					],
					username: '图鸟北北',
					desc: '你是不是傻，菜的一撇的北北'
				},
				current: 0,
				fixedList: [{
						name: '相册'
					},
					{
						name: '历程'
					},
					{
						name: '荣誉',
						count: '99+'
					},
					{
						name: '资质'
					}
				],
				content: [{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699051-assets/web-upload/442e94f1-d8e5-44ae-bfe5-b1a227bde9af.jpeg',
						date: '2023年',
						userName: '高新技术企业',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676018969127-assets/web-upload/882c2c08-bea1-41d1-a04c-b32ce2a84e16.jpeg',
						viewUserCount: 87
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699076-assets/web-upload/3ecd9644-c948-41a1-8d1c-e1bab0ff08dd.jpeg',
						date: '2022年',
						userName: 'AAA守信用证书',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676019388981-assets/web-upload/8b357eb0-9e9e-4935-af8e-381bfd797230.jpeg',
						viewUserCount: 63
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699098-assets/web-upload/e8b29292-72fc-4c1e-9d7c-fd9dba31cb62.jpeg',
						date: '2022年',
						userName: '诚信企业家',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676019771441-assets/web-upload/06be7d13-b592-448d-9621-35636994dcf0.jpeg',
						viewUserCount: 208
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699075-assets/web-upload/aaee3258-46b7-43ae-aaf2-02f3dff5f960.jpeg',
						date: '2021年',
						userName: 'AAA级信用企业',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676019771380-assets/web-upload/58ac8930-4fe0-499a-a4d9-97a9d2e1c939.jpeg',
						viewUserCount: 16
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015047529-assets/web-upload/af73d987-7e47-4ab9-8cc7-9ced5611552c.jpeg',
						date: '2021年',
						userName: 'AAA级资信企业',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676020020678-assets/web-upload/23fd85b7-cce6-4251-a7fd-33de3b338099.jpeg',
						viewUserCount: 902
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015223286-assets/web-upload/a389d645-024b-4804-9515-cf1cc6e8b5c0.jpeg',
						date: '2021年',
						userName: 'AAA级重合同守信用企业',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676020020699-assets/web-upload/8200b86e-33dd-42ad-b5cf-84c53c58ebed.jpeg',
						viewUserCount: 88
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664180031265-assets/web-upload/e85aa00d-d9f9-45a5-8f46-9927fad5c348.jpeg',
						date: '2021年',
						userName: 'AAA级诚信供应商',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676020663234-assets/web-upload/2eb50c08-599b-4c5b-9613-afa0ea719bdd.jpeg',
						viewUserCount: 106
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699017-assets/web-upload/d9b5d713-fa5e-4213-8a25-bbe8086a6008.jpeg',
						date: '2021年',
						userName: '广大华软校友企业',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1676020663225-assets/web-upload/b3ac5eb2-c979-428f-9cc8-6c7397cab00f.jpeg',
						viewUserCount: 66
					},
					{
						userAvatar: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699069-assets/web-upload/20b02200-47de-4a03-8dd0-6fe8aa575e36.jpeg',
						date: '2021年',
						userName: 'AAA级诚信经营企业',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1675956894244-assets/web-upload/73949d55-14a3-4a53-bd3f-59c983005d6e.jpeg',
						viewUserCount: 129
					}
				],
				/* 瀑布流*/
				loadStatus: 'loadmore',
				list: [],
				data: [{
						title: '酷炫外卖首页',
						userName: '试试就逝世',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1671437658295-assets/web-upload/05620a1f-452e-4a14-9d30-f6c66ee4be1c.jpeg',
						userImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699098-assets/web-upload/e8b29292-72fc-4c1e-9d7c-fd9dba31cb62.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: true, // 是否为新品
						tags: ['首页', '美食'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 338
						},
					},
					{
						title: '内容发布页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683185481047-assets/web-upload/1659a1f2-d66c-4eb9-9545-1419ee65f158.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: ['表单', '新建'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 289
						},
					},
					{
						title: '商品详情，带购物车动画',
						userName: '青梅煮马',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116287-assets/web-upload/62bcb362-2f09-403e-8381-286e9f74487c.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: true, // 是否为新品
						tags: ['男生头像', '情侣头像'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 381
						},
					},
					{
						title: '简约个人中心页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116230-assets/web-upload/a67a2574-41a1-447b-8b4c-cdaf69a14a53.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: true, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 526
						},
					},
					{
						title: '消息通知页面',
						userName: '坟头草三米高',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116251-assets/web-upload/808c7cd2-2aa5-49ac-a2d4-5ba8b6e4475c.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 372
						},
					},
					{
						title: '弹窗领红包',
						userName: '不许凶我',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664179989916-assets/web-upload/eda197eb-42ce-44b1-9b14-fce3481db603.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: ['弹窗', '模态窗'],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 694
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015047023-assets/web-upload/147b0b7f-8253-4b92-bc1d-e28db7f54096.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116291-assets/web-upload/c4c0d31c-88ee-42c7-99ba-139ef206aaed.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116288-assets/web-upload/fc1aa566-9be3-4185-be44-1d36cf84c1f9.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116293-assets/web-upload/15169708-1cc1-4699-89ad-5e675351698f.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116322-assets/web-upload/e8c4a23d-a981-4d07-9711-d4aee997438a.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116292-assets/web-upload/6ade2579-cbd2-4755-8552-02e8d9e9056e.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116283-assets/web-upload/ffb5ec95-a1f9-40ba-954b-790723fa860f.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116300-assets/web-upload/b46d51a8-aaa9-4600-9394-818216e7dc8c.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116302-assets/web-upload/18c27289-a7f1-4870-8d7d-77b72b280db9.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116276-assets/web-upload/98845528-391c-43cf-843f-cef54e8daee5.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116297-assets/web-upload/13e24266-297c-4574-b726-5b252fd179b4.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116254-assets/web-upload/584529de-6ac8-4c7c-8187-821217a5846e.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '系统设置',
						userName: 'seventeen',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116243-assets/web-upload/71243e8f-7c98-4a1d-adc1-e603e1029303.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 2, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 508
						},
					},
					{
						title: '金融理财首页',
						userName: '你的名字',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116261-assets/web-upload/4fd332a1-171f-4b54-9423-41b08513b8ab.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 923
						},
					},
					{
						title: '图片视频编辑上传',
						userName: '图鸟东东',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116279-assets/web-upload/f9c0ca30-93d7-4b7c-86fb-ff899d7cfd26.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 989
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116283-assets/web-upload/00db3659-b29f-4964-8d32-13f3789ccd5a.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					},
					{
						title: '路线导航',
						userName: '此处凶姐承包',
						mainImage: 'https://cdn.nlark.com/yuque/0/2023/jpeg/280373/1683551116254-assets/web-upload/96b7cdd7-cbf6-44fa-bf1a-326f35262f0c.jpeg',
						userImage: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
						storeType: 1, // 1 自营 2 第三方店铺
						newProduct: false, // 是否为新品
						tags: [],
						viewUser: {
							latestUserAvatar: [{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 129
						},
					}
				],
			}
		},
		computed: {

		},
		onLoad() {
			this.getRandomData()
		},
		onReady() {

		},
		onShow() {

		},
		onHide() {

		},
		methods: {
			fixed(e) {
				this.isFixed = true
			},
			unfixed(n) {
				this.isFixed = false
			},
			/* 瀑布流*/
			// 获取随机数据
			getRandomData() {
				console.log(13);
				this.loadStatus = 'loading'
				for (let i = 0; i < 10; i++) {
					let index = this.$tn.number.randomInt(0, this.data.length - 1)
					let item = JSON.parse(JSON.stringify(this.data[index]))
					item.id = this.$tn.uuid()
					this.list.push(item)
				}
			},
			// 瀑布流加载完毕事件
			handleWaterFallFinish() {
				this.loadStatus = 'loadmore'
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 页面阴影 start*/
	.img-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 图文内容 start*/
	.image-book {
		padding: 155rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-picbook {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 0;
		clip-path: polygon(160rpx 0, 100% 0, 100% 100%, 0 100%, 0 60rpx, 145rpx 50rpx);
	}

	/* 用户头像 start */
	.logo-image {
		width: 40rpx;
		height: 40rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 1rpx solid rgba(255, 255, 255, 1);
		// box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 文章内容 end*/
	.template-blogger {}

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

	$cube-size: 120rpx;
	$cube-split: 60rpx;

	/* 立体头像 start*/

	.cube {
		background: #fff;
		background-repeat: no-repeat;
		background-size: cover;
		height: 550rpx;
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		font-weight: 300;

		&__container {
			margin-top: 180rpx;
			position: relative;
			width: $cube-size;
			height: $cube-size;
			-webkit-perspective: 500px;
			perspective: 500px; //透视太大会超过屏幕就不好了吖

			&:before {
				content: '';
				width: $cube-size;
				height: $cube-size;
				position: absolute;
				// top: calc(50% - ($cube-split - 30px));
				// left: calc(50% - $cube-split);
				background-color: #3c6496;
				filter: blur(60px);
				opacity: .8;
			}

			&__body {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-style: preserve-3d;
				transform: translateZ(-75px);
				animation: cubeFrame 35s cubic-bezier(0.36, -0.03, 0.46, 0.95) infinite alternate;
				will-change: transform;

				&__item {
					position: absolute;
					display: block;
					display: flex;
					align-items: center;
					justify-content: center;
					width: $cube-size;
					height: $cube-size;
					font-size: 30px;
					background-repeat: no-repeat;
					background-size: cover;

					&--front {
						transform: rotateY(0deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--back {
						transform: rotateX(180deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--right {
						transform: rotateY(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--left {
						transform: rotateY(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--top {
						transform: rotateX(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--bottom {
						transform: rotateX(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}
				}
			}
		}
	}

	@keyframes cubeFrame {
		10% {
			transform: translateZ(-75px) rotateX(40deg) rotateY(60deg);
		}

		15% {
			transform: translateZ(-75px) rotateX(80deg) rotateY(20deg);
		}

		20% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-70deg);
		}

		30% {
			transform: translateZ(-75px) rotateX(90deg) rotateY(180deg);
		}

		40% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-140deg);
		}

		45% {
			transform: translateZ(-75px) rotateX(-100deg) rotateY(20deg);
		}

		55% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-35deg);
		}

		60% {
			transform: translateZ(-75px) rotateX(180deg) rotateY(360deg);
		}

		70% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-360deg);
		}

		80% {
			transform: translateZ(-75px) rotateX(45deg) rotateY(-70deg);
		}

		90% {
			transform: translateZ(-75px) rotateX(-45deg) rotateY(70deg);
		}

		100% {
			transform: translateZ(-75px) rotateX(-360deg) rotateY(360deg);
		}
	}

	/* 立体头像 end*/

	/* 信息提示 start */
	.blogger-tips-data {
		background-color: #F8F7F3;

		&__wrap {
			border-radius: 60rpx 60rpx 0 0;
		}

		&__message {
			padding-top: 60rpx;

			&__container {
				padding: 5rpx;
				border-radius: 100rpx;
			}

			&__avatar {
				margin: 6rpx 0 0 6rpx;
			}
		}

		&__info {
			padding: 40rpx 0 0 0;
		}
	}

	/* 信息提示 end */

	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__desc {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;
			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */

	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}


	// -----------------------

	/* 简历内容 */
	.king-list {
		display: block;
		// background-color: #ffffff;
	}

	.king-list .king-icon {
		width: 100%;
		text-align: left;
		padding: 20rpx 0 20rpx 37rpx;
		font-size: 26rpx;
		color: #888;
		display: block;
	}

	.king-list>.king-item {
		padding: 30rpx 30rpx 30rpx 120rpx;
		position: relative;
		display: block;
		z-index: 0;
	}

	.king-list>.king-item::after {
		content: "";
		display: block;
		position: absolute;
		width: 1rpx;
		background-color: #E6E6E6;
		left: 60rpx;
		height: 100%;
		top: 0;
		z-index: 8;
	}

	.king-list>.king-item::before {
		display: block;
		position: absolute;
		top: 36rpx;
		z-index: 9;
		background-color: #ffffff;
		width: 50rpx;
		height: 50rpx;
		text-align: center;
		border: none;
		line-height: 50rpx;
		left: 36rpx;
	}


	/* 名片微调 */
	.img-solid {
		border: 1rpx solid #eee;
	}

	.share-img {
		position: fixed;
		/* padding: 10rpx; */
		width: 100rpx;
		height: 100rpx;
		/* top: 680rpx; */
		bottom: 200rpx;
		right: 20rpx;
		z-index: 1024;
		opacity: 0.8;
		box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
		border: none;
		border: 6rpx solid rgba(255, 255, 255, 0);
	}

	.resume {
		display: flex;
		justify-content: space-between;
		padding-top: 10rpx;
		border-radius: 6rpx;
		color: #666;
		line-height: 1.6;
	}

	.resume+.resume {
		margin-top: 20rpx;
	}

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

	/* 标签内容 end*/



	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 160rpx;
		height: 160rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}


	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		padding-right: 10rpx;
		display: inline-block;
		line-height: 35rpx;
		padding: 5rpx 25rpx;
	}



	/* 瀑布流*/
	.product__item {
		background-color: #FFFFFF;
		overflow: hidden;
		margin: 0 10rpx;
		margin-bottom: 20rpx;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

		.item {

			/* 图片 start */
			&__image {
				width: 100%;
				height: auto;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
				border-radius: 10rpx;
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

			&__store-type {
				height: 28rpx;
				font-size: 20rpx;
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 4rpx;
				border-radius: 6rpx;
				white-space: nowrap;
				text-align: center;
				top: -2rpx;
				margin-right: 6rpx;
			}

			&__title {
				font-size: 30rpx;
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
			/* 内容 end */
		}
	}
</style>
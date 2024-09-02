<template>
  <view class="">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="#FFFFFF">
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <view class="tn-flex tn-flex-col-center tn-flex-row-center ">
        <text class="tn-text-bold tn-text-xl tn-color-black">荣誉证书</text>
      </view>
    </tn-nav-bar>
    
    <!-- <button @click="tn('/pageA/create/create')">
      <view class="dong">
        <view class="monster">
          <view class="monster__face">
            <view class="monster__eye avatar-eye avatar-eye--green eye--left">
              <view class="avatar-eye-pupil pupil--green"><span class="avatar-eye-pupil-blackThing"><span class="avatar-eye-pupil-lightReflection"></span></span></view>
            </view>
            <view class="monster__eye avatar-eye avatar-eye--violet eye--right">
              <view class="avatar-eye-pupil pupil--pink"><span class="avatar-eye-pupil-blackThing"><span class="avatar-eye-pupil-lightReflection"></span></span></view>
            </view>
            <view class="monster__noses">
              <view class="monster__nose"></view>
              <view class="monster__nose"></view>
            </view>
            <view class="monster__mouth">
              <view class="monster__top"></view>
              <view class="monster__bottom"></view>
            </view>
          </view>
        </view>
      </view>
    </button> -->
    
    <view class="tn-margin-sm tn-text-center" :style="{paddingTop: vuex_custom_bar_height + 20 +'px'}">
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
                    <!-- <view class="logo-pic">
                      <view class="logo-image">
                        <view class="" :style="'background-image:url('+ item.userAvatar +');width: 40rpx;height: 40rpx;background-size: cover;border-radius:200rpx'">
                        </view>
                      </view>
                    </view> -->
                    <view class="tn-text-center">
                      <text class="tn-color-black tn-text-sm tn-text-bold">{{ item.userName }}</text>
                    </view>
              
                  </view>
                </view>
                <!-- <view class="justify-content-item">
                  <text class="tn-icon-rocket tn-color-gray tn-padding-right-xs"></text>
                  <text class="tn-color-gray">{{ item.viewUserCount }}</text>
                </view> -->
              </view>
              
              

              
              
            </view>
          </view>
        </block>
      </view>
      <!-- 比例图文 end-->
    </view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateActivity',
    mixins: [template_page_mixin],
    data(){
      return {
        content: [
          {
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
      }
    },
    methods: {
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // 随机颜色
      getRandomCoolBg() {
        return this.$t.color.getRandomCoolBgClass()
      },
    }
  }
</script>

<style lang="scss" scoped>
  /* 胶囊*/
  .tn-custom-nav-bar__back {
    width: 60%;
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
    
  }
  
  /* 页面阴影 start*/
  .img-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  /* 图文内容 start*/
  .image-book{
    padding: 155rpx 0rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-picbook{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 0;
    clip-path: polygon(160rpx 0, 100% 0, 100% 100%, 0 100%, 0 60rpx,145rpx 50rpx);
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
    border: 1rpx solid rgba(255,255,255,1);
    // box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    overflow: hidden;
    // background-color: #FFFFFF;
  }
  /* 文章内容 end*/
  
  /* 大嘴鸟*/
  .dong {
  	z-index: 9999;
  	position: fixed;
  	bottom: 0px;
  	right: -80px;
  	transform: scale(0.24);
  	-webkit-transform: scale(0.24);
  	-moz-transform: scale(0.24);
  
  }
  
  .monster {
  	transform: rotate(-50deg);
  	-ms-transform: rotate(-50deg);
  	/* IE 9 */
  	-moz-transform: rotate(-50deg);
  	/* Firefox */
  	-webkit-transform: rotate(-50deg);
  	/* Safari 和 Chrome */
  	-o-transform: rotate(-50deg);
  	/* Opera */
  	display: flex;
  	justify-content: center;
  	position: relative;
  	width: 170px;
  	height: 400px;
  	border-top-left-radius: 200px;
  	border-top-right-radius: 200px;
  	background-color: #3C47D7;
  	box-shadow: 20px 20px 60px #4650E5;
  }
  
  .monster__face {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	flex-direction: column;
  	position: absolute;
  	top: 14%;
  	width: 75%;
  	height: 160px;
  }
  
  .monster__noses {
  	top: 50%;
  	display: flex;
  	justify-content: space-between;
  	width: 28%;
  	height: auto;
  	margin-bottom: 10px;
  }
  
  .monster__nose {
  	width: 8px;
  	height: 12px;
  	border-radius: 20px;
  	background: rgba(0, 0, 0, 0.5);
  	box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
  }
  
  .monster__mouth {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	position: relative;
  	width: 100%;
  	height: 0%;
  	overflow: hidden;
  	border: 25px solid #FFC333;
  	border-radius: 100px;
  	background-color: #810332;
  	animation: mouth 1.75s infinite;
  	box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
  	box-sizing: border-box;
  }
  
  .monster__mouth::before {
  	content: '';
  	position: absolute;
  	width: 150px;
  	height: 80px;
  	border-radius: 100px;
  	background-color: #400018;
  }
  
  .monster__mouth::after {
  	content: '';
  	position: absolute;
  	bottom: -80px;
  	width: 160px;
  	height: 80px;
  	border-top-left-radius: 50%;
  	border-top-right-radius: 50%;
  	background-color: #DC1B50;
  	animation: tongue 1.75s infinite;
  }
  
  .monster__top {
  	position: absolute;
  	top: -30px;
  	width: 170px;
  	height: 30px;
  	border-bottom-left-radius: 10px;
  	border-bottom-right-radius: 10px;
  	background-color: #ffffff;
  	z-index: 100;
  	animation: t 1.75s infinite;
  }
  
  .monster__bottom {
  	position: absolute;
  	bottom: 0;
  	width: 100px;
  	height: 30px;
  	border-top-left-radius: 10px;
  	border-top-right-radius: 10px;
  	background-color: #ffffff;
  	z-index: 100;
  	animation: b 1.75s infinite;
  }
  
  
  .avatar-eye {
  	position: absolute;
  	top: -10%;
  	width: 65px;
  	height: 65px;
  	background: linear-gradient(105deg, white, #cb87f4);
  	border-radius: 100%;
  	box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
  	margin: 3px;
  	-webkit-transform: translateX(-50%);
  	transform: translateX(-50%);
  }
  
  
  .avatar-eye--green {
  	background: linear-gradient(to bottom, #fdfdfd, #c3efea);
  }
  
  .avatar-eye--violet {
  	background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
  }
  
  
  .eye--left {
  	left: 10%;
  }
  
  .eye--right {
  	left: 85%;
  }
  
  .eye--center {
  	left: 45%;
  	top: 10%;
  }
  
  .avatar-eye-pupil {
  	position: absolute;
  	width: 55%;
  	height: 55%;
  	left: 50%;
  	top: 25%;
  	-webkit-transform: translate(-50%);
  	transform: translate(-50%);
  	z-index: 100;
  	border-radius: 100%;
  }
  
  
  .pupil--green {
  	background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
  }
  
  .pupil--pink {
  	background: linear-gradient(135deg, #f1a183, #8535cd);
  }
  
  
  .avatar-eye-pupil-blackThing {
  	position: absolute;
  	width: 55%;
  	height: 55%;
  	left: 50%;
  	top: 25%;
  	background: #2c2f32;
  	-webkit-transform: translate(-50%);
  	transform: translate(-50%);
  	border-radius: 100%;
  	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .avatar-eye-pupil-lightReflection {
  	position: absolute;
  	width: 7px;
  	height: 7px;
  	left: 25%;
  	top: 10%;
  	background: #ebebeb;
  	-webkit-transform: translate(-50%);
  	transform: translate(-50%);
  	border-radius: 100%;
  	box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
  }
  /*大嘴动起来*/
  @keyframes t {
  
  	0%,
  	10%,
  	80%,
  	100% {
  		top: -30px;
  	}
  
  	20% {
  		top: 0px;
  	}
  
  	30% {
  		top: -20px;
  	}
  
  	40% {
  		top: -0px;
  	}
  
  	50% {
  		top: -25px;
  	}
  
  	70% {
  		top: 0px;
  	}
  }
  
  @keyframes b {
  
  	0%,
  	10%,
  	80%,
  	100% {
  		bottom: -30px;
  	}
  
  	20% {
  		bottom: 0px;
  	}
  
  	30% {
  		bottom: -20px;
  	}
  
  	40% {
  		bottom: -0px;
  	}
  
  	50% {
  		bottom: -25px;
  	}
  
  	70% {
  		bottom: 0px;
  	}
  }
  
  @keyframes mouth {
  
  	0%,
  	10%,
  	100% {
  		width: 100%;
  		height: 0%;
  	}
  
  	15% {
  		width: 90%;
  		height: 30%;
  	}
  
  	20% {
  		width: 50%;
  		height: 70%;
  	}
  
  	25% {
  		width: 70%;
  		height: 70%;
  	}
  
  	30% {
  		width: 80%;
  		height: 60%;
  	}
  
  	35% {
  		width: 60%;
  		height: 70%;
  	}
  
  	40% {
  		width: 55%;
  		height: 75%;
  	}
  
  	45% {
  		width: 50%;
  		height: 90%;
  	}
  
  	50% {
  		width: 40%;
  		height: 70%;
  	}
  
  	55% {
  		width: 70%;
  		height: 95%;
  	}
  
  	60% {
  		width: 40%;
  		height: 50%;
  	}
  
  	65% {
  		width: 100%;
  		height: 60%;
  	}
  
  	70% {
  		width: 100%;
  		height: 70%;
  	}
  
  	75% {
  		width: 90%;
  		height: 70%;
  	}
  
  	80% {
  		width: 50%;
  		height: 70%;
  	}
  
  	85% {
  		width: 90%;
  		height: 50%;
  	}
  
  	85% {
  		width: 40%;
  		height: 70%;
  	}
  
  	90% {
  		width: 90%;
  		height: 30%;
  	}
  
  	95% {
  		width: 100%;
  		height: 10%;
  	}
  }
  
  @keyframes tongue {
  
  	0%,
  	20%,
  	100% {
  		bottom: -80px;
  	}
  
  	30%,
  	90% {
  		bottom: -40px;
  	}
  
  	40% {
  		bottom: -45px;
  	}
  
  	50% {
  		bottom: -50px;
  	}
  
  	70% {
  		bottom: -80px;
  	}
  
  	90% {
  		bottom: -40px;
  	}
  }
</style>

# 项目介绍：企业微官网全平台解决方案

## 项目概述

本项目基于Fast Admin（后端管理框架）与UniApp（前端跨平台开发框架）联合打造，旨在为企业提供一套集企业展示、产品推广、供需信息发布、用户互动等功能于一体的全平台微官网解决方案。该系统支持微信小程序、H5网页及App端，帮助企业快速搭建并运营自己的线上品牌形象，提升市场竞争力。



前端扫码体验
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/qrcode.png)
小程序没有上线，和H5体验差不多，小程序多一个微信授权登录和微信支付 

后端体验地址   https://official.duoduotu.cloud/admin    账号: test   密码: 123456 ，体验账号没有删除权限

## 适用范围  

- 企业宣传与展示
- 内容管理与发布
- 行业解决方案
- 公司官网移动端展示

## 核心功能

### 1. 企业基本信息展示

+ 企业简介
+ 企业文化
+ 发展历程
+ 企业相册
+ 企业荣誉
+ 企业资质
+ 合作客户
+ 地址导航

### 2. 供需信息发布

 + 发布企业的采购需求或供应信息，促进商务合作

### 3. 视频中心

+ 仿抖音视频，上传企业宣传视频，直观展示企业实力

### 4. 企业商城

+ 展示企业商品，用户快速下单

### 5. 案例展示

+ 展示成功案例，让用户快速了解

### 6. 新闻资质

+ 发布企业新闻、行业动态等资讯内容，保持用户粘性。

### 7. 用户互动

+ 支持用户对资讯、案例、供需、视频等内容进行点赞、评论和转发

## 前端页面展示
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/1.png)
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/2.png)
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/3.png)
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/4.png)
## 后台管理页面
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/1-1.png)
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/1-2.png)
![输入图片说明](https://official.duoduotu.cloud/uploads/demo/1-3.png)

## 技术架构

- **后端**：采用FastAdmin框架，基于ThinkPHP开发，PHP7.3以上
- **前端**：使用UniApp框架，实现一次编写，多端运行（微信小程序、H5、App）。
- **数据库**：MySQL5.6或5.7，存储企业信息、用户数据、商品数据等。
- **服务器**：支持部署在阿里云、腾讯云等主流云平台上，确保系统稳定运行。

## uniapp安装

将前端项目导入到你的HBuilder里
修改common/config.js 里的域名为你的域名即可
如果打包小程序及app 请参考uniapp官方文档
## 后端安装
添加站点，运行目录/public
导出目录下的 db.sql 文件 修改目录下的 .env 数据库配置
修改目录权限 /runtime (777)   /public/uploads (777) 
添加伪静态
```
location / {
   if (!-e $request_filename){
      rewrite  ^(.*)$  /index.php?s=$1  last;   break;
   }
}
```
重启服务器
后台登录 http://域名/admin  默认账号 admin 密码 123456
后端接口 http://域名/api 


## 版权声明

本项目源代码及所有相关文档均受版权法保护，未经授权，严禁任何形式的复制、修改、分发或二次销售。购买者仅获得本项目源代码的使用权，用于自行部署、运营和二次开发，不得将源代码进行二次销售。

我们保留对违反版权规定的行为采取法律措施的权利。

## 联系方式

如有任何疑问或合作意向，请通过以下方式联系我们：

- 邮箱：1019925645@qq.com  
- WX：![输入图片说明](https://official.duoduotu.cloud/uploads/demo/wx.png)
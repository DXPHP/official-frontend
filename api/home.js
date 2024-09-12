import {
	httpRequest
} from '../common/request'
// api/已经在请求封装中加入


// 获取首页信息
export const index = (data) => httpRequest(`index/index`, 'GET',
	data
)

// 账号登录
export const login = (data) => httpRequest(`user/login`, 'POST',
	data
)

// 绑定手机号
export const bindMobile = (data) => httpRequest(`user/bindMobile`, 'POST',
	data
)
//小程序授权登录
export const authLogin = (data) => httpRequest(`user/authLogin`, 'POST',
	data
)

// 视频列表
export const videosList = (data) => httpRequest(`index/videosList`, 'GET',
	data
)
// 案例列表
export const casesList = (data) => httpRequest(`index/casesList`, 'GET',
	data
)
// 产品列表
export const goodsList = (data) => httpRequest(`index/goodsList`, 'GET',
	data
)
//资讯详情
export const newsDetail = (data) => httpRequest(`index/newsDetail`, 'GET',
	data
)
// 案例详情
export const caseDetail = (data) => httpRequest(`index/caseDetail`, 'GET',
	data
)
// 产品详情
export const goodsDetail = (data) => httpRequest(`index/goodsDetail`, 'GET',
	data
)


// 公司基本信息
export const companyBaseInfo = (data) => httpRequest(`index/companyBaseInfo`, 'GET',
	data
)

//
// 公司信息
export const company = (data) => httpRequest(`index/company`, 'GET',
	data
)

// 相片列表
export const photosList = (data) => httpRequest(`index/photosList`, 'GET',
	data
)
// 商圈列表
export const business = (data) => httpRequest(`index/business`, 'GET',
	data
)
// 企业文化
export const culture = (data) => httpRequest(`index/culture`, 'GET',
	data
)


// 资讯列表
export const newsList = (data) => httpRequest(`index/newsList`, 'GET',
	data
)

// 应用消息
export const appinfo = (data) => httpRequest(`common/appinfo`, 'GET',
	data
)

// 点赞列表
export const myLikes = (data) => httpRequest(`support/myLikes`, 'GET',
	data
)


// 常见问题
export const faq = (data) => httpRequest(`support/faq`, 'GET',
	data
)


// 政策协议
export const protocol = (data) => httpRequest(`support/protocol`, 'GET',
	data
)

// 意见反馈
export const feedback = (data) => httpRequest(`support/feedback`, 'POST',
	data
)


// 点赞
export const likes = (data) => httpRequest('common/likes', 'POST', data)
// 评论和回复
export const comment = (data) => httpRequest('common/comment', 'POST', data)
// 评论列表
export const commentList = (data) => httpRequest('common/commentList', 'GET', data)
// 删除评论
export const delComment = (data) => httpRequest('common/delComment', 'POST', data)
// 第二级评论回复
export const childCommentList = (data) => httpRequest('common/childCommentList', 'GET', data)
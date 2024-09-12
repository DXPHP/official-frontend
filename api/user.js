import {
	httpRequest
} from '../common/request'
// api/已经在请求封装中加入

// 获取用户信息
export const userinfo = (data) => httpRequest(`user/userinfo`, 'GET',
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

// 地址列表a
export const addressList = (data) => httpRequest(`address/list`, 'GET',
	data
)

//添加和编辑地址
export const addressEdit = (data) => httpRequest(`address/edit`, 'POST',
	data
)
//设置默认地址
export const addressDefault = (data) => httpRequest(`address/default`, 'POST',
	data
)

// 地址详情
export const addressDetail = (data) => httpRequest(`address/detail`, 'GET',
	data
)


// 修改用户信息
export const profile = (data) => httpRequest(`user/profile`, 'POST',
	data
)


// 点赞列表
export const myLikes = (data) => httpRequest(`support/myLikes`, 'GET',
	data
)

import {
	httpRequest
} from '../common/request'
// api/已经在请求封装中加入

// 下单
export const confirmOrder = (data) => httpRequest(`order/confirmOrder`, 'POST',
	data
)
// 立即支付
export const payNow = (data) => httpRequest(`order/payNow`, 'POST',
	data
)

// 订单列表
export const orderList = (data) => httpRequest(`order/orderList`, 'GET',
	data
)

// 订单详情
export const orderDetail = (data) => httpRequest(`order/orderDetail`, 'GET',
	data
)

// 确定收货
export const confirm = (data) => httpRequest(`order/confirm`, 'POST',
	data
)



const prefix = 'gw_'
const storageKey = {
	storage_token: `${prefix}token`,
	storage_userInfo: `${prefix}userInfo`,
	storage_backRoute: `${prefix}backRoute`,
	storage_shareUserId: `${prefix}shareUserId`,
}

// 开发测试环境的域名
let baseURL = 'http://139.196.18.12/'  //线上
// let baseURL = 'http://192.168.1.21:88/'

// 正式环境时切换正式环境的域名
if (process.env.NODE_ENV !== 'development') {
	baseURL = 'https://official.duoduotu.cloud/'
}

export {
	storageKey,
	baseURL,
}
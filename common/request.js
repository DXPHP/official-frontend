import {
	getStorage,
	removeStorage,
	setStorage
} from '@/common/db.js';
import {
	constructNowUrl
} from '@/utils/urlUtils.js';
import {
	storageKey,
	baseURL
} from '@/common/config.js';
const {
	storage_token,
	storage_userInfo,
	storage_backRoute
} = storageKey

// 创建一个请求队列（可选，用于取消未完成的请求）
// let requestQueue = new Map();
// 请求拦截器（在请求发送前做些什么）
function requestInterceptor(config) {
	// 在这里你可以添加一些逻辑，比如添加公共的 headers、token 等
	// 假设我们有一个 token 需要添加到 headers 中
	const token = getStorage(storage_token); // 假设这是从本地存储中获取的 token
	if (token) {
		config.header['token'] = `${token}`;
	}

	// 如果有需要，你可以将请求添加到队列中以便后续取消
	// requestQueue.set(config.url, config);

	return config;
}
// 将对象转换为查询字符串的辅助函数
function paramsSerializer(params) {
	return Object.keys(params)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
		.join('&');
}

// 根据后端返回状态码再次处理
function statusCodeProcess(responseData) {
	const {
		data,
		code,
		msg
	} = responseData;

	// 根据状态码进行不同的处理
	switch (code) {
		case 1: // 请求成功
			// 通常这里直接返回数据
			return responseData;
		case 401: // 未授权
			// 重定向到登录页面，或者提示用户登录
			console.log('55555')
			// console.error(msg);
			removeStorage(storage_token)
			removeStorage(storage_userInfo)
			setTimeout(() => {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}, 300)

		default:
			uni.showToast({
				icon: 'none',
				title: msg
			})
			// 对于未知的状态码，可能也想要记录错误日志并抛出一个错误
			// console.error(msg);

	}
}


let that = this
// 响应拦截器
function responseInterceptor(response) {
	console.log('thisis', that)
	// 假设 response.data 是实际的数据，response.statusCode 是状态码
	// 注意：uni.request 的实际结构可能不同，你需要根据实际情况调整
	const {
		data,
		statusCode
	} = response;
	console.log('请求返回', response)
	// 根据状态码进行不同的处理
	switch (statusCode) {
		case 200: // 请求成功
			// 通常这里直接返回数据
			return statusCodeProcess(data);

		case 201: // 创建成功
			// 某些情况下可能需要特殊处理，比如返回新创建的资源的 ID
			// return { ...data, newId: data.id }; // 示例
			return statusCodeProcess(data);

		case 400: // 客户端错误，如请求参数
			// 可以抛出一个错误，以便调用者知道发生了什么
			console.error('Bad Request: ' + (data.message || data.msg || 'Invalid request parameters'));
			uni.showToast({
				icon: 'none',
				title: '未知错误，请联系管理员'
			})
		case 401: // 未授权
			// 可以重定向到登录页面，或者提示用户登录
			// 这里只是抛出一个错误
			return statusCodeProcess(data);

		case 403: // 禁止访问
			// 抛出一个错误，告知用户他们没有权限访问该
			console.error('Forbidden: You do not have access to this resource');
			uni.showToast({
				icon: 'none',
				title: '禁止访问，请联系管理员'
			})
		case 404: // 未找到资源
			// 抛出一个错误，告知用户资源不
			console.error('Not Found: The resource you requested could not be found');
			uni.showToast({
				icon: 'none',
				title: '未找到资源，请联系管理员'
			})
		case 500: // 服务器内部错误
			// 可以记录错误日志，并抛出一个错误告知用户
			uni.showToast({
				icon: 'none',
				title: '网络出错了，请联系管理员'
			})
			console.error('Internal Server Error:', data);

			// 你可以添加更多的状态码处理...

		default:
			uni.showToast({
				icon: 'none',
				title: '未知错误，请联系管理员'
			})
			// 对于未知的状态码，可能也想要记录错误日志并抛出一个
			console.error('Unknown Error:', statusCode, data);

	}
}

// 封装 uni.request
export function httpRequest(url, method = 'GET', data = {}, header = {}) {
	// 如果是 GET 请求，则将 data 附加到 URL 的查询字符串上
	if (method.toUpperCase() === 'GET') {
		// url += '?' + paramsSerializer(data);
		if (paramsSerializer(data)) {
			url += '?' + paramsSerializer(data);
		}
		console.log('拼好的请求路径', url, paramsSerializer(data));
	}

	// 应用请求拦截器
	const config = requestInterceptor({
		url,
		method,
		data,
		header
	});

	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + 'api/' + config.url,
			method: config.method,
			data: config.method.toUpperCase() === 'GET' ? {} : config.data, // GET 请求时不需要 data
			header: config.header,
			success: async (res) => {
				try {
					// 应用响应拦截器
					const responseData = responseInterceptor(res);
					// 如果 responseInterceptor 返回了一个 Promise，我们需要等待它
					if (responseData instanceof Promise && (await responseData.catch())) {
						responseData.then(resolve).catch(reject);
					} else {
						resolve(responseData);
					}
				} catch (error) {
					// 捕获响应拦截器中抛出的错误
					reject(error);
				}
			},
			fail: (err) => {
				reject(err);
			}
		});
	});
}
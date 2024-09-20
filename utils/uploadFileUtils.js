import {
	getStorage
} from '@/common/db.js'
import {
	storageKey,
	baseURL
} from '@/common/config.js'
const {
	storage_token
} = storageKey
// 图片上传---公共
export function uploadFilePromise(url) {
	// console.log('urlurl', url)
	return new Promise((resolve, reject) => {
		// uni.showLoading({
		// 	title: '上传中~'
		// })
		let a = uni.uploadFile({
			url: `${baseURL}/api/common/upload`, // 仅为示例，非真实的接口地址
			filePath: url,
			header: {
				token: getStorage(storage_token)
			},
			name: 'file',
			formData: {
				user: 'test'
			},
			success: (res) => {
				// console.log('res', res)
				let data = JSON.parse(res.data)
				if (data.code == 0) uni.$u.toast(data.msg || '上传出错了')
				// uni.hideLoading()
				setTimeout(() => {
					resolve(data.data)
				}, 1000)

			},
			fail(err) {
		
				// uni.hideLoading()
				reject(JSON.parse(res.data))

			}
		});
	})
}
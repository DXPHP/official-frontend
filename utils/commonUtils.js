import {
	getStorage
} from '@/common/db.js';
import {
	storageKey
} from '@/common/config.js';
const {
	storage_token
} = storageKey

export function previewImage(img, index) {
	// 预览图片
	uni.previewImage({
		urls: img,
		current: index,
		longPressActions: {
			itemList: ['发送给朋友', '保存图片', '收藏'],
			success: function(data) {
				console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
			},
			fail: function(err) {
				console.log(err.errMsg);
			}
		}
	});
}

export async function isLogin() {
	let info = getStorage(storage_token)
	if (!info) {
		uni.showToast({
			icon: 'none',
			title: '请登录后操作',
			duration: 2500
		})
		await setTimeout(() => {
			uni.reLaunch({
				url: '/pages/login/login'
			})
		}, 800)
		return
	}
}
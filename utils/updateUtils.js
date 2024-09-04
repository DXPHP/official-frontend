import {
	userinfo
} from '@/api/user.js'
import {
	setStorage
} from '@/common/db.js';
import {
	storageKey
} from '@/common/config.js'
const {
	storage_userInfo
} = storageKey

export async function updateUserInfo() {
	let res_user = await userinfo()
	setStorage(storage_userInfo,
		JSON.stringify(
			res_user
			.data))
	return res_user.data
}
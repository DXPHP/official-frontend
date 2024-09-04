//取值
function getStorage(key,sync = true,defaults = false) {
    try {
		if(sync){
			let data = uni.getStorageSync(key);
			if(data.data && data.type == 'object'){
				return data.data
			}
			if(data){
				return data;
			}else{
				return defaults;
			}
			
		}else{
			let data = '';
			uni.getStorage({
				key:key,
				success: function (res) {
					data = res.data;
				}
			});
			if(data){
				return data;
			}else{
				return defaults;
			}
		}
    } catch (e) {
        return defaults;
    }
}

//赋值
function setStorage(key, value, sync = true) {
    try {
        if (sync) {
            return uni.setStorageSync(key, value);
        } else {
            uni.setStorage({
                key: key,
                data: value
            });
        }
    } catch (e) {

    }
}

//移除
function removeStorage(key, sync = true){
    try {
        if (sync) {
            return uni.removeStorageSync(key);
        } else {
            uni.removeStorage({
                key: key
            });
        }
    } catch (e) {
        return false;
    }
}

//清空
function clearStorage(sync = true){
    try {
        if (sync) {
            return uni.clearStorageSync();
        } else {
            uni.clearStorage();
        }
    } catch (e) {
        return false;
    }
}

export {
    getStorage,
    setStorage,
    removeStorage,
    clearStorage
}
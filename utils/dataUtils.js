export function deepClone(obj, hash = new WeakMap()) {
	// 处理非对象或null的情况  
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	// 处理日期对象  
	if (obj instanceof Date) {
		return new Date(obj);
	}

	// 处理数组  
	if (Array.isArray(obj)) {
		let clone = [];
		hash.set(obj, clone);
		obj.forEach(item => {
			clone.push(deepClone(item, hash));
		});
		return clone;
	}

	// 处理普通对象  
	let clone = {};
	hash.set(obj, clone);

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			// 检查循环引用  
			if (hash.has(obj[key])) {
				clone[key] = hash.get(obj[key]);
			} else {
				clone[key] = deepClone(obj[key], hash);
			}
		}
	}

	return clone;
}


export function toast(val) {

}
export function constructUrl(path, params) {
	let queryString = Object.keys(params)
		.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
		.join('&');
	return `${path}?${queryString}`;
}

export function constructNowUrl() {
	// 获取到当前页面的路由信息，但无法直接获取到页面内的数据
	const pages = getCurrentPages();
	// pages 是一个数组，数组最后一个元素是当前页面  
	const currentPage = pages[pages.length - 1];
	const pageRoute = currentPage.route;
	const options = currentPage.options
	return constructUrl(pageRoute, options)
}
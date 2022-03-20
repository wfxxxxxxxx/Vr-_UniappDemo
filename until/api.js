// const BASE_URL='http://smartcity.lenovoedu.com/interface'
export  const myRequest =(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:options.url,
			method:options.method||'GET',
			data:options.data||{},
			success: (res) => {
				if(res.data.status!==200){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail:(err)=> {
				uni.showToast({
					title:"数据请求失败"
				})
				reject(err)
			}
		})
	})
}

import axios from 'axios'
//http://localhost:4000/sliders
//增加默认的请求路径
axios.defaults.baseURL ='http://localhost:4000'
//设置拦截器
axios.interceptors.response.use((res)=>{
   return res.data
})

//获取轮播图数据

export let getSliders=()=>{
   return axios.get('/sliders')
}



//获取热门图书数据
export let getHotBook=()=>{
   return axios.get('/hot')
}



//获取所有图书信息
export let getAllBooks=()=>{
   return axios.get('/getAllBooks')
}


//删除某一本图书
export let removeBook=(id)=>{
   return axios.delete(`/book?id=${id}`)
}

//获得某一本书
export let getOneBook=(id)=>{
   return axios.get(`/book?id=${id}`)
}

//修改某本书
export let updateBook=(id,data)=>{
   return axios.put(`/book?id=${id}`)
}

//分页
export let pagination=(index)=>{
   return axios.get(`/page?index=${index}`)
}
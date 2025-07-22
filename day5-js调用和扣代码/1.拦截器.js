const axios = require("axios");


axios.get('http://httpbin.org/get').then(function (res){
    console.log(res)
})
axios.interceptors.request.use(function (config){
    config.headers['sing']='1234'
    return config
})

axios.get('http://httpbin.org/get').then(res=>console.log(res))
axios.interceptors.response.use(function (response){
    return response.data
})
e = (0, i[Jt])((0, i[Qt])(a, d))
    

(t[qt] += (-B != t[qt][O](Bn) ? Nn : Bn) + v + B5 + R[V5](e))
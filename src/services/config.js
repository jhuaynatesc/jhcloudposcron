const axios=require('axios')

var service=(token='')=>{
    const request=axios.create({
        baseURL:process.env.API_URL||"/api/v1",
    });
    request.defaults.timeout=2500;
    request.interceptors.request.use(
        config=>{
            config.headers["Authorization"]= `Bearer ${token}`;
            return config;
        },
        error=>{
            return Promise.reject(error);
        }
    );

    request.interceptors.response.use(
        response=>{
            if(response.status!==200){
                return Promise.reject(response.message);
            }
            return response;
        },
        error=>{
            return Promise.reject(error)
        }

    );
    return request;
}

module.exports=service;
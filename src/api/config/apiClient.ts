import axios from "axios";
import {toast} from "react-toastify";

const apiClient = axios.create({
    baseURL: "https://nest.navaxcollege.com/api",
    timeout: 120000,
})

apiClient.interceptors.response.use(function (response){
     return response.data
}, function (error){
    if(error.response){
        if(error.response.status == 404){
            toast.error("not found page")
        }else if(error.response.status == 400){
            toast.error("invalid inputs")
        }else if(error.response.status == 401){
            toast.error("Forbiden")
        }else if(error.response.status == 403){
            toast.error("not found page")
        }else if(error.response.status == 200){
            toast.error("not found page")
        }else{
            toast.error("not found page")
        }
    }else if(error.request){
        toast.error("conction error")
    }else{
        toast.error("ananymos error")
    }
    return Promise.reject(error)
})

export default apiClient
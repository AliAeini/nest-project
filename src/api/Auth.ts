import apiClient from "@/api/config/apiClient";
import {AuthResponseType} from "@/types";

interface registerData{
    username: string,
    email: string,
    password: string,
    repeated_password: string,
    check_policy: boolean
}
interface loginData{
    identifier: string,
    password: string,

}
export function registerApiCall(data: registerData) : Promise<AuthResponseType>{
    return apiClient.post("/auth/local/register", data)
}

export function LoginApiCall(data: loginData) : Promise<AuthResponseType>{
    return apiClient.post("/auth/local", data)
}
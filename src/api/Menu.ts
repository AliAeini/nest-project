import apiClient from "./config/apiClient";
import {ApiResponseType} from "@/types/api/Response";
import {MenuType} from "@/types";

export async function menuApiCall():Promise<ApiResponseType<MenuType>>{
    return await apiClient.get("/menus",{
        params:{
            populate: "*"
        }
    })
}
import apiClient from "@/api/config/apiClient";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props{
    populate?: Array<"categories" | "thumbnail" | "gallery">
    filters?: {
        is_popular?: boolean
        is_popular_fruit?: boolean
    }
}
interface Filter{
    is_popular?: {$eq: boolean}
    is_popular_fruit?: {$eq: boolean}
}
export function getAllProductApiCall({populate, filters}: Props) : Promise<ApiResponseType<ProductType>>{
    const customFilter:Filter = {}
    if(filters?.is_popular){
        customFilter.is_popular = {$eq: filters?.is_popular}
    }
    if(filters?.is_popular_fruit){
        customFilter.is_popular_fruit = {$eq: filters?.is_popular_fruit}
    }
    return apiClient.get("/products",
        {
            params:{
                populate: populate,
                filters: customFilter
            }
        })
}
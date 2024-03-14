import apiClient from "@/api/config/apiClient";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props{
    populate?: Array<"categories" | "thumbnail" | "gallery">
    filters?: {
        is_popular?: boolean
    }
}
interface Filter{
    is_popular?: {$eq: boolean}
}
export function getAllProductApiCall({populate, filters}: Props) : Promise<ApiResponseType<ProductType>>{
    const customFilter:Filter = {}
    if(filters?.is_popular){
        customFilter.is_popular = {$eq: filters?.is_popular}
    }
    return apiClient.get("/products",
        {
            params:{
                populate: populate,
                filters: filters
            }
        })
}
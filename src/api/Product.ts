import apiClient from "@/api/config/apiClient";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    populate?: Array<"categories" | "thumbnail" | "gallery">
    filters?: {}
}

export function getAllProductApiCall({populate, filters = {}}: Props) : Promise<ApiResponseType<ProductType>>{
    return apiClient.get("/products",
        {
            params:{
                populate: populate,
                filters: filters
            }
        })
}
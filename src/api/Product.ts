import apiClient from "@/api/config/apiClient";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    populate?: Array<"categories" | "thumbnail" | "gallery">
    filters?: {}
    sort?: Array<string>
    pagination?: {
        withCount? : boolean
        page?: number
        pageSize?: number
        start?: number
        limit?: number
    }
}

export function getAllProductApiCall({populate, filters = {}, sort = [], pagination} : Props) : Promise<ApiResponseType<ProductType>>{
    return apiClient.get("/products",
        {
            params:{
                populate: populate,
                filters: filters,
                sort: sort,
                pagination: pagination
            }
        })
}
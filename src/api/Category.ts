import apiClient from "@/api/config/apiClient";
import {ApiResponseType, CategoryType} from "@/types";

export function getFeaturedCategory (): Promise<ApiResponseType<CategoryType>>{
    return apiClient.get("/categories",{
        params:{
            populate: "thumbnail",
            filters:{
                is_featured:{
                    $eq: true,
                },
            },
        }
    })
}


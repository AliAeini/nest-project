import apiClient from "@/api/config/apiClient";
import {ApiResponseSingleType, BasketType} from "@/types";

interface UpdateBasketData{
    basket_items: Array<{
        product: {
            connect: Array<{id: number}>
        },
        quantity: number
    }>
}

export async function BasketApiCall():Promise<ApiResponseSingleType<BasketType>> {
    const jwt = window.localStorage.getItem("jwt")
    const uuid = window.localStorage.getItem("uuid")
    if(!jwt && !uuid){
        const response:ApiResponseSingleType<BasketType> = await apiClient.post("/my-basket")
        window.localStorage.setItem("uuid", response.data.attributes.uuid)
        return response
    }
    if(uuid && !jwt){
        return await apiClient.get("/my-basket",{
            params:{
                uuid: uuid
            }
        })

    }
    return await apiClient.get("/my-basket")
}

export async function updateBasketApiCall(data: UpdateBasketData) {
    const uuid = window.localStorage.getItem("uuid")
    if(uuid){
        return await apiClient.put("/my-basket",{
            data: data},
            {
                params:{
                        uuid: uuid
                }
        })

    }
    return await apiClient.put("/my-basket", {
        data: data
    })
}
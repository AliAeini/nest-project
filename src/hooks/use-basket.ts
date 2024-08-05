import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {BasketApiCall, updateBasketApiCall} from "@/api/basket";
import {BasketItemType} from "@/types";
import {useEffect, useState} from "react";

export function useBasket(){
    const {data: basketData} = useQuery({queryKey: ["my-basket"], queryFn:BasketApiCall})
    const basketItems = basketData?.data.attributes.basket_items ?? []
    const mutate = useMutation({mutationFn: updateBasketApiCall})
    const queryClient = useQueryClient()
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const addItemHandler = (productId: number)=>{
        const prepareUpdateData = basketItems.map((item)=>{
            return {
                product: {
                    connect: [{id : item.product.data.id}]
                },
                quantity: item.quantity
            }
        })
        prepareUpdateData.push({
            product: {
                connect: [{id : productId}]
            },
            quantity: 1
        })
        const updateData = {
            basket_items: prepareUpdateData
        }
        mutate.mutate(updateData, {onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey: ["my-basket"]})
            }})
    }

    const updateItemHandler = (productId: number, type: "increase" | "decrease" | "delete")=>{
        let prepareUpdateData = basketItems.map((item)=>{
            return {
                product: {
                    connect: [{id : item.product.data.id}]
                },
                quantity: item.quantity
            }
        })
        prepareUpdateData.map((item)=> {
            if(item.product.connect[0].id == productId){
                if(type == "increase"){
                    item.quantity += 1
                }else if(type == "decrease"){
                    item.quantity -= 1
                }else{
                    prepareUpdateData = prepareUpdateData.filter((item)=> item.product.connect[0].id != productId)
                }
            }
            return item
        })
        const updateData = {
            basket_items: prepareUpdateData
        }
        mutate.mutate(updateData, {onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey: ["my-basket"]})
            }})
    }
    const getItemHandler = (productId: number) : BasketItemType | undefined=>{
        return basketItems.find((item)=>
            item.product.data.id == productId
        )
    }
    const deleteBasketHandler = () =>{
        const updateData = {
            basket_items: []
        }
        mutate.mutate(updateData, {onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey: ["my-basket"]})
            }})
    }
    useEffect(() => {
        const total = basketItems.map((item)=> item.quantity * (item.product.data.attributes.sell_price ?? item.product.data.attributes.price) )
        const totalSum = total.reduce((total, number) => total + number, 0);
        setTotalPrice(totalSum)
    }, [basketItems]);


    return {basketItems: basketItems, addItem : addItemHandler, updateItem: updateItemHandler, getItem: getItemHandler, totalPrice: totalPrice, deleteBasket: deleteBasketHandler}
}
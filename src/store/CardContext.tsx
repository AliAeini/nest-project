import {createContext, ReactNode, useState} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    children: ReactNode
}

interface ProductItem {
    productId: number,
    title: string,
    price: number,
    img?: string
    quantity: number
}

export const CardContext = createContext<{
    BasketItems: Array<ProductItem>,
    addItem: (product: EntityType<ProductType>)=> void,
    increaseItem: (productId: number, maxQuantity: number)=> void,
    decreaseItem: (productId: number)=> void,
    deleteItem: (productId: number)=> void,
    getItem: (productId: number)=> undefined | ProductItem,
}>({
    BasketItems:  [],
    addItem: ()=> {},
    increaseItem: ()=> {},
    decreaseItem: ()=> {},
    deleteItem: ()=>{},
    getItem: ()=> undefined  ,
})

export function CardContextProvider({children}: Props) {
    const [basketItems, setBasketItems] = useState<Array<ProductItem>>([])
    const addItemHandler = (product:  EntityType<ProductType>)=>{
        const newProduct: ProductItem = {
            productId: product.id,
            title: product.attributes.title,
            price: product.attributes.price,
            img: product.attributes.thumbnail?.data?.attributes.url,
            quantity: 1
        }
        setBasketItems(prevState=>[
            ...prevState,
            newProduct
        ])
    }

    const increaseItemHandler = (productId: number, maxQuantity: number)=>{
        const newBasket = basketItems.map((item)=>{
            if(item.productId == productId && item.quantity < maxQuantity){
                return {...item, quantity : item.quantity + 1}
            }
            return item
        })
        setBasketItems(newBasket)
    }

    const decreaseItemHandler = (productId: number)=>{
        const currentProduct = basketItems.find((item)=> item.productId == productId)
        if(currentProduct && currentProduct.quantity == 1){
            deleteItemHandler(productId)
        }else{
            const newBasket = basketItems.map((item)=>{
                if(item.productId == productId){
                    return {...item, quantity : item.quantity - 1}
                }
                return item
            })
            setBasketItems(newBasket)
        }
    }

    const deleteItemHandler = (productId: number)=>{
        const newBasket = basketItems.filter((item) => item.productId != productId)
        setBasketItems(newBasket)
    }

    const getItemHandler = (productId: number) => basketItems.find((item)=> item.productId == productId)

    return (
        <CardContext.Provider value={{BasketItems: basketItems, addItem : addItemHandler, increaseItem : increaseItemHandler, decreaseItem : decreaseItemHandler, deleteItem: deleteItemHandler, getItem: getItemHandler}}>
            {children}
        </CardContext.Provider>
    );
}
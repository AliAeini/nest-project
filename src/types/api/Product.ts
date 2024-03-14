import {CategoryType, EntityType, ImageType, PopulateType} from "@/types";

export interface ProductType {
    title: string
    description: any
    quantity: number
    price: number
    sell_price?: number
    discount_expire_date: any
    rate: number
    weight: number
    is_popular: boolean
    is_top_selling: boolean
    is_trending: boolean
    SKU: string
    label: string | null
    unit: string
    total: any
    sold: any
    is_popular_fruit?: boolean
    is_best_seller?: boolean
    thumbnail?: {
        data?: EntityType<ImageType>
    }
    gallery?: PopulateType<ImageType>
    categories?: PopulateType<CategoryType>
}

export interface ProductType {
    image: string,
    title: string,
    rate: number,
    price: number,
    sale_price?: number,
    category: string,
    link: string,
    weight?: number,
    unit?: string,
    label?: string,
    total?: number,
    sold?: number,
    color?: string,
    items?: number
}
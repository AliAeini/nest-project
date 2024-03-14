interface Props{
    badge?: string | null,
    price: number,
    sale_price?: number
}

export function Badge({badge, price, sale_price}: Props) {
    if(badge){
        return (
            <div className={`badge ${badge.toLowerCase() == "hot" ? "badge--hot" : "badge--sale"} absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{badge}</div>
        )
    }
    if(sale_price){
        return (
            <div className="badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none text-white">{Math.round((sale_price / price) * 100)}$</div>
        )
    }
    return (
        <></>
    )
}


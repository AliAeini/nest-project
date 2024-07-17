import {ImageVeiw, PriceText, Rating} from "@/components";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";


interface Props{
    data: EntityType<ProductType>
}
export function MiniProductCard({data}: Props) {
    return (
        <div className="flex gap-3 lg:gap-5 border border-transparent hover:border-gray-200 rounded-md shadow-sm shadow-gray-200 md:py-3">
            <ImageVeiw src={data.attributes.thumbnail?.data?.attributes.url} alt={"product"} width={120} height={120} className={"w-[80px] md:w-[100px] aspect-square"}/>
            <div className="flex flex-col justify-center gap-2">
                <div className="text-heading6 text-blue-300">{data.attributes.title}</div>
                 <div className="flex gap-4">
                     <Rating rate={data.attributes.rate}/>
                 </div>
                <PriceText price={data.attributes.price} sale_price={data.attributes.sell_price}/>
            </div>
        </div>
    );
}


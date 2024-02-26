import {ImageVeiw, PriceText, Rating} from "@/components";

interface Props{
    sliderData: {
        title :string,
        image: string,
        rate: number,
        price: number,
        sale_price: number
    }
}
export function MiniProductCard({sliderData}: Props) {
    return (
        <div className="flex gap-3 lg:gap-5">
            <ImageVeiw src={sliderData.image} alt={"product"} width={120} height={120}/>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="text-heading6 text-blue-300 mb-1">{sliderData.title}</div>
                    <div className="flex gap-4">
                        <Rating rate={sliderData.rate}/>
                    </div>
                </div>
                <PriceText price={sliderData.price} sale_price={sliderData.sale_price}/>
            </div>
        </div>
    );
}


import {ImageVeiw, PriceText, ProductItemCounter, Rating} from "@/components";
import {useEffect, useState} from "react";
import {TimerHelper} from "@/utils/Timer";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import Link from "next/link";


interface Props{
    sliderData: EntityType<ProductType>
}
export function ProductDealsCard({sliderData}: Props) {

    const[remainTime, setRemainTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(()=>{
        const interval = setInterval(()=>{
            const timer_obj =  TimerHelper(sliderData.attributes.discount_expire_date)
            setRemainTime(timer_obj)
        }, 1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="relative h-[438px]">
            <Link href={{pathname: "/products/[id]", query: {id: sliderData.id}}}>
                <ImageVeiw src={sliderData.attributes.thumbnail?.data?.attributes.url} className="w-full" alt={"picture"} width={378} height={335}/>
            </Link>
            <div className="absolute z-[20] left-[50%] translate-x-[-50%] top-[195px]">
                <div className="flex items-center gap-3 h-[60px]">
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.days}</div>
                        <div className="font-lato text-gray-500 text-small">Days</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.hours}</div>
                        <div className="font-lato text-gray-500 text-small">Hours</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.minutes}</div>
                        <div className="font-lato text-gray-500 text-small">Mins</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.seconds}</div>
                        <div className="font-lato text-gray-500 text-small">Secs</div>
                    </div>
                </div>
                <div className="bg-white mt-2.5 px-8 pt-6 pb-4 rounded-[10px] shadow-c-xs">
                    <div className="text-heading-sm text-blue-300">{sliderData.attributes.title}</div>
                    <div className="flex w-[106px] justify-between h-4 items-center mt-1">
                        <div className="flex gap-4">
                            <Rating rate={sliderData.attributes.rate}/>
                        </div>
                    </div>
                    <div className="font-lato text-xsmall text-gray-500 mt-1">{sliderData.attributes.weight} {sliderData.attributes.unit}</div>
                    <div className="flex items-center justify-between mt-3">
                        <PriceText price={sliderData.attributes.price} sale_price={sliderData.attributes.sell_price}/>
                        <ProductItemCounter product={sliderData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
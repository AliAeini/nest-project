import {IconBox, ImageVeiw, PriceText, Rating} from "@/components";
import {useEffect, useState} from "react";
import {TimerHelper} from "@/utils/Timer";

interface Props{
    sliderData:{
        title: string,
        image: string,
        rate: number,
        weight: number,
        unit: string,
        price: number,
        sale_price: number,
        dead_line: string
    }
}
export function ProductDealsCard({sliderData}: Props) {
    const[remainTime, setRemainTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    useEffect(()=>{
        setInterval(()=>{
            const timer_obj =  TimerHelper(sliderData.dead_line)
            setRemainTime(timer_obj)
        }, 1000)
    }, [])
    return (
        <div className="relative h-[438px]">
            <ImageVeiw src={sliderData.image} className="w-full" alt={"picture"} width={378} height={335}/>
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
                    <div className="text-heading-sm text-blue-300">{sliderData.title}</div>
                    <div className="flex w-[106px] justify-between h-4 items-center mt-1">
                        <div className="flex gap-4">
                            <Rating rate={sliderData.rate}/>
                        </div>
                    </div>
                    <div className="font-lato text-xsmall text-gray-500 mt-1">{sliderData.weight} {sliderData.unit}</div>
                    <div className="flex items-center justify-between mt-3">
                       <PriceText price={sliderData.price} sale_price={sliderData.sale_price}/>
                        <div className="add-product">
                            <button
                                className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds
                                +
                            </button>
                            <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                                <input type="number" value="1"
                                       className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"/>
                                <div className="flex flex-col justify-between">
                                    <IconBox className={"up icon-angle-small-up"} size={10}></IconBox>
                                    <IconBox className={"down icon-angle-small-down"} size={10}></IconBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
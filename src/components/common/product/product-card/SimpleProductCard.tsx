import {Badge, IconBox, ImageVeiw, Rating} from "@/components";
import Link from "next/link";

interface Props{
    cardData: {
        title: string,
        image: string,
        category: string,
        rate: number,
        weight: number,
        unit: string,
        price: number,
        sale_price?: number,
        label?: string,
        total?: number,
        sold?: number
    }
}

export function SimpleProductCard({cardData}:Props) {
    return (
        <div>
            <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
                {
                    <Badge badge={cardData.label} price={cardData.price} sale_price={cardData.sale_price}/>
                }
                <div className="hidden mt-6 sm:mt-8 p-1 items-center group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
                    <div className="p-0.5 px-2 sm:px-3 hover:bg-green-150">
                        <IconBox className={"icon-heart text-primary"} size={15}/>
                    </div>
                    <div className="p-0.5 px-2 sm:px-3 border-x-[1px] border-green-200 hover:bg-green-150">
                        <IconBox className={"icon-shuffle"} size={15}/>
                    </div>
                    <div className="p-0.5 px-2 sm:px-3 hover:bg-green-150">
                        <IconBox className={"icon-eye"} size={15}/>
                    </div>
                </div>
                <ImageVeiw src={cardData.image} className="m-auto w-full aspect-[3/2] mb-[28px]" alt={"image"} width={200} height={150}/>
                <div className="flex flex-col gap-2">
                    <div className="text-gray-500 text-xsmall">{cardData.category}</div>
                    <Link href={"/"}><h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden">{cardData.title}</h3></Link>
                    <div className="flex gap-4">
                        <Rating rate={cardData.rate}/>
                    </div>
                    <div className="font-lato text-xsmall text-gray-500">{cardData.weight} {cardData.unit}</div>
                </div>
                {
                    cardData.total  && cardData.sold?
                        <>
                            <div className="flex items-center justify-between mt-3">
                                <div>
                                    {
                                        cardData.sale_price ?
                                            <div>
                                                <span
                                                    className="text-heading5 text-green-200">{cardData.sale_price}</span>
                                                <span
                                                    className="text-heading-sm line-through text-gray-500">{cardData.price}</span>
                                            </div>
                                            :
                                            <span className="text-heading5 text-green-200">{cardData.price}</span>
                                    }
                                </div>
                            </div>
                            <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
                                <div style={{width: `${(cardData.sold / cardData.total) * 100}%`}} className={`bg-green-200 h-[4px] rounded-[2px]`}></div>
                            </div>
                            <div className="mt-2.5 font-lato text-blue-300 text-xsmall">Sold:{cardData.sold}/{cardData.total}</div>
                            <div className="mt-[23px]">
                                <button
                                    className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                                    <IconBox className="icon-shopping-cart" size={22}></IconBox>
                                    <span className="text-heading-sm">Add To Card</span>
                                </button>
                            </div>
                        </>
                        :
                        <div className="flex items-center justify-between mt-3">
                            {
                                cardData.sale_price ?
                                    <div>
                                                <span
                                                    className="text-heading5 text-green-200">{cardData.sale_price}</span>
                                        <span
                                            className="text-heading-sm line-through text-gray-500">{cardData.price}</span>
                                    </div>
                                    :
                                    <span className="text-heading5 text-green-200">{cardData.price}</span>
                            }
                            <div className="add-product">
                                <button
                                    className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
                                    <span className={"hidden sm:inline"}>Adds</span>
                                    +
                                </button>
                                <div
                                    className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                                    <input type="number" value="1"
                                           className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"/>
                                    <div className="flex flex-col justify-between">
                                        <IconBox className={"up icon-angle-small-up"} size={10}/>
                                        <IconBox className={"down icon-angle-small-down"} size={10}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}


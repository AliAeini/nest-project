import {Badge, IconBox, ImageVeiw, PriceText, ProductCounter, Rating} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import Link from "next/link";

interface Props{
    data: EntityType<ProductType>
}

export function SimpleProductCard({data}:Props) {
    return (
        <>
            <div className="grid grid-rows-2 border-[1px] h-full border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 md:py-6 xl:px-5">
                {
                    (data.attributes.label) &&
                    <Badge badge={data.attributes.label} price={data.attributes.price} sale_price={data.attributes.sell_price}/>
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
                <Link href={{pathname: "/products/[id]", query: {id: data.id}}}>
                    <ImageVeiw src={data.attributes.thumbnail?.data?.attributes.url} className="row-span-1 m-auto w-full h-auto aspect-[3/2] " alt={"image"} width={200} height={150}/>
                </Link>
                <div className="grid grid-rows-4">
                    {
                        data.attributes.categories?.data[0] ?
                            <div className="row-span-1 text-gray-500 text-sm">{data.attributes.categories?.data[0].attributes.title}</div>
                            :
                            <div className="row-span-1"></div>
                    }
                    <h3 className="row-span-1 h-[30px] text-heading-sm text-blue-300 overflow-hidden">{data.attributes.title}</h3>
                    <div className="row-span-1 flex gap-4 items-center">
                        <Rating rate={data.attributes.rate}/>
                    </div>
                    <div className="row-span-1 font-lato text-xsmall text-gray-500">{data.attributes.weight} {data.attributes.unit}</div>
                    {
                        data.attributes.total && data.attributes.sold ?
                            <div className="row-span-1">
                                <div className="flex items-center justify-between">
                                    <PriceText price={data.attributes.price} sale_price={data.attributes.sell_price}/>
                                </div>
                                <div className="bg-gray-200 h-[4px] w-full rounded-[2px]">
                                    <div style={{width: `${(data.attributes.sold / data.attributes.total) * 100}%`}} className={`bg-green-200 h-[4px] rounded-[2px]`}></div>
                                </div>
                                <div className="font-lato text-blue-300 text-xsmall">Sold:{data.attributes.sold}/{data.attributes.total}</div>
                                <div className="">
                                    <button
                                        className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                                        <IconBox className="icon-shopping-cart" size={22}></IconBox>
                                        <span className="text-heading-sm">Add To Card</span>
                                    </button>
                                </div>
                            </div>
                            :
                            <div className="flex items-center justify-between mt-3">
                                <PriceText price={data.attributes.price} sale_price={data.attributes.sell_price}/>
                                <ProductCounter quentitiyItems={data.attributes.quantity}/>
                            </div>
                    }
                </div>
            </div>
        </>
    );
}


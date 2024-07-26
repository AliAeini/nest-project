import {IconBox, ImageVeiw, PriceText, Rating, Section} from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import {useEffect, useState } from "react";
import {getAllProductApiCall} from "@/api/Product";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {

};

export default function id({}: Props) {
    const router = useRouter();
    const [ID, setID] = useState<string | string[] | null>(null);

    useEffect(() => {
        if (router.query.id) {
            setID(router.query.id);
        }
        }, [router.query.id, "ProductDetail"])

    const {data: productDetail} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getAllProductApiCall.name, "ProductDetail", ID],
        queryFn: () => getAllProductApiCall({
            populate: ["thumbnail", "categories", "gallery"],
            filters: {id: {$eq: ID}}
        }),
        enabled: !!ID,
    });

    if(productDetail && productDetail.data.length >= 1){
        return (
            <Section className="flex flex-col items-center mb-[68px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="col-span-1">
                        <div className="w-full mb-[28px] p-[40px] border-[1px] border-gray-200 rounded-2xl">
                            <div className="top-0 left-0 flex justify-end">
                                <IconBox className={"icon-search"} size={24}/>
                            </div>
                            <ImageVeiw src={productDetail.data[0].attributes.thumbnail?.data?.attributes.url} alt={"pic"} width={100} height={100} className="aspect-[3/2] w-full"/>
                        </div>
                        <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 items-center">
                            <div className="col-span-1 text-center rotate-180 hidden lg:inline">
                                <IconBox className={"icon-arrow-small-right bg-green-200 rounded-full items-center p-2 w-fit"} size={24}/>
                            </div>
                            <div className="col-span-1 border border-green-200 rounded-2xl p-2">
                                <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="col-span-1 border rounded-xl p-2">
                                <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="col-span-1 border rounded-xl p-2">
                                <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="col-span-1 border rounded-xl p-2">
                                <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                            </div>
                            <div className="col-span-1 text-center hidden lg:inline">
                                <IconBox className={"icon-arrow-small-right bg-green-200 rounded-full items-center p-2 w-fit"} size={24}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-5 border border-gray-200 rounded-2xl min-h-[200px] p-6">
                        <h1 className="text-heading5 sm:text-heading md:text-heading3 ">{productDetail.data[0].attributes.title}</h1>
                        {
                            productDetail.data[0].attributes.categories && productDetail.data[0].attributes.categories?.data.length > 0 &&
                            <p className="text-heading6 sm:text-heading5 text-gray-600">Category: <span className="text-black">{productDetail.data[0].attributes.categories?.data[0].attributes.title}</span></p>
                        }
                        <p className="text-heading6 sm:text-heading5 text-gray-600">SKU ID: <span className="text-black">{productDetail.data[0].attributes.SKU}</span></p>
                        <p className="text-heading6 sm:text-heading5 text-gray-600">Quantity: <span className="text-black">{productDetail.data[0].attributes.quantity}</span></p>
                        <div className="flex gap-8 items-center">
                            <p className="text-heading6 sm:text-heading4 text-gray-600">Rate: </p>
                            <Rating rate={productDetail.data[0].attributes.rate}/>
                        </div>
                        <p className="text-heading6 sm:text-heading5 text-gray-600">Weight: <span className="text-black">{productDetail.data[0].attributes.weight}   {productDetail.data[0].attributes.unit}</span></p>
                        <div className="flex gap-8 items-center">
                            <p className="text-heading6 sm:text-heading5 text-gray-600">Price: </p>
                            <PriceText price={productDetail.data[0].attributes.price} sale_price={productDetail.data[0].attributes.sell_price}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aperiam culpa deleniti eaque earum et, incidunt itaque, iure labore magnam nesciunt odit quia repellat, sapiente similique tenetur voluptate. Corporis doloribus dolorum enim error, harum repellendus soluta. Aliquid consequatur fugit id labore, nulla obcaecati, omnis, possimus quos sapiente sit velit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, adipisci aliquam asperiores assumenda beatae dicta distinctio ducimus eius libero natus quam quia quos reiciendis reprehenderit sunt ut velit vitae.</p>
                        <button className="m-auto mb-0 p-2 sm:p-3 text-heading5 tracking-[1px] text-gray-100 bg-primary rounded-md w-full shadow shadow-primary hover:bg-white hover:text-primary transition-all duration-100">Add To Bascket</button>
                    </div>
                </div>
            </Section>
        );
    }
};
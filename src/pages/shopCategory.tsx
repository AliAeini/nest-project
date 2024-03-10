import {IconBox, ImageVeiw, PriceText, Rating, Section, SimpleProductCard} from "@/components";
import Link from "next/link";
import {popularProducts} from "@/mock/PopularProducts";
import {RecentlyAddedMock} from "@/mock/RecentlyAdded";

interface Props {

};

export default function ShopCategory({}: Props) {
    return (
        <>
            <Section className="mb-[68px]">
                <div className="rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[rgba(59,183,126,.2)] bg-opacity-20 bg-cover bg-top bg-no-repeat flex justify-between items-center mt-[38px] relative">
                    <div className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
                        <h2 className="max-w-[100%] font-quickSand text-heading3 md:text-heading3 lg:text-heading2 tracking-[-0.04%] text-blue-300">Vegetables & tubers</h2>
                    </div>
                </div>
            </Section>
            <Section className="md:flex md:flex-row sm:flex-col md:justify-between gap-4">
                <div className="flex flex-col max-w-[420px] mx-auto">
                    <div className="w-full flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 mb-[55px] pb-4">
                        <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2">Filter items</p>
                        <div className="flex">
                            <p className="font-lato text-heading6 font-normal text-gray-400 mb-[31px] mr-[22px]">Price Range:</p>
                            <span className="font-quickSand text-heading5 text-green-200">$16 - $173</span>
                        </div>
                        <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px] mb-[35px]">
                            <div className="bg-green-200 h-[4px] w-3/4 rounded-[2px]"></div>
                        </div>
                        <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Used for:</p>
                        <div className="flex flex-col items-start mb-[30px]">
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Appetizer</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Salad</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Eat fresh</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Juice</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Smoothie</p>
                            </div>
                        </div>
                        <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Brand:</p>
                        <div className="flex flex-col items-start mb-[30px]">
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Cobblestone</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300 cursor-pointer">McVitie's</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Tastykake</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Warburtons</p>
                            </div>
                            <div className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox className={"icon-play mr-2.5"}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">Wonder Bread</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <button
                                className="rounded bg-green-100 font-[600] px-[32px] py-[14px] text-green-200 flex justify-center items-center">Filter
                            </button>
                            <ImageVeiw className="hidden md:block" src="/assets/images/fresh-chinese-cabbage.png" alt="#" width={100} height={100}/>
                        </div>
                    </div>
                    <div className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 gap-6 pb-[36px] pr-[180px] mb-10">
                        <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2">Popular Items</p>
                        <div className="flex flex-col gap-6">
                            {
                                RecentlyAddedMock.map((item, index)=>{
                                    return (
                                        <Link className="flex gap-3 lg:gap-5 w-full" key={index} href={item.link}>
                                            <ImageVeiw src={item.image} alt={"#"} width={100} height={90} className={"block aspect-square w-[90px] flex-shrink-0 flex-grow-0"}/>
                                            <div className="flex flex-col justify-between max-w-[90%] flex-shrink-0">
                                                <div className="font-quickSand text-heading6 text-blue-300 mb-1">{item.title}</div>
                                                <div className="flex gap-4">
                                                    <Rating rate={item.rate}/>
                                                </div>
                                                <PriceText price={item.price} sale_price={item.sale_price}/>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex justify-between rounded-[15px] bg-gray-200 py-[15px] lg:py-[45px] ps-[30px] mb-[48px] h-fit w-full">
                        <div className="text-heading6 lg:text-heading5 text-gray-500">There are <span
                            className="text-blue-200">568</span> products in this category
                        </div>
                        <div className="text-medium text-gray-500 mr-[5px] flex justify-center items-center">Sort by:
                            Featured
                            <IconBox className={"icon-angle-small-down px-2"} size={22}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-[45px] px-4">
                        {
                            popularProducts.map((pruduct, index) => {
                                return (
                                    <div className="col-span-1 max-w-[350px] mx-auto" key={index}>
                                        <SimpleProductCard cardData={pruduct}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-full text-center">
                        <div className="flex gap-4 justify-center items-center p-2">
                            <button type={"button"} className="p-1 px-2.5 bg-gray-300 rounded-full font-semibold text-lg">
                                <IconBox className={"icon-angle-small-left"}/>
                            </button>
                            <button type={"button"} className="p-1 px-3.5 bg-gray-300 rounded-full font-semibold text-lg">5
                            </button>
                            <button type={"button"} className="p-1 px-3.5 bg-gray-300 rounded-full font-semibold text-lg">5
                            </button>
                            <button type={"button"} className="p-1 px-3.5 bg-gray-300 rounded-full font-semibold text-lg">5
                            </button>
                            <button type={"button"} className="p-1 px-3.5 bg-gray-300 rounded-full font-semibold text-lg">5
                            </button>
                            <button type={"button"} className="p-1 px-2.5 bg-gray-300 rounded-full font-semibold text-lg">
                                <IconBox className={"icon-angle-small-right"}/>
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </>

    );
}
import {IconBox, ImageVeiw, Section} from "@/components";

interface Props {

}

export default function userBasket({}: Props) {
    return (
        <>
            <Section className="py-4 md:py-8 flex flex-col gap-4 md:gap-6 border rounded-[30px] md:m-8">
                <p className="text-2xl md:text-5xl font-semibold">Your Basket</p>
                <p className="text-xl font-bold text-gray-600">There Are <span className="text-primary">3</span> Products in Your Basket</p>
            </Section>
            <Section className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                <div className="col-span-2 rounded-[20px]">
                    <div className="py-1 text-end hidden md:block">
                        <button className="w-fit cursor-pointer">
                            <IconBox className={"icon-home mr-2 font-[500] text-gray-600"} title={"Clear Basket"} titleClassName={"text-lg font-[500] text-gray-700"}/>
                        </button>
                    </div>
                    <div>
                        <div className="grid grid-cols-6 gap-2 md:gap-4 p-4 rounded-[15px] bg-gray-300">
                            <div className="col-span-2 sm:col-span-2 text-sm lg:text-lg font-[600]">Product</div>
                            <div
                                className="col-span-1 text-center text-sm lg:text-lg font-[600] hidden sm:inline">Unit
                            </div>
                            <div
                                className="col-span-1 text-center text-sm lg:text-lg font-[600] hidden sm:inline">Quantity
                            </div>
                            <div
                                className="col-span-1 text-center text-sm lg:text-lg font-[600] hidden sm:inline">Subtotal
                            </div>
                            <div
                                className="col-span-1 text-center text-sm lg:text-lg font-[600] hidden sm:inline"></div>
                        </div>
                        <ul className="my-2 md:my-4 flex-flex-col gap-2 md:gap-4">
                            <li className="grid grid-cols-6 gap-2 md:gap-4 p-4 rounded-[15px] items-center justify-between">
                                <div className="col-span-2 font-[700]">
                                    <div className="flex flex-row gap-2 items-center">
                                        <ImageVeiw src={"/assets/images/1 902.png"} alt={"pic"} width={100} height={100}
                                                   className="block w-[60px] md:w-[90px] aspect-square rounded-md"/>
                                        <p className="hidden xl:inline-block text-base lg:text-[17px]">Field Roast Chao
                                            Cheese Creamy
                                            Original</p>
                                    </div>
                                </div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">20.0$</div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">2</div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">40.0$</div>
                                <div className="col-span-1 flex justify-end font-[700] text-base">
                                    <IconBox
                                        className={"icon-cross p-1.5 border-[2px] border-red rounded-full text-red cursor-pointer"}
                                        size={14}/>
                                </div>
                            </li>
                            <li className="grid grid-cols-6 gap-2 md:gap-4 p-4 rounded-[15px] items-center">
                                <div className="col-span-2 font-[700]">
                                    <div className="flex flex-row gap-2 items-center">
                                        <ImageVeiw src={"/assets/images/1 902.png"} alt={"pic"} width={100} height={100}
                                                   className="block w-[60px] md:w-[90px] aspect-square rounded-md"/>
                                        <p className="hidden xl:inline-block text-base lg:text-[17px]">Field Roast Chao
                                            Cheese Creamy
                                            Original</p>
                                    </div>
                                </div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">20.0$</div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">2</div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">40.0$</div>
                                <div className="col-span-1 flex justify-end font-[700] text-base">
                                    <IconBox
                                        className={"icon-cross p-1.5 border-[2px] border-red rounded-full text-red cursor-pointer"}
                                        size={14}/>
                                </div>
                            </li>
                            <li className="grid grid-cols-6 gap-2 md:gap-4 p-4 rounded-[15px] items-center">
                                <div className="col-span-2 font-[700]">
                                    <div className="flex flex-row gap-2 items-center">
                                        <ImageVeiw src={"/assets/images/1 902.png"} alt={"pic"} width={100} height={100}
                                                   className="block w-[60px] md:w-[90px] aspect-square rounded-md"/>
                                        <p className="hidden xl:inline-block text-base lg:text-[17px]">Field Roast Chao
                                            Cheese Creamy
                                            Original</p>
                                    </div>
                                </div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">20.0$</div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">2</div>
                                <div className="col-span-1 text-center font-[700] text-base lg:text-[17px]">40.0$</div>
                                <div className="col-span-1 flex justify-end font-[700] text-base">
                                    <IconBox className={"icon-cross p-1.5 border-[2px] border-red rounded-full text-red cursor-pointer"} size={14}/>
                                </div>
                            </li>
                        </ul>
                        <hr/>
                        <div className="flex justify-between py-2 md:py-6">
                            <button type={"submit"} className="flex flex-row items-center gap-2 max-w-fit text-base md:text-xl font-[600] traking-[0px] bg-primary px-2 md:px-4 py-1 md:py-2 rounded-md text-white hover:bg-yellow-100 transition-all duration-100">
                                <IconBox className={"icon-shopping-cart-white"} />
                                <p>Continue Shoping</p>
                            </button>
                            <button type={"submit"} className="flex flex-row items-center gap-2 max-w-fit text-base md:text-xl font-[600] traking-[0px] bg-primary px-2 md:px-4 py-1 md:py-2 rounded-md text-white hover:bg-yellow-100 transition-all duration-100">
                                <IconBox className={"icon-edit text-white"} />
                                <p>Update</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="col-span-2 lg:col-span-1 max-h-[500px] min-w-[320px] rounded-[20px] bg-white border-[1px] boder-gray-200 flex flex-col justify-between gap-1 p-6 lg:gap-4 shadow-sm shadow-gray-200">
                    <div className=" flex justify-between">
                        <p className="text-base xl:text-lg font-[600] text-gray-500">Subtotal:</p>
                        <p className="text-lg xl:text-xl font-[600] text-primary">86.5$</p>
                    </div>
                    <hr/>
                    <div className=" flex justify-between">
                        <p className="text-base xl:text-lg font-[600] text-gray-500">Shipping</p>
                        <p className="text-lg xl:text-xl font-[600]">Free Shipping</p>
                    </div>
                    <div className=" flex justify-between">
                        <p className="text-base xl:text-lg font-[600] text-gray-500">Estimated For:</p>
                        <p className="text-lg xl:text-xl font-[600] ">United Kingdom</p>
                    </div>
                    <hr/>
                    <div className=" flex justify-between">
                        <p className="text-base xl:text-lg font-[600] text-gray-500">Total:</p>
                        <p className="text-lg xl:text-xl font-[600] text-primary">826.5$</p>
                    </div>
                    <button type={"submit"}
                            className="text-base md:text-xl font-[600] traking-[0px] bg-primary px-2 md:px-4 py-1 md:py-2 rounded-md text-white hover:bg-yellow-100 transition-all duration-100">Proceed
                        For Checkout
                    </button>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-2 border-[1px] border-gray-200 rounded-[15px] p-4 flex flex-col gap-4">
                    <p className="text-lg font-[600] text-gray-400">Calculate Shipping</p>
                    <p className="">Flat Rate: <span className="text-md mx-2 text-primary font-[600]">5%</span></p>
                    <form action={"#"} className="flex flex-col gap-4 md:gap-6">
                        <div
                            className="w-full focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-md border-[1px] border-gray-200 py-3 px-4">
                            <label htmlFor="country" className="hidden"></label>
                            <select name="country" id="country"
                                    className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium border-none">
                                <option>State / Country</option>
                                <option>Iran</option>
                                <option>United State</option>
                            </select>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                            <div
                                className="w-full md:w-auto focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-md border-[1px] border-gray-200 py-3 px-4">
                                <label htmlFor="city" className="hidden"></label>
                                <input name="city" id="city" type="text" placeholder="City / Town"
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-md border-[1px] border-gray-200 py-3 px-4 w-full">
                                <label htmlFor="postal-zip" className="hidden"></label>
                                <input name="postal-zip" id="postal-zip" type="text" placeholder="Postcode / Zip"
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-[30px] items-start justify-center p-6 rounded-[15px] border-[1px] border-gray-200">
                    <div className="font-quickSand text-heading4">Apply Coupon</div>
                    <div className="font-lato text-medium text-gray-400">Using A Promo Code?</div>
                    <div className="focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-4 items-center justify-between shadow-c rounded-md border-[1px] border-gray-200 w-full">
                        <div className="flex gap-4 flex-1 w-full">
                            <label htmlFor="coupon-code" className="hidden"></label>
                            <input name="coupon-code" id="coupon-code" type="text" placeholder="Coupon Code" className="px-4 w-full placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <button className="font-quickSand text-heading6 bg-primary rounded-r-md text-white p-3 px-6">Apply</button>
                    </div>
                </div>
            </Section>
        </>
    );
};
import {IconBox, ImageVeiw, Section} from "@/components";
import Link from "next/link";
import {RecentlyAddedMock} from "@/mock/RecentlyAdded";

export default function CheckOut(){
    return(
        <>
            <Section>
                <h1 className="text-heading2 font-quickSand">Checkout</h1>
                <div className="text-heading5 text-gray-500 mt-4">There are
                    <span className="text-green-200 text-heading4"> 3 </span> products in your cart
                </div>
            </Section>
            <form className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                    <div
                        className="text-medium text-gray-500 bg-white flex gap-[7px] py-[13px] items-center justify-center shadow-c rounded-[10px] border-[1px] border-gray-200">
                        <IconBox className={"icon-user"} size={24}/>
                        <div>Already have an account?</div>
                        <Link href={"#"} className="text-green-200">Click here to login</Link>
                    </div>
                    <div
                        className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 min-h-[52px]">
                        <div className="flex gap-[7px] ml-7">
                            <ImageVeiw src={"/assets/icons/fi-rs-label%201.svg"} width={16} height={16}
                                       alt={"unanimous user"}/>
                            <label htmlFor="coupon-code" className="hidden"></label>
                            <input name="coupon-code" id="coupon-code" type="text" placeholder="Coupon Code"
                                   className="w-full placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <button
                            className="font-quickSand text-heading6 bg-blue-300 h-full min-h-[52px] rounded-r-[10px] text-white px-7">Apply
                            Coupon
                        </button>
                    </div>
                    <div>
                        <p className="text-xl md:text-3xl font-semibold my-2 md:my-4">Billing Details</p>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 md:gap-5">
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="fist-name" className="hidden"></label>
                                <input name="fist-name" id="fist-name" type="text" placeholder="First name*" required
                                       className="autofill:bg-red w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="last-name" className="hidden"></label>
                                <input name="last-name" id="last-name" type="text" placeholder="Last name*" required
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="address" className="hidden"></label>
                                <input name="address" id="address" type="text" placeholder="Address*" required
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="address-line2" className="hidden"></label>
                                <input name="address-line2" id="address-line2" type="text" placeholder="Address line 2*"
                                       required
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="country" className="hidden"></label>
                                <select name="country" id="country" required
                                        className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium border-none">
                                    <option>State / Country*</option>
                                    <option>Iran</option>
                                    <option>United State</option>
                                </select>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="city" className="hidden"></label>
                                <input name="city" id="city" type="text" placeholder="City / Town" required
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="postal-zip" className="hidden"></label>
                                <input name="postal-zip" id="postal-zip" type="text" placeholder="Postcode / Zip"
                                       required
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="phone-number" className="hidden"></label>
                                <input name="phone-number" id="phone-number" type="tel" placeholder="Phone number"
                                       required
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="email" className="hidden"></label>
                                <input name="email" id="email" type="email" placeholder="Email" required
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                <label htmlFor="company" className="hidden"></label>
                                <input name="company" id="company" type="text" placeholder="Company"
                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <div
                                className="col-span-2 sm:col-span-4  focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 min-h-[210px]">
                                <label htmlFor="information" className="hidden"></label>
                                <textarea name="information" id="information" placeholder="Additional information"
                                          className="resize-none w-full h-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"></textarea>
                            </div>
                            <div
                                className="col-span-2 sm:col-span-4  bg-white flex gap-[7px] items-center justify-start text-gray-500">
                                <input name="create-account" id="create-account" type="checkbox"
                                       className="accent-green-200 h-6"/>
                                <label htmlFor="create-account">Create an account ?</label>
                            </div>
                            <div
                                className="col-span-2 sm:col-span-4 bg-white flex gap-[7px] items-center justify-start text-gray-500">
                                <input name="diff-address" id="diff-address" type="checkbox"
                                       className="accent-green-200 h-6"/>
                                <label htmlFor="diff-address">Ship to a different address?</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 max-w-[500px] mx-auto flex flex-col justify-between gap-12">
                    <div className="flex flex-col gap-6 h-fit border-[1px] border-gray-200 rounded-[10px] p-5">
                        <div className=" mb-[14px] pb-[14px] border-b-2 flex justify-between items-center">
                            <p className="text-heading4 font-quickSand">Your Orders</p>
                            <p className="text-heading5 font-quickSand text-gray-500">SubTotal</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {
                                RecentlyAddedMock.map((item, index) => {
                                    return (
                                        <div className="grid grid-cols-6 items-center w-full">
                                            <div className="col-span-4 flex gap-3 lg:gap-5 items-center" key={index}>
                                                <ImageVeiw src={item.image} alt={"#"} width={100} height={90}
                                                           className={"block aspect-square w-[50px] md:w-[90] flex-shrink-0 flex-grow-0"}/>
                                                <div className="flex flex-col justify-between">
                                                    <div
                                                        className="font-quickSand text-sm font-[600] xl:text-base text-blue-300 mb-1">{item.title}</div>
                                                </div>
                                            </div>
                                            <div className="col-span-1 text-2xl font-bold text-gray-500 text-center">
                                                x2
                                            </div>
                                            <div className="col-span-1 text-2xl font-bold text-primary text-end">
                                                2.5$
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-quickSand text-heading3">Payment</p>
                        <div className="flex flex-col items-start gap-3">
                            <div className="flex items-center justify-start gap-2">
                                <input type="radio" name="payment-method" id="direct-transfer" value="direct-transfer"
                                       className="accent-green-200 w-4 h-4" checked/>
                                <label className="font-lato font-[600] text-lg text-gray-500" htmlFor="direct-transfer">Direct
                                    bank transfer</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input type="radio" name="payment-method" id="on-delivery" value="direct-transfer"
                                       className="accent-green-200 w-4 h-4"/>
                                <label className="font-lato font-[600] text-lg text-gray-500" htmlFor="on-delivery">Cash
                                    on delivery</label>
                            </div>
                            <ImageVeiw src={"/assets/images/payment-method%202.png"} alt={"payment method"} width={307}
                                       height={21} className="w-full"/>
                        </div>
                    </div>
                    <button type="submit" className="px-[50px] py-3 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                        <div className="font-quickSand text-heading6 text-white">Place an Order</div>
                        <ImageVeiw src={"/assets/icons/fi-rs-sign-out%201.svg"} alt={"arrow right"} width={16} height={16}/>
                    </button>
                </div>
            </form>
        </>
    )
}
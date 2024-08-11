import {IconBox, ImageVeiw, Section} from "@/components";
import Link from "next/link";
import {useBasket} from "@/hooks/use-basket";
import InputField from "@/components/common/ui/form/inputField";
import {useForm} from "react-hook-form";
import {listAllCountries} from "@/mock/listAllCountries";

interface formType{
    coupon: string
    first_name: string,
    last_name: string,
    address: string
    zip_code: string,
    phone: number,
    email: string
    information: string,
    is_new_user: false,
    payment: boolean,
    country: string
}
export default function CheckOut(){
    const {basketItems} = useBasket()
    const {register, handleSubmit, formState:{errors}} = useForm()

    const formHandler  = (data:any)=>{
        console.log(data)
    }

    return(
        <>
            <Section>
                <h1 className="text-heading2 font-quickSand">Checkout</h1>
                <div className="text-heading5 text-gray-500 mt-4">There are
                    <span className="text-green-200 text-heading4">{basketItems.length}</span> products in your cart
                </div>
            </Section>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="text-medium text-gray-500 bg-white flex gap-[7px] py-[13px] items-center justify-center shadow-c rounded-[10px] border-[1px] border-gray-200">
                            <IconBox className={"icon-user"} size={24}/>
                            <div>Already have an account?</div>
                            <Link href={"/login"} className="text-green-200">Click here to login</Link>
                        </div>
                        <div className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 min-h-[52px]">
                            <InputField register={register("coupon")} errors={errors}/>
                            <button className="font-quickSand text-nowrap text-heading6 bg-blue-300 h-full min-h-[52px] rounded-r-[10px] text-white px-7">Apply Coupon</button>
                        </div>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <p className="text-xl md:text-3xl font-semibold my-2 md:my-4 col-span-full">Billing Details</p>
                        <InputField register={register("first_name", {required: true})} errors={errors} {...{placeholder:"enter your First Name"}} label={"Name"}/>
                        <InputField register={register("last_name", {required: true})} errors={errors} {...{placeholder:"enter your userName"}} label={"Family"}/>
                        <InputField register={register("address", {required: true})} errors={errors} {...{placeholder:"enter your address"}} label={"Address"}/>
                        <InputField register={register("zip_code", {required: true})} errors={errors} {...{placeholder:"Enter Your Phone Number"}} label={"Zip Code"}/>
                        <InputField register={register("phone", {required: true})} errors={errors} {...{placeholder:"Enter Your Phone Number"}} label={"Phone Number"} type={"number"}/>
                        <InputField register={register("email", {required: true})} errors={errors} {...{placeholder:"Enter Your Email"}} label={"Email"} type={"email"}/>
                        <div className="max-h-[200px] overflow-y-scroll col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-sm border border-gray-200 py-2.5 px-8">
                            <label htmlFor="country" className="hidden"></label>
                            <select {...register("country")} name="country" id="country" required className="w-full max-h-full overflow-y-scroll bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium border-none">
                                {
                                    listAllCountries.map((country, index)=>{
                                        return(
                                            <option key={index}>{country.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-span-full focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 min-h-[210px]">
                            <textarea {...register("information")} name="information" id="information" placeholder="Additional information" className="resize-none w-full h-full bg-transparent placeholder-gray-400 focus:outline-none text-medium"></textarea>
                        </div>
                        <div className="col-span-full  bg-white flex gap-[7px] items-center justify-start text-gray-500">
                            <input {...register("is_new_user")} name="create-account" id="create-account" type="checkbox" className="accent-green-200 h-6"/>
                            <label htmlFor="create-account">Create an account ?</label>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 max-w-[500px] mx-auto flex flex-col justify-between gap-12">
                    <div className="flex flex-col gap-6 h-fit border-[1px] border-gray-200 rounded-[10px] p-5">
                        <div className=" mb-[14px] pb-[14px] border-b-2 flex justify-between items-center gap-4 md:gap-8">
                            <p className="text-heading4 font-quickSand">Your Orders</p>
                            <p className="text-heading5 font-quickSand text-gray-500">SubTotal</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {
                                basketItems &&
                                basketItems.map((item, index)=>{
                                    return(
                                        <div className="grid grid-cols-6 items-center w-full">
                                            <div className="col-span-4 flex gap-3 lg:gap-5 items-center" key={index}>
                                                <ImageVeiw src={item.product.data.attributes.thumbnail?.data?.attributes.url} alt={"#"} width={100} height={90} className={"block aspect-square w-[50px] md:w-[90] flex-shrink-0 flex-grow-0"}/>
                                                <div className="flex flex-col justify-between">
                                                    <div className="font-quickSand text-sm font-[600] xl:text-base text-blue-300 mb-1">{item.product.data.attributes.title}</div>
                                                </div>
                                            </div>
                                            <div className="col-span-1 text-2xl font-bold text-gray-500 text-center">x {item.quantity}</div>
                                            <div className="col-span-1 text-2xl font-bold text-primary text-end">{(item.quantity * item.product.data?.attributes.price ?? item.product.data.attributes.price)}</div>
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
                                <input {...register("payment")} type="radio" name="payment-method" id="direct-transfer" value="direct-transfer" className="accent-green-200 w-4 h-4" checked/>
                                <label className="font-lato font-[600] text-lg text-gray-500" htmlFor="direct-transfer">Direct bank transfer</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input {...register("payment")} type="radio" name="payment-method" id="on-delivery" value="direct-transfer"
                                       className="accent-green-200 w-4 h-4"/>
                                <label className="font-lato font-[600] text-lg text-gray-500" htmlFor="on-delivery">Cash on delivery</label>
                            </div>
                            <ImageVeiw src={"/assets/images/payment-method%202.png"} alt={"payment method"} width={307} height={21} className="w-full"/>
                        </div>
                    </div>
                    <button onClick={handleSubmit(formHandler)} type="submit" className="px-[50px] py-3 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                        <div className="font-quickSand text-heading6 text-white">Place an Order</div>
                        <ImageVeiw src={"/assets/icons/fi-rs-sign-out%201.svg"} alt={"arrow right"} width={16} height={16}/>
                    </button>
                </div>
            </div>
        </>
    )
}
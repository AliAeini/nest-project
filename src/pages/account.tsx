import {IconBox, ImageVeiw, Section} from "@/components";


export default function Account() {
    return (
        <Section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 flex flex-col gap-2.5 justify-between max-h-[470px] font-quickSand text-gray-500 text-heading6 mx-auto sm:ml-0">
                <div className="flex cursor-pointer gap-3.5 text-black px-8 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                    <ImageVeiw src={"/assets/icons/fi-rs-settings%201.svg"} alt={"image"} width={26} height={24}/>
                    <div className="text-base font-semibold">Account</div>
                </div>
                <div
                    className="flex cursor-pointer gap-3.5 text-black px-8 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                    <ImageVeiw src={"/assets/icons/fi-rs-settings 1.svg"} alt={"image"} width={26} height={24}/>
                    <div className="text-base font-semibold">Categories</div>
                </div>
                <div
                    className="flex cursor-pointer gap-3.5 text-black px-8 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                    <IconBox className={"icon-shopping-bag text-[27px]"} size={27}/>
                    <div className="text-base font-semibold">My Products</div>
                </div>
                <div
                    className="flex cursor-pointer gap-3.5 text-black px-8 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                    <IconBox className={"icon-marker text-[27px]"} size={27}/>
                    <div className="text-base font-semibold">Address</div>
                </div>
                <div
                    className="flex cursor-pointer gap-3.5 text-black px-8 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                    <IconBox className={"icon-user text-[27px]"} size={27}/>
                    <div className="text-base font-semibold">Account</div>
                </div>
                <div
                    className="flex cursor-pointer gap-3.5 text-black px-8 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                    <ImageVeiw src={"/assets/icons/fi-rs-sign-out 1.svg"} alt={"image"} width={26} height={24}/>
                    <div className="text-base font-semibold">Sign Out</div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 gap-4">
                <div className="text-heading3 font-quickSand text-blue-300 col-span-full mb-4">Your Orders</div>
                <div className="grid grid-cols-5 justify-between gap-2 py-6 md:py-8 border-b">
                    <div className="text-heading5 text-blue-300 font-quickSand gap">Order ID</div>
                    <div className="col-span-2 sm:col-span-1 text-heading5 text-blue-300 font-quickSand">Date</div>
                    <div className="text-heading5 text-blue-300 font-quickSand">Status</div>
                    <div className="text-heading5 text-blue-300 font-quickSand hidden sm:inline">Total</div>
                    <div className="text-heading5 text-blue-300 font-quickSand text-end">Actions</div>
                </div>
                <div>
                    <div className="grid grid-cols-5 justify-between gap-2 py-4 items-center md:py-6">
                        <div className="text-heading6 text-gray-500">#1357</div>
                        <div className="col-span-2 sm:col-span-1 text-heading6 text-gray-500">March 15, 2021</div>
                        <div className="text-heading6 text-yellow-200">Processing</div>
                        <div className="text-heading6 text-gray-500 hidden sm:inline">$125.00 for 2 item</div>
                        <button className="text-heading6 text-green-200 text-end">View</button>
                    </div>
                    <div className="grid grid-cols-5 justify-between gap-2 py-4 items-center md:py-6">
                        <div className="text-heading6 text-gray-500">#1357</div>
                        <div className="col-span-2 sm:col-span-1 text-heading6 text-gray-500">March 15, 2021</div>
                        <div className="text-heading6 text-yellow-200">Processing</div>
                        <div className="text-heading6 text-gray-500 hidden sm:inline">$125.00 for 2 item</div>
                        <button className="text-heading6 text-green-200 text-end">View</button>
                    </div>
                    <div className="grid grid-cols-5 justify-between gap-2 py-4 items-center md:py-6">
                        <div className="text-heading6 text-gray-500">#1357</div>
                        <div className="col-span-2 sm:col-span-1 text-heading6 text-gray-500">March 15, 2021</div>
                        <div className="text-heading6 text-yellow-200">Processing</div>
                        <div className="text-heading6 text-gray-500 hidden sm:inline">$125.00 for 2 item</div>
                        <button className="text-heading6 text-green-200 text-end">View</button>
                    </div>
                    <div className="grid grid-cols-5 justify-between gap-2 py-4 items-center md:py-6">
                        <div className="text-heading6 text-gray-500">#1357</div>
                        <div className="col-span-2 sm:col-span-1 text-heading6 text-gray-500">March 15, 2021</div>
                        <div className="text-heading6 text-yellow-200">Processing</div>
                        <div className="text-heading6 text-gray-500 hidden sm:inline">$125.00 for 2 item</div>
                        <button className="text-heading6 text-green-200 text-end">View</button>
                    </div>
                </div>
            </div>
        </Section>
    )
        ;
};
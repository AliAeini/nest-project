import {ImageVeiw} from "@/components";

export default function ForgetPassword() {
    return (
        <section className="container flex justify-center mt-[100px] mb-[270px] font-lato">
            <div>
                <ImageVeiw src={"/assets/icons/touch-id 1.svg"} alt={"pic"} width={80} height={80} className="mb-9"/>
                <div className="max-w-[450px] flex-grow">
                    <h1 className="text-2xl md:text-heading2 font-quickSand">Forgot your password?</h1>
                    <p className="text-sm md:text-medium text-gray-400 my-2 md:my-4">Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Email or Username" aria-label="email" className="text-medium border rounded-xl px-4 py-2 md:py-4 w-full"/>
                        <div className="flex gap-5">
                            <input type="number" placeholder="Security Code *" aria-label="securityCode" className="text-medium border rounded-xl px-4 py-2 md:py-4 w-full"/>
                            <div className="rounded-xl px-4 bg-green-150 flex items-center justify-center text-xl md:text-heading4">
                                <span className="text-[#3F7C35]">6</span>
                                <span className="text-[#7E396B]">8</span>
                                <span className="text-[#ADA05B]">8</span>
                                <span className="text-[#C14A83]">6</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-5">
                            <div className="flex gap-2 items-center">
                                <label className="flex items-center cursor-pointer gap-3">
                                    <input type="checkbox" name="checkbox" checked disabled className="w-[18px] h-[18px] cursor-pointer"/>
                                    <span className="text-small text-gray-400">I agree to terms & Policy.</span>
                                </label>
                            </div>
                            <p className="text-heading-sm text-gray-400 cursor-pointer">Lean more</p>
                        </div>
                        <button className="py-3 md:py-4 px-11 bg-blue-300 text-white rounded-xl font-quickSand font-semibold tracking-[1px]">Reset password</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
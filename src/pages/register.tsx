import {ImageVeiw, Section} from "@/components";


export default function Register() {
    return (
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between font-lato">
            <div className="col-span-1 max-w-[480px] mx-auto">
                <h1 className="text-heading2 mb-2 font-quickSand">Create an Account</h1>
                <p className="text-medium text-gray-400 mb-10">Your personal data will be used to support your
                    experience throughout this website, to manage access to your account, and for other purposes
                    described in our privacy policy</p>
                <div className="flex flex-col gap-5">
                    <input type="text" aria-label="username" placeholder="Username"
                           className="text-medium border rounded-xl px-9 py-3 sm:py-4 w-full"/>
                    <input type="email" aria-label="email" placeholder="Email"
                           className="text-medium border rounded-xl px-9 py-3 sm:py-4 w-full"/>
                    <input type="password" aria-label="password" placeholder="Password"
                           className="text-medium border rounded-xl px-9 py-3 sm:py-4 w-full"/>
                    <input type="password" aria-label="password" placeholder="Confirm password"
                           className="text-medium border rounded-xl px-9 py-3 sm:py-4 w-full"/>
                    <div className="flex gap-5">
                        <input type="number" aria-label="securityCode" placeholder="Security code *"
                               className="text-medium border rounded-xl px-9 py-3 sm:py-4 w-full"/>
                        <div
                            className="rounded-xl w-[115px] py-2 sm:py-3 bg-green-150 flex items-center justify-center">
                            <p className="text-heading4">
                                <span className="text-[#3F7C35]">6</span>
                                <span className="text-[#7E396B]">8</span>
                                <span className="text-[#ADA05B]">8</span>
                                <span className="text-[#C14A83]">6</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-5 sm:mb-10">
                        <div className="flex gap-2 items-center">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" name="checkbox" checked disabled
                                       className="asdf w-[18px] h-[18px] mr-3 cursor-pointer checked:bg-red"/>
                                <span className="text-small text-gray-500">I agree to terms & Policy.</span>
                            </label>
                        </div>
                        <p className="text-heading-sm text-gray-400 cursor-pointer">Lean more</p>
                    </div>
                    <button className="px-11 py-3 sm:py-4 bg-blue-300 tracking-[1px] font-semibold text-white rounded-xl font-quickSand">Submit & Register</button>
                </div>
            </div>
            <div className="col-span-1 w-full flex h-full items-center">
                <div className="flex-grow flex flex-col gap-5 items-center border rounded-xl p-5 h-fit max-w-[480px] mx-auto">
                    <button
                        className="w-full py-2.5 sm:py-4 text-heading6 bg-[#1877F2] text-white rounded-xl flex gap-4 justify-center items-center">
                        <span><ImageVeiw src={"/assets/icons/Facebook Logo.svg"} alt={"pic"} width={30}
                                         height={30}/></span>Continue with Facebook
                    </button>
                    <button
                        className="w-full py-2.5 sm:py-4 text-heading6 bg-white text-black rounded-xl flex gap-4 justify-center items-center border">
                        <span><ImageVeiw src={"/assets/icons/Google Logo.svg"} alt={"pic"} width={30}
                                         height={30}/></span>Continue with Google
                    </button>
                    <button
                        className="w-full py-2.5 sm:py-4 text-heading6 bg-black text-white rounded-xl flex gap-4 justify-center items-center">
                        <span><ImageVeiw src={"/assets/icons/Apple Logo.svg"} alt={"pic"} width={30}
                                         height={30}/></span>Continue with Apple
                    </button>
                </div>
            </div>
        </Section>
    );
}
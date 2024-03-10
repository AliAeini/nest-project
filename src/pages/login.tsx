import {IconBox, ImageVeiw, Section} from "@/components";
import Link from "next/link";


export default function Login() {
    return (
        <Section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1 text-end">
                <ImageVeiw src={"/assets/images/Rectangle 39.png"} width={512} height={601} alt={"non"} className="rounded-lg"/>
            </div>
            <div className="col-span-1 mx-auto h-full flex flex-col justify-center">
                <h1 className="text-heading3 font-quickSand">Login</h1>
                <p className="text-medium text-gray-400 mb-5">Don't have an account? <Link className="text-green-200 cursor-pointer hover:text-green-600" href={"register"}>Create here</Link></p>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Username or Email *" aria-label="email" className="text-medium border rounded-xl px-9 py-2 sm:py-4 w-full"/>
                    <input type="password" placeholder="Your password *" aria-label="password" className="text-medium border rounded-xl px-9 py-2 sm:py-4 w-full"/>
                    <div className="flex gap-5 justify-between">
                        <input type="number" placeholder="Security code *" aria-label="securityCode" className="text-medium border rounded-xl px-9 py-2 sm:py-4 w-full"/>
                        <div className="rounded-xl w-[115px] sm:h-[57px] py-2 sm:py-3 bg-green-150 flex items-center justify-center ">
                            <p className="text-heading4"><span className="text-[#3F7C35]">6</span><span
                                className="text-[#7E396B]">8</span><span className="text-[#ADA05B]">8</span><span
                                className="text-[#C14A83]">6</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2 items-center">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" name="checkbox" className="w-[18px] h-[18px] mr-3 cursor-pointer"/>
                                <IconBox className={"icon-user"}/>
                                <span className="text-small text-green-200">Remember me</span>
                            </label>
                        </div>
                        <Link className="text-heading-sm text-gray-400 cursor-pointer hover:text-primary" href={"forgetPassword"}>Forgot password?</Link>
                    </div>
                    <button className="py-2 sm:py-4 px-11 bg-blue-300 text-white rounded-xl font-quickSand">Log in</button>
                </form>
            </div>
        </Section>
    );
};
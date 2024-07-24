import {ImageVeiw} from "@/components";
import {useForm} from "react-hook-form";
import InputField from "@/components/common/ui/form/inputField";


interface formData {
    username: string,
}
export default function ForgetPassword() {
    const {register, handleSubmit, formState:{errors}} = useForm<formData>()
    const onSubmitHandler = (data: formData)=>{
    }
    return (
        <section className="container flex justify-center mt-[100px] mb-[270px] font-lato">
            <div>
                <ImageVeiw src={"/assets/icons/touch-id 1.svg"} alt={"pic"} width={80} height={80} className="mb-9"/>
                <div className="max-w-[450px] flex-grow">
                    <h1 className="text-2xl md:text-heading2 font-quickSand">Forgot your password?</h1>
                    <p className="text-sm md:text-medium text-gray-400 my-2 md:my-4">Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
                    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-4">
                        <div className={"flex justify-between items-end gap-2 "}>
                            <div className={"flex-grow"}>
                                <InputField errors={errors} register={register("username", )} {...{placeholder:"enter your userName"}} type={"text"}/>
                            </div>
                            <button className={"p-2 bg-blue-300 rounded text-white font-[500]"}>Send Code</button>
                        </div>
                        <div className="flex justify-between items-center mb-5">
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center cursor-pointer gap-3">
                                    <input id={"policy"} type="checkbox" name="checkbox" className="w-[18px] h-[18px] cursor-pointer"/>
                                    <label htmlFor={"policy"} className="text-small text-gray-400">I agree to terms & Policy.</label>
                                </div>
                            </div>
                            <p className="text-heading-sm text-gray-400 cursor-pointer">Lean more</p>
                        </div>
                        <button className="py-2 md:py-3 px-11 bg-blue-300 text-white rounded-md font-quickSand font-semibold tracking-[1px]">Reset password</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
import {ImageVeiw, Section} from "@/components";
import Link from "next/link";
import {useForm} from "react-hook-form";
import InputField from "@/components/common/ui/form/inputField";
import {LoginApiCall} from "@/api/Auth";
import {useContext} from "react";
import {AuthContext} from "@/store/AuthContext";
import {useMutation} from "@tanstack/react-query";




interface formData {
    identifier: string,
    password: string,
    remember: boolean
}
export default function Login() {
    const {register, handleSubmit, formState:{errors}} = useForm<formData>()
    const AuthMutate = useMutation({mutationFn: LoginApiCall})
    const {login} = useContext(AuthContext)

    const onSubmitHandler = (data:formData)=>{
        AuthMutate.mutate(data, {onSuccess: (response)=> {
            login(response.jwt, response.user)
        }})
    }
    return (
        <Section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1 text-center mx-auto">
                <ImageVeiw src={"/assets/images/Rectangle 39.png"} width={512} height={601} alt={"non"} className="rounded-lg"/>
            </div>
            <div className="col-span-1 mx-auto h-full flex flex-col justify-center">
                <h1 className="text-heading3 font-quickSand">Login</h1>
                <p className="text-medium text-gray-400 mb-5">
                    Don't have an account?
                    <Link className="text-green-200 cursor-pointer hover:text-green-600" href={"register"}>Create here</Link></p>
                <form className="flex flex-col gap-4 md:min-w-[400px]" onSubmit={handleSubmit(onSubmitHandler)}>
                    <InputField errors={errors} register={register("identifier", {required: "email is required"})} {...{placeholder:"enter your email or username"}} label={"username"}/>
                    <InputField errors={errors} register={register("password", {required: "password is required", minLength: 6, maxLength: 12})} {...{placeholder:"enter your password"}} label={"password"} type={"password"}/>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center cursor-pointer">
                            <input {...register("remember")} id={"remember"} type="checkbox" name="checkbox" className="w-[18px] h-[18px] mr-3 cursor-pointer"/>
                            <label htmlFor={"remember"} className="text-small text-green-200">Remember me</label>
                        </div>
                        <Link className="text-heading-sm text-gray-400 cursor-pointer hover:text-primary" href={"forgetPassword"}>Forgot password?</Link>
                    </div>
                    <button type={"submit"} className="py-2 sm:py-3 px-11 bg-blue-300 text-white rounded-md font-quickSand">Log in</button>
                </form>
            </div>
        </Section>
    );
};
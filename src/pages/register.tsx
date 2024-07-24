import {ImageVeiw, Section} from "@/components";
import Link from "next/link";
import {useForm} from "react-hook-form";
import InputField from "@/components/common/ui/form/inputField";
import {useContext, useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import { AuthContext } from "@/store/AuthContext";
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import {ModalContext} from "@/store/ModalContext";
import Modal from "@/components/common/ui/modal/Modal";

interface formData {
    username: string,
    email: string,
    password: string,
    repeated_password: string,
    check_policy: boolean
}

export default function Register() {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<formData>({mode: "onTouched"})
    const password = watch("password")
    const repeated_password = watch("repeated_password")
    const [statePassword, setStatePassword] = useState(false)
    const {login} = useContext(AuthContext)
    const AuthMutate = useMutation({mutationFn: registerApiCall})
    const router = useRouter()
    const policy = watch("check_policy")
    const {ModalState, openModalHandler, closeModalHandler} = useContext(ModalContext)

    const onSubmitHandler = (data:formData)=>{
        if(password == repeated_password && watch("check_policy")){
            AuthMutate.mutate(data, {onSuccess: (response)=>{
                    login(response.jwt, response.user)
                    toast.success("Account Created Sucssesfully")
                    router.push("/")
                }})
        }
    }
    useEffect(() => {
        if(password == repeated_password){
            setStatePassword(false)
        }else{
            setStatePassword(true)
        }
    }, [password, repeated_password]);

    return (
        <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between font-lato">
            {
                ModalState &&
                <Modal title={"policy"} onClose={()=>closeModalHandler()}>
                    <div className="p-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequuntur doloribus id in modi nam nesciunt non omnis repellat.</p>
                    </div>
                </Modal>
            }
            <div className="col-span-1 max-w-[480px] mx-auto">
                <h1 className="text-heading2 mb-2 font-quickSand">Create an Account</h1>
                <p className="text-medium text-gray-400 mb-10">Your personal data will be used to support your
                    experience throughout this website, to manage access to your account, and for other purposes
                    described in our privacy policy</p>
                <form onSubmit={handleSubmit(onSubmitHandler)}  className="flex flex-col gap-5">
                    <InputField errors={errors} register={register("username", {required: "username is required"})} {...{placeholder:"enter your name"}} label={"username"}/>
                    <InputField errors={errors} register={register("email", {required: "email is required"})} {...{placeholder:"enter your email"}} label={"email"} type={"email"}/>
                    <InputField errors={errors} invalid={statePassword} register={register("password", {required: "password is required", minLength: 6, maxLength: 12})} {...{placeholder:"enter your password"}} label={"password"} type={"password"}/>
                    <InputField errors={errors} invalid={statePassword} register={register("repeated_password", {required: "password is requierd", minLength: 6, maxLength: 12})} {...{placeholder:"repeat your password"}} label={"repeated_password"} type={"password"}/>
                    <div className="flex justify-between items-center mb-5 sm:mb-10">
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center cursor-pointer">
                                <input type="checkbox" className="w-[18px] h-[18px] mr-3 cursor-pointer checked:bg-red" id={"check_policy"} {...register("check_policy")}/>
                                <label className={`${!policy ? "text-red" : "text-gray-500"} text-small`} htmlFor={"check_policy"}>I agree to terms & Policy.</label>
                            </div>
                        </div>
                        <p onClick={()=>openModalHandler()} className="text-heading-sm text-gray-400 cursor-pointer hover:text-primary">Lean more</p>
                    </div>
                    <Link href={"/login"} className={"text-gray-400 font-bold hover:text-primary"}>Are have an account?</Link>
                    <button className="px-11 py-2 sm:py-3 bg-blue-300 tracking-[1px] font-semibold text-white rounded-xl font-quickSand">Submit & Register</button>
                </form>
            </div>
            <div className="col-span-1 w-full flex h-full items-center">
                <div className="flex-grow flex flex-col gap-5 items-center border rounded-xl p-5 h-fit max-w-[480px] mx-auto">
                    <button className="w-full py-2 sm:py-3 text-heading6 bg-[#1877F2] text-white rounded-xl flex gap-4 justify-center items-center">
                        <span><ImageVeiw src={"/assets/icons/Facebook Logo.svg"} alt={"pic"} width={30}
                                         height={30}/></span>Continue with Facebook
                    </button>
                    <button className="w-full py-2 sm:py-3 text-heading6 bg-white text-black rounded-xl flex gap-4 justify-center items-center border">
                        <span><ImageVeiw src={"/assets/icons/Google Logo.svg"} alt={"pic"} width={30}
                                         height={30}/></span>Continue with Google
                    </button>
                    <button className="w-full py-2 sm:py-3 text-heading6 bg-black text-white rounded-xl flex gap-4 justify-center items-center">
                        <span><ImageVeiw src={"/assets/icons/Apple Logo.svg"} alt={"pic"} width={30}
                                         height={30}/></span>Continue with Apple
                    </button>
                </div>
            </div>
        </Section>
    );
}
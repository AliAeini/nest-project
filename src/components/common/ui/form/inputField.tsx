import {UseFormRegisterReturn, FieldErrors} from "react-hook-form";
import {useId, useState} from "react";
import {IconBox} from "@/components";


interface Props extends React.HTMLAttributes<HTMLInputElement>{
    type?: "text" | "number" | "email" | "password" | "tel",
    label?: string,
    register: UseFormRegisterReturn,
    errors: FieldErrors<any>,
    invalid?: boolean
}

export default function InputField({type = "text", label, register, errors, invalid, ...rest}: Props) {
    const id = useId()
    let hasError = false
    const [showPass, setShowPass] = useState(false)

    if(errors && errors[register.name]){
        hasError = true
    }

    return (
        <div className={""}>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={`flex justify-between items-center p-1 md:p-2 border ${hasError || invalid ? "border-red" : "focus:border-primary"} rounded w-full`}>
                <input {...rest} id={id} type={type == "password" && showPass ? "text" : type == "password" && !showPass ? "password" : type} className={` w-full outline-0`} {...register}/>
                {type == "password" && <IconBox className={"icon-eye"} size={18} onClick={()=>setShowPass((prevState)=> !prevState)}/>}
            </div>
            <span className={"text-sm text-red"}>{errors && errors[register.name] && errors[register.name]?.message as string}</span>
        </div>
    )
}
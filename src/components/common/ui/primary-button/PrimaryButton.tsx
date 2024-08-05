import {IconBox} from "@/components";
import Link from "next/link";

interface Props{
    title: string
    icon?: string
    onClick?: ()=> void
    width?: string
    type?: "button" | "submit"
    href?: string | null
    font_size?: number
    selected?: boolean
}
export function PrimaryButton({title, icon, onClick, width, type = "button", href = null, font_size = 16, selected= false}: Props) {
   if(href){
       return (
           <Link href={href} style={{width: width, fontSize: font_size + "px"}} onClick={onClick} type={type} className="flex justify-center font-[600] bg-primary px-2 md:px-4 py-1 md:py-2 rounded text-white hover:bg-yellow-100 transition-all duration-100">
               <IconBox className={`icon-${icon}`} title={title}/>
           </Link>
       );
   }
    return (
        <button style={{width: width, fontSize: font_size}} onClick={onClick} type={type} className={`${selected ? "bg-yellow-100 hover: bg-primary" : "bg-primary hover:bg-yellow-100"} flex justify-center font-[600] px-2 md:px-4 py-1 md:py-2 rounded text-white hover:bg-yellow-100 transition-all duration-100`}>
            <IconBox className={`icon-${icon}`} title={title} size={font_size + 4}/>
        </button>
    );
}
import {ReactNode} from "react";
import {IconBox} from "@/components";

interface Props {
    children: ReactNode,
    title: string,
    onClose: () => void
};

export default function Modal({children, title, onClose}: Props) {
    return(
        <div className={"fixed top-0 left-0 w-screen h-screen z-50 bg-[#333] bg-opacity-70 flex justify-center items-center"} onClick={onClose}>
            <div className={"w-full md:max-w-[800px] min-h-[300px] max-h-[350px] overflow-auto rounded-md bg-white m-2 relative"} onClick={(e)=>{e.stopPropagation()}}>
                <div className={"flex justify-between items-center border-b border-b-gray-300 w-full p-3 bg-gray-100 sticky top-0 left-0"}>
                    <IconBox className={"icon-cross"} size={18} onClick={onClose}/>
                    <p className={"text-lg font-[400] tracking-tight"}>{title}</p>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
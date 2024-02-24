import Link from "next/link";
import {ImageVeiw} from "@/components";

export function Logo() {
    return (
       <Link href={"/"}>
           <ImageVeiw src={"/assets/images/Logo.png"} alt={"logo"} width={242} height={66}  className={"w-[117px] lg:w-[242px]"}/>
       </Link>
    );
}


import Link from "next/link";
import {IconBox, ImageVeiw, Section} from "@/components";

export default function notFound (){
    return (
            <Section className="flex flex-col justify-center items-center gap-6">
                <ImageVeiw className="flex-grow flex-shrink max-w-[300px] aspect-[3/2]" src={"/assets/images/404 1.png"} alt={"logo 404"} width={200} height={200}/>
                <h1 className="text-heading3 md:text-display2">Page Not Found</h1>
                <p className="text-medium text-gray-500 text-center">
                    The link you clicked may be broken or the page may have been removed. visit the
                    <Link className="text-green-200 text-medium" href={"#"}>Homepage </Link>
                    or
                    <Link className="text-green-200 text-medium" href={"#"}> Contact</Link>
                    us about the problem
                </p>
                <form name="search-form" action="#" method="post" className="flex items-center border-gray-500 text-medium border rounded-xl py-3">
                    <button id="text" className="mr-3 pt-2 pl-[15px]" type="submit">
                        <IconBox className={"icon-search text-[24px]"} size={24}/>
                    </button>
                    <input type="text" name="search_text" placeholder="Enter your keywords..." className="w-[280px] text-gray-400 border-gray-300 focus:outline-none "/>
                </form>
            </Section>
    )
}
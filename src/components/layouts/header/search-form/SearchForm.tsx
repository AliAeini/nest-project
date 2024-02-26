import {IconBox} from "@/components";
import {twMerge} from "tailwind-merge";

interface Props{
    inputclassName?: string
}
export function SearchForm({inputclassName = ""}: Props) {
    return (
        // TODO
        <form name="search-form" action="#" method="post" className="flex items-center justify-center">
            <input type="text" name="search_text" placeholder="Search for items" className={twMerge("py-[8px] text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none", inputclassName)}/>
            <button type="submit" className="flex flex-col items-center hover:text-primary"><IconBox className={"icon-search"} size={23}/></button>
        </form>
    );
}


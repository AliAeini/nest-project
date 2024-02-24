import {IconBox} from "@/components";

interface Props{
    inputclassName?: string
}
export function SearchForm({inputclassName = ""}: Props) {
    return (
        // TODO
            <form name="search-form" action="#" method="post" className="flex items-center">
                <input type="text" name="search_text" placeholder="Search for items" className="py-[15px] text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none"/>
                <button type="submit"><IconBox className={"icon-search"}/></button>
            </form>
    );
}


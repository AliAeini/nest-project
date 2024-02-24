import Link from "next/link";
import {IconBox} from "@/components";
import {BrowsCateguryMock} from "@/mock/BrowsCateguryMock";
import {MenuLinks} from "@/mock/MenuLinks";

export function Menu() {
    return (
        <>
            <div id="all_categories" className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                <IconBox className={"icon-apps"} size={24} title={"Browse All Categories"} titleClassName={"text-medium"}/>
                <IconBox className={"icon-angle-small-down"} size={24}/>
                <div id="all_categories_box" className="hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                        {
                            BrowsCateguryMock.map((item, index)=>{
                                return<IconBox key={index} link={item.link} className={item.icon}  path={item.path} title={item.title} size={30} titleClassName={"text-heading-sm text-blue-300"} linkClass={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"}/>
                            })
                        }
                        <div id="more_categories" className="cursor-pointer flex gap-4 items-center justify-center w-full mt-[17px]">
                            <IconBox className={"icon-add"} size={24}/>
                            <div className="text-heading-sm text-blue-300">More Categories</div>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                    {
                        MenuLinks.map((item, index) =>{
                            return(
                                <li key={index}>
                                    {
                                        item.icon ? <IconBox className={item.icon} title={item.title} link={item.link} size={24}/>
                                            :
                                            <Link href={item.link}>{item.title}</Link>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    );
}


import Link from "next/link";
import {IconBox} from "@/components";

interface Props{
    list_categories:Array<{
        title: string,
        link: string,
        icon:string
        path: number,
    }>
    menuLinks: Array<
        {
            icon: string,
            title:string,
            link: string
        }
    >,
    menuToggle: ()=>{}
    menuState: boolean
}
export function Menu( {menuToggle, menuState, menuLinks, list_categories}:Props) {
    return (
        <>
            <div id="all_categories" className="hidden lg:flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-3 py-2 rounded-[5px] items-center">
                <IconBox className={"icon-apps"} size={24} title={"Browse All Categories"} titleClassName={"text-medium"} menuToggle={menuToggle}/>
                <IconBox className={`icon-angle-small-down transition-all duration-300 ${menuState && " rotate-180"}`} size={24}/>
                {
                    menuState &&
                    <div id="all_categories_box" className="flex absolute z-20 bg-white left-0 top-16 w-[550px] border-[1px] border-light_gray rounded-[5px] p-7 hover:cursor-default">
                        <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-4">
                            {
                                list_categories.map((item, index) => {
                                    return <IconBox key={index} link={item.link} className={item.icon}
                                                    path={item.path} title={item.title} size={35}
                                                    titleClassName={"text-heading-sm text-blue-300"}
                                                    linkClass={"gap-3.5 rounded-[5px] shadow-sm shadow-primary hover:shadow-md hover:scale-[99%] p-4 basis-[calc(50%-8px)]"}/>
                                })
                            }
                            <div id="more_categories" className="cursor-pointer flex gap-4 items-center justify-center w-full p-3 rounded-[5px] shadow-sm shadow-primary hover:shadow-md hover:scale-[99%]">
                                <IconBox className={"icon-add"} size={24}/>
                                <div className="text-heading-sm text-blue-300">More Categories</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                    {
                        menuLinks.map((item, index) => {
                            return (
                                <li key={index}>
                                    {
                                        item.icon ?
                                            <IconBox className={item.icon} title={item.title} link={item.link} size={24}/>
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


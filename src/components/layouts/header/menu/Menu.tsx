import Link from "next/link";
import {IconBox} from "@/components";
import {MenuItemType} from "@/types";
import {EntityType} from "@/types/api/Response";
import {useMenu} from "@/hooks/use-menu";
import {useState, MouseEvent} from "react";
import {useOverlay} from "@/hooks/use-overlay";

export function Menu() {
    const { data: mainMenuItems} = useMenu({position:"main_menu"})
    const { data: BrowsCategoryMenu} = useMenu({position:"brows-category"})

    const [menuState, setMenuState] = useState(false)
    const menuBtnToggle = (e:MouseEvent) => {
        e.stopPropagation()
       setMenuState((prevState) => !prevState)
    }
    const menuBodyToggle = (e:MouseEvent) => {
        e.stopPropagation()
    }
    useOverlay({
        onClick: ()=>{
            setMenuState(false)
        },
        isOverFlowHidden: menuState
    })


    return (
        <>
            <div className="relative ">
                <div onClick={menuBtnToggle} className="flex items-center gap-2.5 bg-green-200 text-white px-3 py-2 cursor-pointer rounded-[5px] w-fit">
                    <IconBox className={"icon-apps"} size={23} title={"Browse All Categories"} titleClassName={"text-medium"}/>
                    <IconBox className={`icon-angle-small-down transition-all duration-300 ${menuState && " rotate-180"}`} size={23}/>
                </div>
                {
                    <div onClick={menuBodyToggle} className={`${menuState ? "flex" : "hidden" } lg:text-center lg:absolute z-20 bg-white left-0 top-16 border-b lg:border border-gray-200 rounded-[5px] py-3 lg:p-6 hover:cursor-default`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 w-fit lg:w-[550px] bg-white">
                            {
                                BrowsCategoryMenu &&
                                BrowsCategoryMenu.data.map((item:EntityType<MenuItemType>, index) => {
                                    return <IconBox key={index} link={item.attributes.link} className={item.attributes.icon_name +" text-[26px]"}
                                                    path={item.attributes.icon_path} title={item.attributes.title} size={30}
                                                    titleClassName={"text-heading-sm text-blue-300"}
                                                    linkClass={"col-span-1 gap-3.5 rounded-[5px] lg:border lg:shadow-sm lg:shadow-primary hover:shadow-md hover:scale-[99%] p-3 items-center"}/>
                                })
                            }
                            <div className="col-span-full hidden lg:flex cursor-pointer gap-4 items-center justify-center p-3 rounded-[5px] shadow-sm shadow-primary hover:shadow-md hover:scale-[99%]">
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
                        mainMenuItems &&
                        mainMenuItems.data.map((item:EntityType<MenuItemType> , index) => {
                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name ?
                                            <IconBox className={item.attributes.icon_name} title={item.attributes.title} link={item.attributes.link} size={24}/>
                                            :
                                            <Link href={item.attributes.link}>{item.attributes.title}</Link>
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


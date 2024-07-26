import {IconBox, Logo, Menu, SearchForm, UserInfo} from "@/components";
import Link from "next/link";
import {useState, MouseEvent, useContext, useEffect} from "react";
import {useOverlay} from "@/hooks/use-overlay";
import {ModalContext} from "@/store/ModalContext";
import {AuthContext} from "@/store/AuthContext";


export function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const {ModalState, openModalHandler} = useContext(ModalContext)
    const {is_login} = useContext(AuthContext)
    const [userName, setUserName] = useState<string>("Account")

    useEffect(() => {
        if(is_login){
            setUserName(JSON.parse(window.localStorage.getItem("user")!).username)
        }else{
            setUserName("Account")
        }
    }, [is_login]);

    const menuBtnClickHandler = (e:MouseEvent) => {
        e.stopPropagation()
        setShowMobileMenu((prevState) => !prevState)
    }
    const menuBodyClickHandler = (e:MouseEvent) => {
        e.stopPropagation()
    }

    useOverlay({
        onClick: ()=>{
            setShowMobileMenu(false)
        },
        isOverFlowHidden: showMobileMenu || ModalState
    })

    return (
        <header className="mb-[33px]">
            {
                is_login && ModalState && <UserInfo/>
            }
            <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
                <Logo/>
                <div className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
                    <SearchForm/>
                </div>
                <ul className="hidden lg:flex gap-5">
                    <li className="flex gap-2 relative">
                        {
                            is_login ?
                                <IconBox className={"icon-user"} size={24} onClick={()=> openModalHandler()} title={userName} hideTitleOnMobile={true} titleClassName={"text-medium text-gray-500 font-lato"}/>
                                :
                                <IconBox className={"icon-user"} size={24} title={"LOG IN"} link={"/login"} hideTitleOnMobile={true} titleClassName={"text-medium text-gray-500 font-lato"}/>
                        }
                    </li>
                    <li className="flex gap-2">
                        <IconBox className={"icon-shopping-cart"} size={24} title={"Card"} hideTitleOnMobile={true} badge={5} link={"userBasket"} titleClassName={"text-medium text-gray-500 font-lato"}/>
                    </li>
                </ul>
                <button onClick={menuBtnClickHandler} className="flex lg:hidden flex-col justify-between py-[4px] w-[24px] h-[24px] cursor-pointer">
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                </button>
            </div>
            <div className="border-gray-200 border-y">
                <div onClick={menuBodyClickHandler} className={`${showMobileMenu ? "left-0 fixed overflow-x-scroll" : "-left-[100%] absolute"} container transition-all w-fit lg:w-full h-[100vh] lg:h-fit rounded-[24px] lg:rounded-[0px] top-0 bottom-0 lg:static flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center p-4 lg:py-[13px] bg-white z-50`}>
                    <Menu/>
                    <div className="hidden lg:inline-flex items-center gap-3">
                        <IconBox className={"icon-headset aspect-square text-[30px]"} size={30} link={"#"}/>
                        <div>
                            <Link href="tel:19008888"
                                  className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4">1900-8888</Link>
                            <div className="font-lato text-xsmall"><span className="hidden xl:inline-block">24/7 </span>Support
                                Center
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-end">
                    <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
                        <SearchForm inputclassName={"py-0"}/>
                    </div>
                    <ul className="flex gap-5">
                        <li className="flex gap-2 cursor-pointer">
                            {
                                is_login ?
                                    <IconBox className={"icon-user"} size={24} onClick={()=> openModalHandler()} title={userName} hideTitleOnMobile={true} titleClassName={"text-medium text-gray-500 font-lato"}/>
                                    :
                                    <IconBox className={"icon-user"} size={24} title={"LOG IN"} link={"/login"} hideTitleOnMobile={true} titleClassName={"text-medium text-gray-500 font-lato"}/>
                            }
                        </li>
                        <li className="flex gap-2 cursor-pointer">
                            <div className="relative">
                                <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">4</span>
                                <IconBox className={"icon-shopping-cart"} size={24}/>
                            </div>
                            <div className="hidden xl:inline-block text-medium text-gray-500 font-lato">Card</div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}


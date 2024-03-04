import Link from "next/link";

interface Props{
    className: string,
    size?: number,
    link?: string,
    title?: string,
    hideTitleOnMobile?: boolean,
    badge?: number,
    titleClassName?: string,
    linkClass?: string
    path?: number,
    menuToggle?: ()=>{}
}

export function IconBox({className, size = 22, link, title, hideTitleOnMobile = false, badge = 0, titleClassName= "",linkClass = "", path = 0, menuToggle}: Props) {
    let span = []
    for(let i=0; i <= path; i++){
        span.push(
            <span className={`path${i}`}></span>
        )
    }
    if(link) {
        return (
            <Link className={`${linkClass} flex items-center cursor-pointer gap-1`} href={link}>
                {
                    badge ?
                        <div className="relative">
                            <span
                                className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${className} text-[${size}px]`}>{span}</i>
                        </div>
                        :
                        <i className={`${className} text-[${size}px]`}>{span}</i>
                }
                {
                    title && <div
                        className={`${hideTitleOnMobile ? "hidden xl:inline-block" : "inline-block"} ${titleClassName}`}>{title}</div>
                }
            </Link>
        );
    }else{
        return (
            <>
                {
                    badge ?
                        <div className="relative">
                            <span
                                className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${className} text-[${size}px]`}>{span}</i>
                        </div>
                        :
                        <i className={`${className} text-[${size}px]`}>{span}</i>
                }
                {
                    title && <div className={`${hideTitleOnMobile ? "hidden xl:inline-block" : "inline-block"} ${titleClassName}`} onClick={menuToggle}>{title}</div>
                }
            </>
        )
    }
}


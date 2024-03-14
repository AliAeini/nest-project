import Image from "next/image";

interface Props {
    src?: string | null,
    alt: string,
    width: number,
    height: number,
    className?: string
};

export function ImageVeiw({src = "", alt, width, height, className = ""}: Props) {
    const imageSrc = src ? (src.startsWith("/uploads") ? "https://nest.navaxcollege.com"+ src : src) : ""
    if(src && src.length > 0) {
        return (
            <Image src={imageSrc} alt={alt} width={width} height={height} className={className}/>
        );
    }else{
        return (
            <Image src={"/assets/images/Logo.png"} alt={alt} width={width} height={height} className={className}/>
        )
    }
};
import Image from "next/image";

interface Props {
    src: string,
    alt: string,
    width: number,
    height: number,
    className?: string
};

export function ImageVeiw({src, alt, width, height, className = ""}: Props) {
    const isRemote = src.substring(0, 8) == "/uploads"
    if(src.length > 0) {
        return (
            <Image src={`${isRemote ? "https://nest.navaxcollege.com" + src : src}`} alt={alt} width={width} height={height} className={className}/>
        );
    }else{
        return (
            <Image src={"/assets/images/Logo.png"} alt={alt} width={width} height={height} className={className}/>
        )
    }
};
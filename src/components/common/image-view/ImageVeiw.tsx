import Image from "next/image";

interface Props {
    src: string,
    alt: string,
    width: number,
    height: number,
    className?: string
};

export function ImageVeiw({src, alt, width, height, className = ""}: Props) {
    return (
      <Image src={src} alt={alt} width={width} height={height} className={className}/>
    );
};
import {MiniProductCard} from "@/components";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";

interface Props{
    title: string,
    sliderData: Array<EntityType<ProductType>>
}
export function ProductVerticalList({title, sliderData}: Props) {
    return (
        <>
            <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">{title}</h3>
            <div className="flex flex-col gap-6 h-full justify-between">
                {
                    sliderData.map((item, index) =>{
                        return (
                            <MiniProductCard data={item} key={index}/>
                        )
                    })
                }
            </div>
        </>
    );
}


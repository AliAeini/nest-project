import Link from "next/link";
import {ImageVeiw} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getFeaturedCategory} from "@/api/Category";
import {ApiResponseType, CategoryType, EntityType} from "@/types";

export function FeaturedCategories() {
    const {data} = useQuery<ApiResponseType<CategoryType>>({queryKey:[getFeaturedCategory.name], queryFn: ()=> getFeaturedCategory()})
    return (
        <div className="flex flex-wrap justify-between gap-[24px]">
            {
                data &&
                data.data.map((item: EntityType<CategoryType>, index)=>{
                    return(
                        <Link href={item.attributes.link} key={index} style={{backgroundColor: `${item.attributes.color}`}} className="flex flex-col justify-center items-center text-blue-300 bg-green-100 border-[1px] border-green-100 hover:scale-105 px-2 lg:px-5 py-3 pt-2 rounded-xl">
                            <ImageVeiw src={(item.attributes.thumbnail.data?.attributes.url ?? "")} width={93} height={84} alt="cat" className="mb-2 lg:mb-4"/>
                            <h3 className="text-[12px] text-bold sm:text-heading-sm md:text-heading6 text-center">{item.attributes.title}</h3>
                            <span className="text-xsmall text-gray-400 hidden lg:flex">{item.attributes.slug}</span>
                        </Link>
                    )
                })
            }
        </div>
    );
};
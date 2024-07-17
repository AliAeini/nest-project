import {IconBox} from "@/components";
import {twMerge} from "tailwind-merge";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProductApiCall} from "@/api/Product";
import {useEffect, useState} from "react";
import {ApiResponseType, EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import useDebounce from "@/hooks/use-debounce";

interface Props{
    inputclassName?: string
}
interface formInput{
    search_text: string
}
interface filterData{
    title:{
        "$containsi": string
    }
}
export function SearchForm({inputclassName = ""}: Props) {
    const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>([])
    const{register, handleSubmit, watch} = useForm<formInput>()
    const mutationData = useMutation({mutationFn:(data:filterData)=> getAllProductApiCall({filters:data})})
    const search_text = watch("search_text")
    const [resultState, setResultState] = useState((false))

    useEffect(() => {
         search_text && delay()
        }, [search_text]);

    const onSubmit= (data:formInput)=>{
        if(data.search_text.length <= 2 ){
            setResultState(false)
            return
        }
        setResultState(true)
    mutationData.mutate({
        title:{
            "$containsi": data.search_text
        }
    },{
        onSuccess: (response:ApiResponseType<ProductType>)=>{
            setResultData(response.data)
        }
    })
    }
    const delay = useDebounce(handleSubmit(onSubmit), 1000)

    return (
        <div className={"relative"}>
            <form onSubmit={handleSubmit(onSubmit)} name="search-form" action="#" method="post"
                  className="flex items-center justify-center">
                <input autoComplete={undefined} type="text" {...register("search_text")} placeholder="Search for items"
                       className={twMerge("py-[8px] text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none", inputclassName)}/>
                <button type="submit" className="flex flex-col items-center hover:text-primary"><IconBox
                    className={"icon-search"} size={23}/></button>
            </form>
            {
                resultData && resultState &&
                <div className="absolute top-14 left-0 w-full bg-white z-[60]">
                    <ul>
                        {
                            resultData.map((result:EntityType<ProductType>, index:number)=>{
                                return(
                                    <li key={index} className="p-4 border border-light_gray hover:bg-green-200 text-black hover:text-white cursor-pointer">{result.attributes.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}


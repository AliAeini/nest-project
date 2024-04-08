import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {getAllProductApiCall} from "@/api/Product";

export  function ProductListSlider() {
    const {data : topRateData} = useQuery<ApiResponseType<ProductType>>(
        {queryKey:["topRateData", getAllProductApiCall.name],
            queryFn:()=> getAllProductApiCall({
                populate:["thumbnail"],
                sort:["rate:desc"],
                pagination:{
                    page: 1,
                    pageSize:3
                }
            })
        })
    const {data : topSoldData} = useQuery<ApiResponseType<ProductType>>(
        {queryKey:["topSoldData", getAllProductApiCall.name],
            queryFn:()=> getAllProductApiCall({
                populate:["thumbnail"],
                sort:["sold:desc"],
                pagination:{
                    page: 1,
                    pageSize:3
                }
            })
        })

    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay]}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >
         <>
             {
                topRateData &&
                 <SwiperSlide>
                     <ProductVerticalList title={"Top Rated"} sliderData={topRateData.data}/>
                 </SwiperSlide>
             }
             {
                 topSoldData &&
                 <SwiperSlide>
                     <ProductVerticalList title={"Top Selling"} sliderData={topSoldData.data}/>
                 </SwiperSlide>
             }
             {/*{*/}
             {/*    topTrending &&*/}
             {/*    <SwiperSlide>*/}
             {/*        <ProductVerticalList title={"Tranding Products"} sliderData={topTrending.data}/>*/}
             {/*    </SwiperSlide>*/}
             {/*}*/}


                {/* <SwiperSlide>*/}
                {/*     <ProductVerticalList title={"Resently Added"} sliderData={RecentlyAddedMock}/>*/}
                {/* </SwiperSlide>*/}
         </>
        </Swiper>
    )
}


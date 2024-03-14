import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {SimpleProductCard} from "@/components";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";

interface Props{
    sliderData: Array<EntityType<ProductType>>,
    nextElem?: string,
    prevElem?: string
}
export function SimpleProductSlider({sliderData, nextElem, prevElem}: Props) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={2}
            autoplay={true}
            modules={[Autoplay, Navigation]}
            navigation={{
                nextEl: nextElem,
                prevEl: prevElem
            }}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 24
                }
            }}
        >
            {
                sliderData.map((item: EntityType<ProductType>, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <SimpleProductCard data={item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}


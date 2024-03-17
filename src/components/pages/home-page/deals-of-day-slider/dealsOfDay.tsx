import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props{
   sliderData: Array<EntityType<ProductType>>
}
export function DealsOfDay({sliderData}: Props) {
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
                    spaceBetween: 22
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 24
                }
            }}
        >
            {
                sliderData.map((item, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <ProductDealsCard sliderData={item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}


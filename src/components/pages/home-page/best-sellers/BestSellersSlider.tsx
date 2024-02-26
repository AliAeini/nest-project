import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {SimpleProductCard} from "@/components";

interface Props {
    sellersData: Array<{
        title: string,
        image: string
        category: string,
        rate: number,
        weight: number,
        unit: string,
        price: number,
        label: string,
        sold:number,
        total: number,
    }>
}

export function BestSellersSlider({sellersData}: Props) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={2}
            autoplay={true}
            modules={[Autoplay]}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >
            {
                sellersData.map((item, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <SimpleProductCard cardData={item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
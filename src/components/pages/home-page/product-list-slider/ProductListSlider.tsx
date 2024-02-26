import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {TopSellingMock} from "@/mock/TopSelling";
import {TopRatedMock} from "@/mock/TopRated";
import {TrendingProductsMock} from "@/mock/TrendingProducts";
import {RecentlyAddedMock} from "@/mock/RecentlyAdded";
import {Swiper, SwiperSlide} from "swiper/react";

export  function ProductListSlider() {
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
            <SwiperSlide>
                <ProductVerticalList title={"Top Selling"} sliderData={TopSellingMock}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductVerticalList title={"Top Rated"} sliderData={TopRatedMock}/>
            </SwiperSlide>
             <SwiperSlide>
                 <ProductVerticalList title={"Tranding Products"} sliderData={TrendingProductsMock}/>
             </SwiperSlide>
             <SwiperSlide>
                 <ProductVerticalList title={"Resently Added"} sliderData={RecentlyAddedMock}/>
             </SwiperSlide>
         </>
        </Swiper>
    )
}


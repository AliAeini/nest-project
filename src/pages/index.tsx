import {Banner, FeaturedCategories, Section, SimpleProductSlider} from "@/components";
import {MiniProductSlider} from "@/components/pages/mini-product-slider";
import {popularProducts} from "@/mock/PopularProducts";
import {popularFruits} from "@/mock/PopularFruits";

export default function Home() {
  return (
     <>
         <Section>
             <Banner title={"Don’t miss amazing grocery deals"}
                     subTitle={"Sign up for the daily newsletter"}
                     image={"/assets/images/fresh-apples.png"}
                     bg_image={"/assets/images/banner_bg.png"}
             />
         </Section>
         <Section>
             <div className="hidden sm:flex mb-[50px]">
                 <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
             </div>
             <FeaturedCategories/>
         </Section>
         <Section>
             <MiniProductSlider/>
         </Section>
         <Section>
             <div className="flex justify-between mb-[50px]">
                 <h2 className="text-heading3 text-blue-300">Popular Products</h2>
                 <div className="flex items-center gap-3">
                     <i className="swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                     <i className="swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                 </div>
             </div>
             <SimpleProductSlider  nextElem={".swiper-nav-right"} prevElem={".swiper-nav-left"} sliderData={popularProducts}/>
         </Section>
         <Section>
             <div className="flex justify-between mb-[50px]">
                 <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
                 <div className="flex items-center gap-3">
                     <i className="swiper-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                     <i className="swiper-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                 </div>
             </div>
             <SimpleProductSlider nextElem={".swiper-left2"} prevElem={".swiper-right2"} sliderData={popularFruits}/>
         </Section>
     </>

  );
}

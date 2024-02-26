import {
    Banner,
    BestSellersSlider,
    DealsOfDay,
    FeaturedCategories,
    IconBox, ProductDealsCard, ProductListSlider,
    Section,
    SimpleProductSlider
} from "@/components";
import {MiniProductSlider} from "@/components/pages/mini-product-slider";
import {popularProducts} from "@/mock/PopularProducts";
import {popularFruits} from "@/mock/PopularFruits";
import Link from "next/link";
import {BestSellers} from "@/mock/BestSellers";
import {DealsOfTheDaysMock} from "@/mock/DealsOfTheDays";

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
             <div className="hidden sm:flex mb-5">
                 <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
             </div>
             <FeaturedCategories/>
         </Section>
         <Section>
             <MiniProductSlider/>
         </Section>
         <Section>
             <div className="flex justify-between mb-5">
                 <h2 className="text-heading3 text-blue-300">Popular Products</h2>
                 <div className="flex items-center gap-3">
                     <i className="swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                     <i className="swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                 </div>
             </div>
             <SimpleProductSlider  nextElem={".swiper-nav-right"} prevElem={".swiper-nav-left"} sliderData={popularProducts}/>
         </Section>
         <Section>
             <div className="flex justify-between mb-5">
                 <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
                 <div className="flex items-center gap-3">
                     <i className="swiper-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                     <i className="swiper-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]"></i>
                 </div>
             </div>
             <SimpleProductSlider nextElem={".swiper-left2"} prevElem={".swiper-right2"} sliderData={popularFruits}/>
         </Section>
         <Section>
             <div className="flex justify-between mb-5">
                 <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">
                     Best Sellers
                 </h2>
             </div>
             <div className="flex gap-[24px]">
                 <div className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
                     <h3 className="text-heading2 text-blue-300">Bring nature into your home</h3>
                     <Link href="#" className="mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                         <span className="block text-xsmall text-white">Shop now</span>
                         <IconBox className="icon-arrow-small-right" size={24}/>
                     </Link>
                 </div>
                 <div className="swiper best-seller-slider overflow-hidden">
                     <BestSellersSlider sellersData={BestSellers}/>
                 </div>
             </div>
         </Section>
         <Section>
             <div className="flex justify-between items-center mb-5">
                 <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">
                     Deals Of The Days</h2>
                 <Link className="flex items-center" href="#">
                     All Deals
                     <IconBox className={"icon-angle-small-right"} size={24}></IconBox>
                 </Link>
             </div>
             <DealsOfDay sliderData={DealsOfTheDaysMock}/>
         </Section>
         <Section>
             <ProductListSlider/>
         </Section>
     </>

  );
}

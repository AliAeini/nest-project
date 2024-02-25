import {Banner, FeaturedCategories, Section} from "@/components";
import {MiniProductSlider} from "@/components/pages/mini-product-slider";

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
     </>

  );
}

import {Banner, Section} from "@/components";

export default function Home() {
  return (
      <Section>
            <Banner title={"Don’t miss amazing grocery deals"}
                    subTitle={"Sign up for the daily newsletter"}
                    image={"/assets/images/fresh-apples.png"}
                    bg_image={"/assets/images/banner_bg.png"}
            />
      </Section>
  );
}

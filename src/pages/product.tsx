import {IconBox, ImageVeiw, Section} from "@/components";

interface Props {

};

export default function product(props: Props) {
    return (
        <Section className="flex flex-col items-center mb-[68px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="col-span-1">
                    <div className="w-full mb-[28px] p-[40px] border-[1px] border-gray-200 rounded-2xl">
                        <div className="top-0 left-0 flex justify-end">
                            <IconBox className={"icon-search"} size={24}/>
                        </div>
                        <ImageVeiw src={"/assets/images/18%201.png"} alt={"pic"} width={100} height={100} className="aspect-[3/2] w-full"/>
                    </div>
                    <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 items-center">
                        <div className="col-span-1 text-center rotate-180 hidden lg:inline">
                            <IconBox className={"icon-arrow-small-right bg-green-200 rounded-full items-center p-2 w-fit"} size={24}/>
                        </div>
                        <div className="col-span-1 border border-green-200 rounded-2xl p-2">
                            <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                        </div>
                        <div className="col-span-1 border rounded-xl p-2">
                            <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                        </div>
                        <div className="col-span-1 border rounded-xl p-2">
                            <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                        </div>
                        <div className="col-span-1 border rounded-xl p-2">
                            <ImageVeiw src={"/assets/images/7%201.png"} alt={"pic"} width={100} height={100}/>
                        </div>
                        <div className="col-span-1 text-center hidden lg:inline">
                            <IconBox className={"icon-arrow-small-right bg-green-200 rounded-full items-center p-2 w-fit"} size={24}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border border-gray-200 rounded-2xl min-h-[200px]"></div>
            </div>
        </Section>
    );
};
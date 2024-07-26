import {IconBox} from "@/components";
import {useQuentity} from "@/hooks/useQuentity";

interface Props {
    quentitiyItems: number
};

export function ProductCounter({quentitiyItems}: Props) {
    const {counter, increment, decrement} = useQuentity()

    return (
        <div className="">
            <button onClick={()=>increment(quentitiyItems)} className={`${counter == 0 ? "flex" : "hidden"} text-heading-sm text-green-200 rounded-[4px] bg-green-150 px-[10px] py-[5px]`}>Adds
                +
            </button>
            <div className={`${counter == 0 ? "hidden" : "flex"} justify-between border border-primary rounded min-w-[60px] h-fit`}>
                <div className="px-[3px] text-primary">{counter}</div>
                <div className="flex flex-col items-center justify-between px-[3px]">
                    <IconBox onClick={()=>increment(quentitiyItems)} className={"up icon-angle-small-up"} size={12}></IconBox>
                    <IconBox onClick={()=>decrement()} className={"down icon-angle-small-down"} size={12}></IconBox>
                </div>
            </div>
        </div>
    );
};
import {IconBox} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    product: EntityType<ProductType>
};

export function ProductItemCounter({product}: Props) {
    const {addItem, updateItem, getItem} = useBasket()
    const isProductInBasket = getItem(product.id)

    return (
        <div>
            {
                isProductInBasket ?
                    <div className="flex justify-between items-center border border-primary rounded min-w-[65px] h-fit">
                        <div className="px-2 text-primary flex-grow">{isProductInBasket?.quantity}</div>
                        <div className="flex flex-col items-center justify-between p-[1px]">
                            <IconBox onClick={()=>updateItem(product.id, "increase")} className={"up icon-angle-small-up"} size={12}></IconBox>
                            <IconBox onClick={()=>updateItem(product.id, "decrease")} className={"down icon-angle-small-down"} size={12}></IconBox>
                        </div>
                    </div>
                    :
                    <button onClick={()=>addItem(product.id)} className="text-heading-sm text-green-200 border-transparent rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds +</button>
            }
        </div>
    );
};
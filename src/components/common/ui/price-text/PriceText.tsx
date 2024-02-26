interface Props {
    price: number,
    sale_price?: number
};

export function PriceText({price, sale_price}: Props) {
    return (
        <>
            {
                sale_price ?
                    <div>
                        <span className="text-heading5 text-green-200">{sale_price}</span>
                        <span className="text-heading-sm line-through text-gray-500">{price}</span>
                    </div>
                    :
                    <span className="text-heading5 text-green-200">{price}</span>
            }
        </>
    );
};
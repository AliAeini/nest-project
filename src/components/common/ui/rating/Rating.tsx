import {IconBox} from "@/components";

interface Props{
    rate: number
}
export function Rating({rate}: Props) {
    let stars= []
    for(let i= 0; i < rate; i++){
        stars.push(<li className="flex"><IconBox className="icon-star-full" size={12}/></li>)
    }
    let emptyStars = []
    for(let i= rate; i < 5; i++){
        emptyStars.push(<li className="flex"><IconBox className="icon-star-empty" size={12}/></li>)
    }
    return (
        <>
            <ul className="flex gap-1">
                {stars}{emptyStars}
            </ul>
            <div className="text-xsmall text-gray-500 font-lato">{rate}</div>
        </>
    );
}


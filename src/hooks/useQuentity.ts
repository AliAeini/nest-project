import {useState} from "react";


export function useQuentity (){
    const [counter, setCounter] = useState(0)

    const increment = (quentityItems:number)=>{
        quentityItems > counter && setCounter(counter + 1)
    }
    const decrement = () =>{
        (counter - 1) <= 0 ? setCounter(0) : setCounter(counter - 1)
    }

    return {counter, increment, decrement}
}
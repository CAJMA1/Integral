import { useEffect,useRef } from "react";

export function RenderMath( {formula} ){
    const ref = useRef()
    useEffect(()=>{
        katex.render(formula, ref.current,{
            throwOnError: false,
            displayMode: true
        })
    },[formula])
    return(
        <div ref={ref} />
    )
}
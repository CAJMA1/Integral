import { useEffect,useRef } from "react";
export function Target({ integral }) {
    const ref = useRef()
    useEffect(()=>{
        katex.render(integral.formula, ref.current,{
            throwOnError: false,
            displayMode: true
        })
    },[integral.formula])
  return (
    <>
      <section>
        <div className="target-container">
          <p className="text-target">{integral.name}</p>
          <div ref={ref} />
        </div>
      </section>
    </>
  );
}

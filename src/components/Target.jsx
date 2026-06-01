import { RenderMath } from "./RenderMath";
export function Target({ integral }) {
    
  return (
    <>
      <section>
        <div className="target-container">
          <p className="text-target">{integral.name}</p>
          <RenderMath formula={integral.formula} />
        </div>
      </section>
    </>
  );
}

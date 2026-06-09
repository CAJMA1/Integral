
import { Target } from "../components/Target";
export function Formulas(){
    const formulas = [
        {
            id: 1,
            name: "Integral x a la n",
            formula: "\\int x^{n} dx"
        },
        {
            id:2,
            name: "Integral de x",
            formula: "\\int x dx"
        },
        {
            id:3,
            name: "Integral de seno",
            formula: "\\int sin(x)"
        },
        {
            id:4,
            name: "Integral de coseno",
            formula: "\\int cos(x)"
        }
    ]
    return(
        <>
        <div className="target">
            {formulas.map(formulas =>(
            <Target key={formulas.id} integral={formulas}></Target>
          ))}
        </div>
        </>
    )
}
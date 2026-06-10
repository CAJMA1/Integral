
import { Target } from "../components/Target";
export function Formulas(){
    const formulas = [
        {
            id: 1,
            name: "integral de a",
            formula: "\\int a",
            solucion: "ax"
        },
        {
            id:2,
            name: "Integral de x",
            formula: "\\int x",
            solucion: "\\frac{x^{2}}{2}"
        },
        {
            id: 3,
            name: "Integral x a la n",
            formula: "\\int x^{n}",
            solucion: "\\frac{x^{n-1}}{n-1}"
        },
        {
            id:4,
            name: "Integral de seno",
            formula: "\\int sin(x)",
            solucion: "-cos(x)"
        },
        {
            id:5,
            name: "Integral de coseno",
            formula: "\\int cos(x)",
            solucion: "sin(x)"
        },
        {
            id:6,
            name: "Integral de Tangente",
            formula: "\\int cos(x)",
            solucion: "-log(cos(x))"
        },
        {
            id:7,
            name: "integral de Cotangente",
            formula: "\\int cot(x)",
            solucion: "log(sen(x))"
        },
        {
            id:8,
            name: "formula de secante",
            formula: "\\int sec(x)",
            solucion: "log(sec(x) + tan(x))"
        },
        {
            id: 9,
            name: "Integral de cosecante",
            formula: "\\int csc(x)",
            solucion: "log(csc(x) - cot(x))"
        },
        {
            id: 10,
            name: "Integral de a elevada a x",
            formula: "\\int a^x",
            solucion: "\\frac{a^x}{log(a)}"
        },
        {
            id: 11,
            name: "Integral de dx entre x",
            formula: "\\int \\frac{dx}{x}",
            solucion: "log(x)"
        },
        {
            id: 12,
            name: "Integral de e elevado a x",
            formula: "\\int e^x",
            solucion: "e^x"
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
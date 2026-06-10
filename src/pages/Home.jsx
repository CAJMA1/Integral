import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { InputNumber } from "../components/InputNumber";
import Algebrite from "algebrite";
import { RenderMath } from "../components/RenderMath";

function toJS(expr) {
  if (!expr) return null;
  try {
    let js = expr
      .replace(/\^/g, "**")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/e\^x/g, "Math.exp(x)")
      .replace(/\be\b/g, "Math.E")
      .replace(/(\d)(x)/g, "$1*$2");
    new Function("x", `return ${js}`)(1);
    return js;
  } catch { return null; }
}

export function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [expr, setExpr] = useState("")
  const [isExprRun, setExprRun] = useState(false)
  const [isLocked, setLocked] = useState(false)
  const [isCos, setIsCos] = useState(false)
  const chartRef = useRef(null)
  const chartInstance = useRef(null)


  useEffect(() => {
    if (!chartRef.current) return;

    const jsExpr = toJS(input);
    if (!jsExpr) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
      return;
    }

    const xs = [], ys = [];
    for (let i = 0; i <= 300; i++) {
      const x = -6 + (12 * i / 300);
      xs.push(parseFloat(x.toFixed(3)));
      try {
        const y = new Function("x", `return ${jsExpr}`)(x);
        ys.push(isFinite(y) ? parseFloat(y.toFixed(4)) : null);
      } catch { ys.push(null); }
    }

    if (chartInstance.current) chartInstance.current.destroy();
    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: xs,
        datasets: [{
          label: `f(x) = ${input}`,
          data: ys,
          borderColor: "#378ADD",
          borderWidth: 2,
          pointRadius: 0,
          spanGaps: false,
          tension: 0.3,
        }]
      },
      options: {
        animation: false,
        responsive: true,
        plugins: { legend: { display: true } },
        scales: {
          x: { ticks: { maxTicksLimit: 7 } },
          y: { ticks: { maxTicksLimit: 7 } }
        }
      }
    });
  }, [input]);

  // 3️⃣ Funciones después
  function handleInputKeyOpen(character) {
    if (input.at(-1) === "e") {
      setExpr(`${input}^{`)
      setExprRun(true)
    }
    if (input.at(-1) === "^") {
      setExpr(`${input}{`)
      setExprRun(true)
    }
    if (character === "sin()") {
      const newInput = input + "sin()"
      setInput(newInput)
      setExpr(newInput.slice(0, -1))
      setIsCos(true)
      setExprRun(true)
    }
    if (character === "cos()") {
      const newInput = input + "cos()"
      setInput(newInput)
      setExpr(newInput.slice(0, -1))
      setIsCos(true)
      setExprRun(true)
    }
    if (character === "tan()") {
      const newInput = input + "tan()"
      setInput(newInput)
      setExpr(newInput.slice(0, -1))
      setIsCos(true)
      setExprRun(true)
    }
  }

  function handleInputKeyClose() {
    if (isExprRun) {
      if (isCos) {
        setInput(`${expr})`)
        setExpr("")
        setIsCos(false)
        setExprRun(false)
      } else {
        setInput(`${expr}}`)
        setExpr("")
        setExprRun(false)
      }
    }
  }

  function handleInputSelect(character) {
    if (isLocked) return
    if (isExprRun) {
      setExpr((prev) => prev + character)
      return
    }
    setInput((prev) => prev + character)
  }

  function clear() {
    setResult("")
    setInput("")
    setExpr("")
    setLocked(false)
    setExprRun(false)
  }

  function deleteLastCharacter() {
    if (isLocked) return
    setInput((prev) => prev.slice(0, -1))
  }

  function calculateIntegral() {
    if (input && input.trim() !== "") {
      const expression = input
        .replaceAll("{", "(")
        .replaceAll("}", ")")
      const integral = Algebrite.run(`integral(${expression},x)`)
      const latex = Algebrite.run(`printlatex(${integral})`)
      setResult(latex)
      setLocked(true)
    }
  }

  // 4️⃣ Return al final
  return (
    <>
      <h1 className="tittle tittle-main">Calculadora de integrales</h1>
      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>

        <div className="container-calculator">
          <div className="InputPreview">
            <RenderMath formula="\int" />
            <RenderMath formula={input} />
            {result && <RenderMath formula={`=${result} + C`} />}
          </div>
          <div className="container-button">
            <InputNumber character="+" onClick={handleInputSelect} />
            <InputNumber character="-" onClick={handleInputSelect} />
            <InputNumber character="*" onClick={handleInputSelect} />
            <InputNumber character="/" onClick={handleInputSelect} />
            <InputNumber character="x" onClick={handleInputSelect} />
            <InputNumber character="^" onClick={handleInputSelect} />
            <InputNumber character="1" onClick={handleInputSelect} />
            <InputNumber character="2" onClick={handleInputSelect} />
            <InputNumber character="3" onClick={handleInputSelect} />
            <InputNumber character="4" onClick={handleInputSelect} />
            <InputNumber character="5" onClick={handleInputSelect} />
            <InputNumber character="6" onClick={handleInputSelect} />
            <InputNumber character="7" onClick={handleInputSelect} />
            <InputNumber character="8" onClick={handleInputSelect} />
            <InputNumber character="9" onClick={handleInputSelect} />
            <InputNumber character="0" onClick={handleInputSelect} />
            <InputNumber character="cos(x)" onClick={handleInputSelect} />
            <InputNumber character="cos()" onClick={handleInputKeyOpen} />
            <InputNumber character="sin(x)" onClick={handleInputSelect} />
            <InputNumber character="sin()" onClick={handleInputKeyOpen} />
            <InputNumber character="tan(x)" onClick={handleInputSelect} />
            <InputNumber character="tan()" onClick={handleInputKeyOpen} />
            <InputNumber character="e^x" onClick={handleInputSelect} />
            <InputNumber character="e" onClick={handleInputSelect} />
            <InputNumber character="{" onClick={handleInputKeyOpen} />
            <InputNumber character="}" onClick={handleInputKeyClose} />
            <InputNumber character="C" onClick={clear} />
            <InputNumber character="<-" onClick={deleteLastCharacter} />
            <InputNumber character="=" onClick={calculateIntegral} />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 300 }}>
          <canvas ref={chartRef} width={500} height={400} />
        </div>

      </div>
    </>
  );
}
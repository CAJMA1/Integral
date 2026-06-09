import { useState } from "react";
import { InputNumber } from "../components/InputNumber";
import Algebrite from "algebrite"
import { RenderMath } from "../components/RenderMath";
import { i } from "mathjs";
export function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [isLocked, setLocked] = useState(false)
  return (
    <>
      <h1 className="tittle tittle-main">Calculadora de integrales</h1>
      <div className="container-calculator">

        <div className="InputPreview" >
          <RenderMath formula="\int" />
          <RenderMath formula={input} />
          {result && (
            <RenderMath formula={`=${result} + C`} />)}
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
          <InputNumber character="sin(x)" onClick={handleInputSelect} />
          <InputNumber character="tan(x)" onClick={handleInputSelect}/>
          <InputNumber character="C" onClick={clear} />
          <InputNumber character="<-" onClick={deleteLastCharacter} />
          <InputNumber character="=" onClick={calculateIntegral} />
        </div>
      </div>
    </>
  );
  function handleInputSelect(character) {
    if (isLocked) return

    setInput((prev) => prev + character);
  }
  function clear() {
    setResult("")
    setInput("")
    setLocked(false)
  }
  function deleteLastCharacter() {
    setInput((prev) => prev.slice(0, -1))
  }
  function calculateIntegral() {
    if (input && input.trim() !== "") {
      const integral = Algebrite.run(`integral(${input},x)`)
      const latex = Algebrite.run(`printlatex(${integral})`)
      console.log(integral)
      console.log(latex)
      setResult(latex)
      setLocked(true)
    }
  }
}

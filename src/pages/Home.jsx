import { useState } from "react";
import { InputNumber } from "../components/InputNumber";
import Algebrite from "algebrite"
import { RenderMath } from "../components/RenderMath";
export function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [expr, setExpr] = useState("")
  const [isExprRun, setExprRun] = useState(false)
  const [isLocked, setLocked] = useState(false)
  const [isCos,setIsCos] = useState(false)
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
          <InputNumber character="cos()" onClick={handleInputKeyOpen} />
          <InputNumber character="sin(x)" onClick={handleInputSelect} />
          <InputNumber character="tan(x)" onClick={handleInputSelect}/>
          <InputNumber character="e^x" onClick={handleInputSelect}/>
          <InputNumber character="e" onClick={handleInputSelect}/>
          <InputNumber character="{" onClick={handleInputKeyOpen}/>
          <InputNumber character="}" onClick={handleInputKeyClose}/>
          <InputNumber character="C" onClick={clear} />
          <InputNumber character="<-" onClick={deleteLastCharacter} />
          <InputNumber character="=" onClick={calculateIntegral} />
        </div>
      </div>
    </>
  );
  function handleInputKeyOpen(character){
    if(input.at(-1) === "e"){
      setExpr(`${input}^{`)
      
      setExprRun(true)
    }
    if(input.at(-1) === "^"){
      setExpr(`${input}{`)
      setExprRun(true)
    }
    if(character === "cos()"){
      const newInput = input + "cos()"
      setInput(newInput)
      setExpr(newInput)
      setExpr((prev)=> prev.slice(0,-1))
      setIsCos(true)
      setExprRun(true)
    }
  }
  function handleInputKeyClose(){
    if(isExprRun){
      if(isCos){
        console.log(expr)
        setInput(`${expr})`)
        setExpr("")
        setExprRun(false)
        setIsCos(false)
        setExprRun(false)
      }else{
        console.log(expr)
        setInput(`${expr}}`)
        setExpr("")
        setExprRun(false)
      }
      
    }
  }
  function handleInputSelect(character) {
    if (isLocked) return
    if(isExprRun){
      setExpr((prev) => prev + character)
      return
    }
    setInput((prev) => prev + character)
    console.log(expr)
    console.log(input)
  }
  function clear() {
    setResult("")
    setInput("")
    setExpr("")
    setLocked(false)
  }
  function deleteLastCharacter() {
    setInput((prev) => prev.slice(0, -1))
  }
  function calculateIntegral() {
    if (input && input.trim() !== "") {
      const expression = input
      .replaceAll("{","(")
      .replaceAll("}",")")

      const integral = Algebrite.run(`integral(${expression},x)`)
      const latex = Algebrite.run(`printlatex(${integral})`)
      console.log(integral)
      console.log(latex)
      setResult(latex)
      setLocked(true)
    }
  }
}

import { useState } from "react";
import { InputNumber } from "../components/InputNumber";
import { RenderMath } from "../components/RenderMath";
import { i } from "mathjs";
export function Home() {
  const [input, setInput] = useState("");
  return (
    <>
      <h1 className="tittle tittle-main">Calculadora de integrales</h1>
      <div className="container-calculator">
        
        <div className="InputPreview" >
            <RenderMath formula={input}/>
        </div>

        <div className="container-button">
          <InputNumber character="\int" onClick={handleInputSelect} />
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

          <InputNumber character="C" onClick={clear} />
          <InputNumber character="<-" onClick={deleteLastCharacter} />
        </div>
      </div>
    </>
  );
  function handleInputSelect(character) {
    setInput((prev) => prev + character + " ");
  }
  function clear() {
    setInput("");
  }
  function deleteLastCharacter(){
    setInput((prev) => prev.slice(0,-2))
  }
}

import { RenderMath } from "./RenderMath"
export function InputNumber({character, onClick}){
    return(
        <button onClick={() => onClick(character)}>
            <RenderMath formula={character} />
        </button>
    )

}
import { useState } from "react"
import "./TextInput.css"
const TextInput = (props) => {
    const placeHolderModificada = `${props.placeholder}...`
    
    const [valor, setValor] = useState('')

    const aoDigitar = (e) => {
        setValor(e.target.value)
        console.log(valor)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} placeholder={placeHolderModificada}/>
        </div>
    );
}
export default TextInput
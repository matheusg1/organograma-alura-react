import { useState } from "react"
import "./TextInput.css"
const TextInput = (props) => {
    const placeholderModificada = `${props.placeholder}...`
    
    const [valor, setValor] = useState('')

    const aoDigitar = (e) => {     
        props.aoAlterar(e.target.value)   
        setValor(e.target.value)        
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={placeholderModificada}/>
        </div>
    );
}
export default TextInput
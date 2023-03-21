import "./DropdownList.css"

const DropdownList = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterar(e.target.value)}
            required={props.required}
            value={props.value}>{props.itens.map(i => <option key={i}>{i}</option>)}
            </select>
        </div>
    );
}

export default DropdownList;
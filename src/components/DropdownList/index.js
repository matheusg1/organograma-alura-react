import "./DropdownList.css"

const DropdownList = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(i => <option key={i}>{i}</option>)}
            </select>
        </div>
    );
}

export default DropdownList;
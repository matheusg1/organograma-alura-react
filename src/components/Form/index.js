import TextInput from "../TextInput";
import "./Form.css"
import ListaSuspensa from "../DropdownList";

const Form = () => {
    const times = [
        "Programação",
        "Front-end",
        "Data Science",
        "Devops",
        "Mobile",
        "Inovação e gestão"
    ]
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label="Nome" placeholder="Digite seu nome"></TextInput>
                <TextInput label="Cargo" placeholder="Digite seu cargo"></TextInput>
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Form;
import TextInput from "../TextInput";
import "./Form.css"
import DropdownList from "../DropdownList";
import Button from "../Button";

const Form = () => {
    const times = [
        "Programação",
        "Front-end",
        "Data Science",
        "Devops",
        "Mobile",
        "Inovação e gestão"
    ]

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log("Form submetido");
        console.log(e.Nome);
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label="Nome" placeholder="Digite seu nome"></TextInput>
                <TextInput label="Cargo" placeholder="Digite seu cargo"></TextInput>
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList label="Time" itens={times}/>
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;
import { useState } from "react"
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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log("Form submetido " + nome + cargo + imagem);

    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput
                    label="Nome"
                    aoAlterar={valor => setNome(valor)}
                    placeholder="Digite seu nome"></TextInput>

                <TextInput
                    label="Cargo"
                    aoAlterar={valor => setNome(valor)}
                    placeholder="Digite seu cargo"></TextInput>

                <TextInput
                    label="Imagem"
                    aoAlterar={valor => setNome(valor)}
                    placeholder="Digite o endereço da imagem" />
                    
                <DropdownList label="Time" itens={times} />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;
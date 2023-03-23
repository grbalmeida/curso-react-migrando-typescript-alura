import { useState } from 'react';

import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

import './Formulario.css';
import { IColaborador } from '../../shared/interfaces/IColaborador';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
}

const Formulario = ({ aoColaboradorCadastrado, times } : FormularioProps) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState('');

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        setData('');
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={setNome}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={setCargo}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={setImagem}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Data de entrada no time"
                    placeholder=""
                    valor={data}
                    aoAlterado={setData}
                    tipo="date"
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={setTime}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
};

export default Formulario;
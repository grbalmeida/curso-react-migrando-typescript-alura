import { IColaborador } from '../../shared/interfaces/IColaborador';
import Colaborador from '../Colaborador';
import './Time.css';

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = ({corPrimaria, corSecundaria, nome, colaboradores} : TimeProps) => {
    return (
        (colaboradores.length > 0) ? <section className="time" style={{backgroundColor: corSecundaria}}>
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => {
                    return <Colaborador
                        corDeFundo={corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                })}
            </div>
        </section>
        : <></>
    )
};

export default Time;
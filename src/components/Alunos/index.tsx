import { useContext } from "react";
import { UserContext } from '../../contexts/user'

import { Nome } from "../Nome";

export function Alunos() {
    const { qtdAlunos, mudaNome } = useContext(UserContext)
    return (
        <div>
            <h3>Quantidade de alunos: {qtdAlunos}</h3>
            <button onClick={() => mudaNome("Rodrigo")}>
                Mudar o nome para Rodrigo
            </button>
            <br />
            <br />
            <Nome />
        </div>
    )
}
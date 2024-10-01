import { useContext } from "react"
import { UserContext } from '../../contexts/user'

export function Footer() {
    const { qtdAlunos, novoAluno } = useContext(UserContext)
    return (
        <footer>
            <hr />
            <h4>Alunos online na plataforma: {qtdAlunos}</h4>
            <h3>Footer</h3>
            <button onClick={() => novoAluno()}>
                Novo aluno
            </button>
        </footer>
    )
}
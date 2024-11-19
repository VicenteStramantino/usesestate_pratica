import styles from './VotingApp.module.css'
import { useState } from "react";
import CandidateForm from '../CandidateForm/CandidateForm.js';
import CandidateList from '../CandidateList/CandidateList.js'

const VotingApp = ({}) => {
    const[candidatos, setCandidatos] = useState([])

    const addCandidato = (nome) => {
        const newCandidato = {
          id: Date.now(),
          nome: nome,
          votos: 0,
        };
        setCandidatos([...candidatos, newCandidato]);
      };

    return(
        <>
            <div className={styles.appContainer}>
            <div className={styles.header}>Formulario de candidatos</div>
                <CandidateForm addCandidato={addCandidato}/>
                <CandidateList candidatos={candidatos}/>
            </div>
        </>
    )
}

export default VotingApp
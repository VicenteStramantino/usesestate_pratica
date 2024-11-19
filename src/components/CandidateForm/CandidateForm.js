import styles from './CandidateForm.module.css'
import { useState } from "react";
function Form(props) {
    const [ nm_candidato, setnm_candidato] = useState("");
  return (
    <div className={styles.form}>
      <input className={styles.input} type="text" placeholder="Digite algo..." value={nm_candidato}
          onChange={(e) => {
            if (e.target.value != "") {
                setnm_candidato(e.target.value);
            }
          }}/>
      <button className={styles.button} onClick={props.addCandidato(nm_candidato)}>Enviar</button>
    </div>
  );
}

export default Form;

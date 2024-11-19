import styles from './CandidateList.module.css'

function CandidateList(props) {
    function tarefas() {
      if (props.candidatos.length > 0) {
        return (
          <>
            <div className={styles.listContainer}>
                <div className={styles.header}>Candidatos:</div>
              {props.candidatos.map((candidato) => (
                <>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <p className={styles.name}>candidato.nome</p>
                        </div>
                    </div>
                </>
              ))}
            </div>
          </>
        );
      } else {
        
      }
    }
    return <>{tarefas()}</>;
  }

  export default CandidateList
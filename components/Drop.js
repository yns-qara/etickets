
import styles from '../styles/Drop.module.css'


const Drop = props => {
  // function handleClick() {
  //   const dropElement = document.querySelector(".drop__element_container");
  //   const dropHidden = document.querySelector(".drop__hidden");
  //   dropHidden.classList.toggle("flex");

  // }



  return (
    <section className={styles.drop}>
      <div className={styles.drop__container}>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}>
            <span>Ville</span>
            <svg
              width={12}
              height={7}
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-9.51934e-08 1.17615L4.76058 6.43466C4.91287 6.61184 5.10242 6.75418 5.31607 6.8518C5.52972 6.94943 5.76236 7 5.99781 7C6.23326 7 6.4659 6.94943 6.67955 6.8518C6.8932 6.75418 7.08275 6.61184 7.23504 6.43466L12 1.1701L10.9393 0L6.17343 5.26457C6.15172 5.28942 6.12483 5.30937 6.0946 5.32304C6.06437 5.33671 6.0315 5.34379 5.99825 5.34379C5.96499 5.34379 5.93213 5.33671 5.90189 5.32304C5.87166 5.30937 5.84477 5.28942 5.82307 5.26457L1.05985 0.0051851L-9.51934e-08 1.17615Z"
                fill="black"
              />
            </svg>
          </div>
          {/*  */}
          <div className={styles.drop__hidden}>
            <span>Arouit</span>
            <span>Nador</span>
            <span>casa</span>
            <span>knetra</span>
            <span>tanger</span>
            <span>rabat</span>
            <span>fes</span>
            <span>mohamadea</span>
          </div>
        </div>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}>
            <span>Date</span>
            <svg
              width={12}
              height={7}
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-9.51934e-08 1.17615L4.76058 6.43466C4.91287 6.61184 5.10242 6.75418 5.31607 6.8518C5.52972 6.94943 5.76236 7 5.99781 7C6.23326 7 6.4659 6.94943 6.67955 6.8518C6.8932 6.75418 7.08275 6.61184 7.23504 6.43466L12 1.1701L10.9393 0L6.17343 5.26457C6.15172 5.28942 6.12483 5.30937 6.0946 5.32304C6.06437 5.33671 6.0315 5.34379 5.99825 5.34379C5.96499 5.34379 5.93213 5.33671 5.90189 5.32304C5.87166 5.30937 5.84477 5.28942 5.82307 5.26457L1.05985 0.0051851L-9.51934e-08 1.17615Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.drop__hidden}>
            <span>Arouit</span>
            <span>Nador</span>
            <span>casa</span>
            <span>knetra</span>
            <span>tanger</span>
            <span>rabat</span>
            <span>fes</span>
            <span>mohamadea</span>
          </div>
        </div>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}>
            <span>Prix</span>
            <svg
              width={12}
              height={7}
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-9.51934e-08 1.17615L4.76058 6.43466C4.91287 6.61184 5.10242 6.75418 5.31607 6.8518C5.52972 6.94943 5.76236 7 5.99781 7C6.23326 7 6.4659 6.94943 6.67955 6.8518C6.8932 6.75418 7.08275 6.61184 7.23504 6.43466L12 1.1701L10.9393 0L6.17343 5.26457C6.15172 5.28942 6.12483 5.30937 6.0946 5.32304C6.06437 5.33671 6.0315 5.34379 5.99825 5.34379C5.96499 5.34379 5.93213 5.33671 5.90189 5.32304C5.87166 5.30937 5.84477 5.28942 5.82307 5.26457L1.05985 0.0051851L-9.51934e-08 1.17615Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.drop__hidden}>
            <span>Arouit</span>
            <span>Nador</span>
            <span>casa</span>
            <span>knetra</span>
            <span>tanger</span>
            <span>rabat</span>
            <span>fes</span>
            <span>mohamadea</span>
          </div>
        </div>
        <div className={styles.drop__element}>
          <div className={styles.drop__element_container}>
            <span>Bientôt expiré</span>
            <svg
              width={12}
              height={7}
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-9.51934e-08 1.17615L4.76058 6.43466C4.91287 6.61184 5.10242 6.75418 5.31607 6.8518C5.52972 6.94943 5.76236 7 5.99781 7C6.23326 7 6.4659 6.94943 6.67955 6.8518C6.8932 6.75418 7.08275 6.61184 7.23504 6.43466L12 1.1701L10.9393 0L6.17343 5.26457C6.15172 5.28942 6.12483 5.30937 6.0946 5.32304C6.06437 5.33671 6.0315 5.34379 5.99825 5.34379C5.96499 5.34379 5.93213 5.33671 5.90189 5.32304C5.87166 5.30937 5.84477 5.28942 5.82307 5.26457L1.05985 0.0051851L-9.51934e-08 1.17615Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.drop__hidden}>
            <span>Arouit</span>
            <span>Nador</span>
            <span>casa</span>
            <span>knetra</span>
            <span>tanger</span>
            <span>rabat</span>
            <span>fes</span>
            <span>mohamadea</span>
          </div>
        </div>
      </div>
    </section>

  )
}

Drop.propTypes = {}

export default Drop
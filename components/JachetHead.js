import styles from '../styles/jacheteH.module.css'

const JachetHead = ({ title, children }) => {
  return (
    <div className={styles.jachete__container}>
      <div className={styles.wrapper}>

        <h1 className={styles.title}>{title}</h1>

        <div>
          {children}
        </div>

      </div>

    </div>
  )
}


export default JachetHead
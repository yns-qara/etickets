import styles from '../styles/jacheteH.module.css'


const JachetHead = ({ title , children}) => {
  return (
    <div className={styles.jachete__container}>

      <h1 className={styles.title}>{title}</h1>


      {children}

    </div>
  )
}


export default JachetHead
import styles from '../styles/jacheteH.module.css'


const JachetHead = props => {
  return (
    <div className={styles.jachete__container}>

      <h1 className={styles.title}>{props.title}</h1>


      {props.children}

    </div>
  )
}


export default JachetHead
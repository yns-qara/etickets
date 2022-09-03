import styles from '../styles/cardsContainer.module.css'
const CardContainer = props => {
  return (
    <section className={styles.cards}>
        {props.children}
    </section>
  )
}


export default CardContainer
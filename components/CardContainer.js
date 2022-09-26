import styles from '../styles/cardsContainer.module.css'
const CardContainer = ({children}) => {
  return (
    <section className={styles.cards}>
        {children}
    </section>
  )
}


export default CardContainer
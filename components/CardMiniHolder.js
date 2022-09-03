import styles from '../styles/CardMiniHolder.module.css'
const CardMiniHolder = props => {
    return (
        <>
            <div className={styles.container}>
                {props.children}
            </div>
            <div className={styles.rects}>
                <div className={styles.rect1}></div>
                <div className={styles.rect2}></div>
                <div className={styles.rect3}></div>
            </div>
            <div className={styles.buttonH}>
                <button className={styles.button}>Voir plus</button>
            </div>
            {/* here the weird shape */}
        </>
    )
}


export default CardMiniHolder
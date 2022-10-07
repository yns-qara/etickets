
import styles from '../styles/CommingSoon.module.css'

const CommingSoon = ({ setActive, title }) => {
    return (
        <>
            <div className={styles.container}>
                <h1>comming soon</h1>
                <p id={styles.par}>{title}</p>
                <button onClick={() => setActive(false)}>got it</button>
            </div>
            <div className={styles.shadow} onClick={() => setActive(false)}>
            </div>
        </>
    )
}


export default CommingSoon
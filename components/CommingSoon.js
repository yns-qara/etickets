
import styles from '../styles/CommingSoon.module.css'
import { motion } from 'framer-motion'

const CommingSoon = ({ setActive, title }) => {
    return (
        <>
            <motion.div
                animate={{ zIndex: "999999" }}
                className={styles.container}>
                <h1>coming soon</h1>
                <p id={styles.par}>{title}</p>
                <button onClick={() => setActive(false)}>got it</button>
            </motion.div>
            <motion.div
                className={styles.shadow} onClick={() => setActive(false)}>
            </motion.div>
        </>
    )
}


export default CommingSoon
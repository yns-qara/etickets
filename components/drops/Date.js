import styles from '../../styles/Drop.module.css'
import { motion, AnimatePresence } from 'framer-motion'


const Date = ({showDate,setActiveDate}) => {
    return (
        <AnimatePresence>
            {
                showDate
                &&
                <motion.div className={styles.drop__hidden}
                    initial={{ opacity: 0, zIndex: 98 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    exit={{ opacity: 0 }}

                >
                    <span className={styles.comming_soon} onClick={() => setActiveDate("")}>comming soon</span>
                </motion.div>
            }
        </AnimatePresence>
    )
}


export default Date
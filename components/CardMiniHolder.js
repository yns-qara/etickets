import styles from '../styles/CardMiniHolder.module.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
const CardMiniHolder = ({ children, visible1, setVisible1, visible2, setVisible2, visible3, setVisible3 }) => {

    const show1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
    }
    const show2 = () => {
        setVisible1(false);
        setVisible2(true);
        setVisible3(false);
    }
    const show3 = () => {
        setVisible1(false);
        setVisible2(false);
        setVisible3(true);
    }

    useEffect(()=>{
        if(visible1){
            setTimeout(() => {
                show2();
            }, 10000);
        }
        if(visible2){
            setTimeout(() => {
                show3();
            }, 10000);
        }
        if(visible3){
            setTimeout(() => {
                show1();
            }, 10000);
        }
    },[visible1,visible2,visible3])


    return (
        <>
            <div className={styles.parent}>

                <div className={styles.container} >
                    {children}
                </div>
            </div>
            <div className={styles.rects}>
                <div className={visible1 ? styles.active : styles.rect1} onClick={show1}></div>
                <div className={visible2 ? styles.active : styles.rect2} onClick={show2}></div>
                <div className={visible3 ? styles.active : styles.rect3} onClick={show3}></div>
            </div>
            <div className={styles.buttonH}>
                {/* <button className={styles.button}>Voir plus</button> */}
            </div>
        </>
    )
}


export default CardMiniHolder
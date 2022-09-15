import styles from '../styles/cardJachete.module.css'
import MessengerP from './SVGs/MessengerP'
import WatsappP from './SVGs/WatsappP'
import TwitterP from './SVGs/TwitterP'
import Pan from './SVGs/pan'
import CountDownDL2 from './bigCountdown/cdDL'
import ArrDown from './SVGs/ArrDown'
import Plus from './SVGs/plus'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Finaliser from './Finaliser'
const CardJachete = () => {
    const [show, setShow] = useState(false)
    const [pack, setPack] = useState("pack1")
    const [price, setPrice] = useState("100")
    const [increment, setIncrement] = useState(1)
    const [toggle, setToggle] = useState(false)


    const rightPack = () => {
        if (pack === "pack1") return "Pack1"
        else if (pack === "pack2") return "Pack2"
        else if (pack === "pack3") return "Pack3"
        else if (pack === "pack4") return "Pack4"
    }
    const rightPrice = () => {
        if (price === "100") return "100"
        else if (price === "200") return "200"
        else if (price === "300") return "300"
        else if (price === "400") return "400"
    }


    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src="/qatar.png" alt="" />
                </div>
                <div className={styles.right}>
                    <h1>Mardi 30 Novembre 2021</h1>
                    <h2>Doha / Ouverture des portes à 15:42</h2>
                    <div className={styles.select_parent}>
                        <div className={styles.select}
                            onClick={() => setShow(!show)}
                        >
                            <span>{rightPack()}</span>
                            <span>{rightPrice()} MAD</span>
                            <ArrDown />

                        </div>
                        <AnimatePresence>
                            {
                                show &&
                                <motion.div className={styles.hidden}

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .4 }}
                                >
                                    <div
                                        onClick={
                                            () => {
                                                setPack("pack1");
                                                setPrice("100");
                                                setShow(!show);
                                            }
                                        }
                                    >
                                        <span>pack1</span>
                                        <span>100 MAD</span>
                                    </div>
                                    <div
                                        onClick={
                                            () => {
                                                setPack("pack2");
                                                setPrice("200");
                                                setShow(!show);
                                            }
                                        }
                                    >
                                        <span>pack2</span>
                                        <span>200 MAD</span>
                                    </div>
                                    <div
                                        onClick={
                                            () => {
                                                setPack("pack3");
                                                setPrice("300");
                                                setShow(!show);
                                            }
                                        }
                                    >
                                        <span>pack3</span>
                                        <span>300 MAD</span>
                                    </div>
                                    <div
                                        onClick={
                                            () => {
                                                setPack("pack4");
                                                setPrice("400");
                                                setShow(!show);
                                            }
                                        }
                                    >
                                        <span>pack4</span>
                                        <span>400 MAD</span>
                                    </div>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>



                    <div className={styles.button_holder}>
                        <div>
                            <span
                                onClick={
                                    () => {
                                        if (increment != 1) {

                                            setIncrement(increment - 1)
                                        }
                                    }
                                }
                            >-</span>
                            <input type="number" value={increment} min="1" />
                            <div
                                onClick={
                                    () => {
                                        setIncrement(increment + 1)
                                    }
                                }
                            >
                                <Plus />
                            </div>
                        </div>
                        <button 
                            onClick={()=> setToggle(!toggle)}  
                        >
                            <Pan />
                            <span>ACHETER MAINTENANT</span>
                        </button>
                    </div>

                    <div className={styles.counter}>
                        <CountDownDL2 name="younes" month="9" day="30" />
                    </div>
                    <h4>PARTAGEZ CET ÉVÉNEMENT</h4>
                    <div className={styles.social_media}>
                        <MessengerP />
                        <WatsappP />
                        <TwitterP />
                    </div>
                </div>
            </div>

            {
                toggle &&
                <Finaliser
                    toggle={toggle}
                    setToggle={setToggle}
                
                />
            }
        </>
    )
}


export default CardJachete
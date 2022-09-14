import styles from '../styles/Hero.module.css'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

// todo : map the images in

const imgs = [
    {
        "id": "1",
        "url": "../herocard1.png"
    },
    {
        "id": "2",
        "url": "../herocard1.png"
    },
    {
        "id": "3",
        "url": "../herocard1.png"
    },
    {
        "id": "4",
        "url": "../herocard1.png"
    },
    {
        "id": "5",
        "url": "../herocard1.png"
    },
    {
        "id": "6",
        "url": "../herocard1.png"
    },
    {
        "id": "7",
        "url": "../herocard1.png"
    },
    {
        "id": "8",
        "url": "../herocard1.png"
    },
    {
        "id": "9",
        "url": "../herocard1.png"
    },
]


const Hero = props => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <motion.div className={styles.hero__left}
                    // initial = {{width : 10}}
                    // animate = {{width : "100%"}}
                    // transition = {{ease : 'easeInOut'}}
                    // animate = {{x : 0}}
                
                >
                    <h1>
                        Plus d’<span>evenements</span> que tu aimes
                    </h1>
                    <div className={styles.hero__buttons}>
                        <a href="#" className={styles.btn}>
                            sport
                        </a>
                        <a href="#" className={styles.btn}>
                            THEATRE
                        </a>
                        <a href="#" className={styles.btn}>
                            HUMOUR
                        </a>
                        <a href="#" className={styles.btn}>
                            CONCERT
                        </a>
                        <a href="#" className={styles.btn}>
                            FESTIVAL
                        </a>
                        <a href="#" className={styles.btn}>
                            FORMATION
                        </a>
                        <a href="#" className={styles.btn}>
                            EVENEMENT
                        </a>
                        <a href="#" className={styles.btn}>
                            CINEMA
                        </a>
                        <a href="#" className={styles.btn}>
                            LOISIRS
                        </a>
                        <a href="#" className={styles.btn}>
                            SHOPPING
                        </a>
                    </div>
                </motion.div>

                <motion.div ref={carousel} className={styles.hero__right} whileTap={{ cursor: "grabbing" }}>

                    <motion.div
                        drag="x"
                        dragConstraints={{
                            right: 0,
                            left: -width
                        }}

                        className={styles.hero__slider}>

                        {
                            imgs.map((img) => {
                                return (
                                    <div className={styles.imgC} key = {img.id}>
                                        <img src={img.url} alt="" />
                                        <button>ACHETER MAINTENANT</button>
                                    </div>
                                )
                            })

                        }

                    </motion.div>

                </motion.div>
            </div>
        </section>

    )
}

Hero.propTypes = {}

export default Hero
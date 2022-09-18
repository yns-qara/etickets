import styles from '../styles/Hero.module.css'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
// todo : map the images in

const imgs = [
    {
        "id": "1",
        "url": "/herocard1.png"
    },
    {
        "id": "2",
        "url": "/herocard1.png"
    },
    {
        "id": "3",
        "url": "/herocard1.png"
    },
    {
        "id": "4",
        "url": "/herocard1.png"
    },
    {
        "id": "5",
        "url": "/herocard1.png"
    },
    {
        "id": "6",
        "url": "/herocard1.png"
    },
    {
        "id": "7",
        "url": "/herocard1.png"
    },
    {
        "id": "8",
        "url": "/herocard1.png"
    },
    {
        "id": "9",
        "url": "/herocard1.png"
    },
]


const Hero = props => {

    const [width, setWidth] = useState(0);
    // const [click, setClick] = useState(false)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    // useEffect( () => {
    //     var maxWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
    //     if( carousel.current.scrollWidth > maxWidth){
    //             moving.current.ttranslateX
    //     }
    // }, [click]);

    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__left}>
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
                </div>

                <motion.div ref={carousel} className={styles.hero__right} whileTap={{ cursor: "grabbing" }}>

                    {/* <div className={styles.arrow_left}></div> */}
                    <motion.div
                        drag="x"
                        dragConstraints={{
                            right: 0,
                            left: -width
                        }}

                        className={styles.hero__slider}
                        >

                        {
                            imgs.map((img) => {
                                return (
                                    <div className={styles.imgC} key={img.id}>
                                        {/* <img src={img.url} alt="" /> */}
                                        <Image src={img.url} width={274} height={552} alt="heroCard" />
                                        <button>ACHETER MAINTENANT</button>
                                    </div>
                                )
                            })

                        }
                    </motion.div>
                    <div className={styles.arrow_right}></div>

                </motion.div>
            </div>
        </section>

    )
}

Hero.propTypes = {}

export default Hero
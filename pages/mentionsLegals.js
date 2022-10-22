// to be back to this page with motion framer animations

import Nav from '../components/navbar'
import Footer from '../components/Footer'
import styles from '../styles/mentionsLegals.module.css'
import { motion} from 'framer-motion'
import { useState} from 'react'
import ArrDwn from '../components/SVGs/arrowDownML'

const MentionsLegals = () => {

    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)


    const toggleShow = () => {
        setShow(!show)
    }
    const toggleShow2 = () => {
        setShow2(!show2)
    }
    const toggleShow3 = () => {
        setShow3(!show3)
    }
    const toggleShow4 = () => {
        setShow4(!show4)
    }
    const toggleShow5 = () => {
        setShow5(!show5)
    }
    const toggleShow6 = () => {
        setShow6(!show6)
    }
    const toggleShow7 = () => {
        setShow7(!show7)
    }
    return (

        <>

            <Nav />

            <div className={styles.container}>

                <h1>Mentions légales</h1>
                <p>
                    ETICKETS est une marque d&apos;une société spécialisée dans les nouvelles technologies et est une plateforme de médiation client-vendeur développée par une société basée à RBAT. Fondée en 2021, c&apos;est une société spécialisée dans la vente et la commercialisation de billets.
                </p>

                <div className={styles.wrapper}>
                    <h1 onClick={toggleShow}  >1 - Dispositions générales
                        <span className={show ? styles.active_arrow : styles.arrow}
                        ><ArrDwn /></span>
                    </h1>
                    {show &&
                        <div className={styles.sub_container}>
                            <h2>1-1 Société:</h2>
                            <p>
                                Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                            </p>
                            <h2>1-2 Acceptation:</h2>
                            <p>
                                Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                            </p>
                            <h2>1-3 Objet:</h2>
                            <p>
                                Dispositions contractuelles.
                            </p>
                            <h2>1-4 Dispositions contractuelles:</h2>
                            <p>
                                La nullité d&lsquo;une clause contractuelle des Conditions Générales de Vente n&lsquo;entraînera pas la nullité de l&lsquo;intégralité des présentes.
                            </p>
                            <h2>1-5 Modification des conditions générales de vente:</h2>
                            <p>
                                ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.
                            </p>

                        </div>
                    }
                </div>
                <div className={styles.wrapper}>
                    <h1 onClick={toggleShow2}  >2 - Commandes
                        <span className={show2 ? styles.active_arrow : styles.arrow}><ArrDwn /></span></h1>
                    {show2 &&
                        <div className={styles.sub_container}>
                            <h2>1-1 Société:</h2>
                            <p>
                                Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                            </p>
                            <h2>1-2 Acceptation:</h2>
                            <p>
                                Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                            </p>
                            <h2>1-3 Objet:</h2>
                            <p>
                                Dispositions contractuelles.
                            </p>
                            <h2>1-4 Dispositions contractuelles:</h2>
                            <p>
                                La nullité d&lsquo;une clause contractuelle des Conditions Générales de Vente n&lsquo;entraînera pas la nullité de l&lsquo;intégralité des présentes.
                            </p>
                            <h2>1-5 Modification des conditions générales de vente:</h2>
                            <p>
                                ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.
                            </p>

                        </div>
                    }
                </div>
                <div className={styles.wrapper}>
                    <h1 onClick={toggleShow3}  >3 - Le prix du billet <span className={show3 ? styles.active_arrow : styles.arrow}><ArrDwn /></span></h1>
                    {show3 &&
                        <div className={styles.sub_container}>
                            <h2>1-1 Société:</h2>
                            <p>
                                Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                            </p>
                            <h2>1-2 Acceptation:</h2>
                            <p>
                                Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                            </p>
                            <h2>1-3 Objet:</h2>
                            <p>
                                Dispositions contractuelles.
                            </p>
                            <h2>1-4 Dispositions contractuelles:</h2>
                            <p>
                                La nullité d&lsquo;une clause contractuelle des Conditions Générales de Vente n&lsquo;entraînera pas la nullité de l&lsquo;intégralité des présentes.
                            </p>
                            <h2>1-5 Modification des conditions générales de vente:</h2>
                            <p>
                                ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.
                            </p>

                        </div>
                    }
                </div>
                <div className={styles.wrapper}>
                    <h1 onClick={toggleShow4}  >4 - Remise des billets ou des bon d&apos;achats<span className={show4 ? styles.active_arrow : styles.arrow}><ArrDwn /></span></h1>
                    <animatePresence>
                        {show4 &&
                            <motion.div className={styles.sub_container}
                            // initial={{ opacity: 0 }}
                            // animate={{ opacity: 1 }}
                            // transition={{ duration: .6 }}
                            >
                                <h2>1-1 Société:</h2>
                                <p>
                                    Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                                </p>
                                <h2>1-2 Acceptation:</h2>
                                <p>
                                    Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                                </p>
                                <h2>1-3 Objet:</h2>
                                <p>
                                    Dispositions contractuelles.
                                </p>
                                <h2>1-4 Dispositions contractuelles:</h2>
                                <p>
                                    La nullité d&lsquo;une clause contractuelle des Conditions Générales de Vente n&lsquo;entraînera pas la nullité de l&lsquo;intégralité des présentes.
                                </p>
                                <h2>1-5 Modification des conditions générales de vente:</h2>
                                <p>
                                    ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.
                                </p>

                            </motion.div>
                        }
                    </animatePresence>

                </div>
                <div className={styles.wrapper}>
                    <h1 onClick={toggleShow5}  >5 - Annulation, Remboursement, Utilisation<span className={show5 ? styles.active_arrow : styles.arrow}><ArrDwn /></span></h1>
                    {show5 &&
                        <div className={styles.sub_container}>
                            <h2>1-1 Société:</h2>
                            <p>
                                Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                            </p>
                            <h2>1-2 Acceptation:</h2>
                            <p>
                                Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                            </p>
                            <h2>1-3 Objet:</h2>
                            <p>
                                Dispositions contractuelles.
                            </p>
                            <h2>1-4 Dispositions contractuelles:</h2>
                            <p>
                                La nullité d&lsquo;une clause contractuelle des Conditions Générales de Vente n&lsquo;entraînera pas la nullité de l&lsquo;intégralité des présentes.
                            </p>
                            <h2>1-5 Modification des conditions générales de vente:</h2>
                            <p>
                                ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.
                            </p>

                        </div>
                    }
                </div>
                <div className={styles.wrapper}>
                    <h1 onClick={toggleShow6}  >6 - Valeur<span className={show6 ? styles.active_arrow : styles.arrow}><ArrDwn /></span></h1>
                    {show6 &&
                        <div className={styles.sub_container}>
                            <h2>1-1 Société:</h2>
                            <p>
                                Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                            </p>
                            <h2>1-2 Acceptation:</h2>
                            <p>
                                Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                            </p>
                            <h2>1-3 Objet:</h2>
                            <p>
                                Dispositions contractuelles.
                            </p>
                            <h2>1-4 Dispositions contractuelles:</h2>
                            <p>
                                La nullité d&lsquo;une clause contractuelle des Conditions Générales de Vente n&lsquo;entraînera pas la nullité de l&lsquo;intégralité des présentes.
                            </p>
                            <h2>1-5 Modification des conditions générales de vente:</h2>
                            <p>
                                ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.
                            </p>

                        </div>
                    }
                </div>
                <div className={styles.wrapper}>
                    <h1 onClick={toggleShow7}  >7 - Consignation de la valeur du Bon d&lsquo;achat<span className={show7 ? styles.active_arrow : styles.arrow}><ArrDwn /></span></h1>
                    {show7 &&
                        <div className={styles.sub_container}>
                            <h2>1-1 Société:</h2>
                            <p>
                                Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                            </p>
                            <h2>1-2 Acceptation:</h2>
                            <p>
                                Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                            </p>
                            <h2>1-3 Objet:</h2>
                            <p>
                                Dispositions contractuelles.
                            </p>
                            <h2>1-4 Dispositions contractuelles:</h2>
                            <p>
                                La nullité d&lsquo;une clause contractuelle des Conditions Générales de Vente n&lsquo;entraînera pas la nullité de l&lsquo;intégralité des présentes.
                            </p>
                            <h2>1-5 Modification des conditions générales de vente:</h2>
                            <p>
                                ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.
                            </p>

                        </div>
                    }
                </div>

            </div >

            <Footer />
        </>

    )
}


export default MentionsLegals
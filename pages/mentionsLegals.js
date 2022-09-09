// to be back to this page with motion framer animations




import styles from '../styles/mentionsLegals.module.css'



import {motion} from 'framer-motion'
const mentionsLegals = props => {
    return (
        <div>

            <motion.h1 
            
                initial = {{opacity : 0}}
                animate = {{ opacity : 1}}
                transition = {{ duration : 0.8}}
            
            >Mentions légales</motion.h1>
            <p>
                ETICKETS est une marque d'une société spécialisée dans les nouvelles technologies et est une plateforme de médiation client-vendeur développée par une société basée à RBAT. Fondée en 2021, c'est une société spécialisée dans la vente et la commercialisation de billets.
            </p>


            <ol type='1'>
                <li>
                    <details className={styles.det}>
                        <summary>Dispositions générales</summary>
                        <motion.ol
                         initial = {{opacity : 0}}
                         animate = {{opacity : 1}}
                         transition ={{duration : 0.8}}
                        
                        
                        >
                            <li>Société:</li>
                            <p>
                                Guichet Maroc est une société de droit marocain, immatriculée au registre de commerce de Casablanca sous le numéro 420685 , IF 31896857, dont le siège social est situé à Casablanca, 22, Bd Yacoub AlMansour.
                            </p>
                            <li>Acceptation:</li>
                            <p>
                                Le Membre déclare avoir pris connaissance des Conditions Générales de Vente avant de passer commande et les avoir acceptées sans réserve.
                            </p>
                            <li>Objet:</li>
                            <p>Dispositions contractuelles.</p>
                            <li>Dispositions contractuelles:</li>
                            <p>
                                La nullité d’une clause contractuelle des Conditions Générales de Vente n’entraînera pas la nullité de l’intégralité des présentes.
                            </p>
                            <li>Modification des conditions générales de vente:</li>
                            <p>ETICKETS se réserve la faculté de modifier les présentes Conditions Générales de Vente à tout moment. Les Conditions Générales de Vente applicables sont celles en vigueur à la date de la commande passée par le Membre.</p>
                        </motion.ol>
                    </details>
                </li>
            </ol>
        </div>
    )
}

mentionsLegals.propTypes = {}

export default mentionsLegals
import styles from '../styles/details.module.css'
import Cross from './SVGs/cross'
import {motion} from 'framer-motion'
const Details = ({visible,setVisible}) => {
    return (
        <>
            <motion.div 
            initial = {{opacity : 0}} 
            animate = {{opacity : 1}} 
            transition = {{duration : .6}}
            
            className={styles.container}>
                <h1>Details de la Commande </h1>
                <div className={styles.details}>
                    <p>Reference: <span>DS-95CNP56</span></p>
                    <p>Etat de la commande: <span>Paiement accepte</span></p>
                    <p>Moyen de paiement: <span>Carte bancaire Marocaine</span></p>
                </div>
                <div className={styles.table}>
                    <div className={styles.header}>
                        <span>Produit </span>
                        <span>Prix unitaire</span>
                        <span>Quantite</span>
                        <span>Total</span>
                    </div>
                    <div className={styles.main}>
                        <span>WAC vs ASF</span>
                        <span>30MAD</span>
                        <span>4</span>
                        <span>120MAD</span>
                    </div>

                    <div className={styles.prices}>
                        <span>Sous-total</span>
                        <span>120MAD</span>
                    </div>
                    <div className={styles.prices}>
                        <span>Frais de livraison </span>
                        <span>0MAD</span>
                    </div>
                    <div className={styles.prices}>
                        <span>Montant global </span>
                        <span>120MAD</span>
                    </div>
                </div>



                <div onClick={() => setVisible(!visible)}>
                    <Cross />
                </div>
            </motion.div>

            <div className={styles.back}></div>
        </>
    )
}


export default Details
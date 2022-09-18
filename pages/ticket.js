import Nav from '../components/Navbar2'
import Footer from '../components/Footer'
import styles from '../styles/ticketInfos.module.css'
import LogoT from '../components/SVGs/logoT'
import Download from '../components/SVGs/download'
const ticket = () => {
    return (
        <>
            <Nav />
            <div className={styles.container}>

                <div className={styles.title}>
                    <LogoT />
                </div>
                <div className={styles.corp}>
                    <div className={styles.detailes}>
                        <h1>Confirmation de votre commande</h1>
                        <p>Le 26/05/2022</p>
                        <p>Identifiant: <span>2402</span></p>
                        <p>Madame, Monsieur: <span>MOUAD DAHMANI</span></p>
                        <p>N° Commande: <span>205304</span></p>
                        <p>Montant: <span>200,00 MAD</span></p>
                        <p>Montant des places: <span>2</span></p>
                        <h5>Nous vous confirmons votre achat de places au nom de DAHMANI, sur notre site internet</h5>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.header}>MATCH</div>
                        <div className={styles.header}>LIEU</div>
                        <div className={styles.header}>DATE</div>
                        <div className={styles.header}>CLASSE</div>
                        <div className={styles.header}>PRIX</div>
                        <div>MATCH FINALE AL AHLY SC - WAC AC</div>
                        <div>COMPLEXE SPORTIF
                            MOHAMMED V CASABLANCA</div>
                        <div>30/05/2022 20:00</div>
                        <div>CATEGORIE
                            1</div>
                        <div>100,00 DHS</div>
                        <div>MATCH FINALE AL AHLY SC - WAC AC</div>
                        <div>COMPLEXE SPORTIF
                            MOHAMMED V CASABLANCA</div>
                        <div>30/05/2022 20:00</div>
                        <div>CATEGORIE
                            1</div>
                        <div>100,00 DHS</div>
                        <div className={styles.span3}>Montant des places </div>
                        <div>2</div>
                        <div>200,00 DHS</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className={styles.span4}>MONTANT TOTAL DU PANIER </div>
                        <div>200,00 DHS</div>
                    </div>
                    <div className={styles.qrCodeBut}>
                        <div></div>
                        <button>
                            <span>DOWNLOAD</span>
                            <Download />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}


export default ticket
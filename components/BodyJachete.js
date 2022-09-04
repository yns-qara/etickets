import styles from '../styles/BodyJachete.module.css'
const BodyJachete = props => {
    return (
        <div className={styles.container}>
            <h1>Description:</h1>
            <p>Reservez votre place pour assister à la Coupe arabe de la FIFA Qatar 2021 </p>

            <h2>Programme Du 03 au 08 Décembre 2021 :</h2>
            <div className={styles.description}>
                <dl>
                    <dt>- Jour 01: CASABLANCA - QATAR </dt>
                    <dd>Rendez-vous à l’aéroport Mohamed V et envol à destination de Doha avec Qatar Air Ways.
                        Nuitée à l’hôtel. </dd>
                </dl>

                <dl>
                    <dt>- Jour 02 : QATAR – MATCH </dt>
                    <dd>Petit déjeuner à l’hôtel, matinée libre pour découvrir la ville à votre rythme. Transfert au Stade Ahmed Bin Ali pour assister
                        au match MAROC Vs JORDAN à 19h00. Retour à l’hôtel & nuitée à l’hôtel. </dd>
                </dl>

                <dl>
                    <dt>- Jour 03 & 04 : QATAR </dt>
                    <dd>Petit déjeuner et journées libres pour découvrir la ville à votre Rythme et faire du Shopping.
                        nuitées à l’hôtel. </dd>
                </dl>


                <dl>
                    <dt>- Jour 05 : QATAR – MATCH </dt>
                    <dd>Petit déjeuner à l’hôtel, matinée libre pour découvrir la ville à votre rythme.
                        Transfert au Stade Al Thumama pour assister
                        au match MAR Vs SAUDI ARABIA à 18h00.
                        Retour à l’hôtel & nuitée à l’hôtel. </dd>
                </dl>


                <dl>
                    <dt>- Jour 06 : QATAR - CASABLANCA </dt>
                    <dd>Check- out pour prendre le vol retour à Casablanca.</dd>
                </dl>

            </div>

            <h2>Tarif du Package : </h2>
            <ul>
                <li>InterContinental Doha The City 5* : 13.900 Dhs Par Personne en Double / Supplément Single 3.990 Dhs </li>
                <li>Ezdan Hotel Doha 4* : 11.900 Dhs Par Personne en Double / Supplément Single 2.990 Dhs</li>
            </ul>


            <h2>Notre tarif comprend : </h2>

            <ul>
                <li>Billet d’avion Casablanca –Doha – Casablanca avec Qatar Air Ways</li>
                <li>05 nuitées en petit déjeuner selon l’hôtel choisi. </li>
                <li>Ticket de Stade & assistance pour l’obtention du FAN ID.</li>
                <li>Assistance Cosmopolite Travel & Events durant tout le séjour</li>
            </ul>
        </div>
    )
}


export default BodyJachete
import styles from '../styles/table.module.css'
import Undo from './SVGs/undo'

const Table = props => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.head_h1}>Mes commandes</h1>


                <table className={styles.tab}>
                    <tr>
                        <th>Événement</th>
                        <th>Date Dévénement</th>
                        <th>Etat</th>
                        <th>Mode de paiement</th>
                        <th>Date D’achat</th>
                        <th>Prix</th>
                        <th></th>
                    </tr>

                    <tr>
                        <td>Marrakech du rire</td>
                        <td>27/04/2022 </td>
                        <td>Accepté</td>
                        <td>Carte bancaire </td>
                        <td>27/04/2022 23:54:12	</td>
                        <td>100MAD</td>
                        <td className={styles.buttons_holder}>
                            <button>TÉLÉCHARGER TICKET</button>
                            <Undo />
                            <button>DÉTAILS</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Marrakech du rire</td>
                        <td>27/04/2022 </td>
                        <td>Accepté</td>
                        <td>Carte bancaire </td>
                        <td>27/04/2022 23:54:12	</td>
                        <td>100MAD</td>
                        <td className={styles.buttons_holder}>
                            <button>TÉLÉCHARGER TICKET</button>
                            <Undo />
                            <button>DÉTAILS</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Marrakech du rire</td>
                        <td>27/04/2022 </td>
                        <td>Accepté</td>
                        <td>Carte bancaire </td>
                        <td>27/04/2022 23:54:12	</td>
                        <td>100MAD</td>
                        <td className={styles.buttons_holder}>
                            <button className={styles.button_1}>TÉLÉCHARGER TICKET</button>
                            <Undo />
                            <button className={styles.button_2}>DÉTAILS</button>
                        </td>
                    </tr>

                </table>
            </div>
        </>
    )
}


export default Table
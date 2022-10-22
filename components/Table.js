import styles from '../styles/table.module.css'
import Undo from './SVGs/undo'
import Details from './Details'
import { useState } from 'react'
import Link from 'next/link'

// getServerSideProps here
// pass the data as props to Table
// map the rows with the correspondin data
// expected data from the /mescomands endpoint :
// {event title , event date , status , payement method , date of purchase , price}



const Table = () => {

    const [visible, setVisible] = useState(false)
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
                    {/* start maping from here */}
                    <tr>
                        <td>Marrakech du rire</td>
                        <td>27/04/2022 </td>
                        <td>Accepté</td>
                        <td>Carte bancaire </td>
                        <td>27/04/2022 23:54:12	</td>
                        <td>100MAD</td>
                        <td className={styles.buttons_holder}>
                            <Link href="/ticket"><button>TÉLÉCHARGER TICKET</button></Link>
                            <Undo />
                            <button onClick={() => setVisible(!visible)}>DÉTAILS</button>
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
                            <Link href="/ticket"><button>TÉLÉCHARGER TICKET</button></Link>
                            <Undo />
                            <button onClick={() => setVisible(!visible)}>DÉTAILS</button>
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
                            <Link href="/ticket">
                                <button className={styles.button_1}>TÉLÉCHARGER TICKET</button>
                            </Link>
                            <Undo />
                            <button className={styles.button_2}
                                onClick={() => setVisible(!visible)}

                            >DÉTAILS</button>
                        </td>
                    </tr>

                </table>
            </div>


            {
                visible && <Details
                    // send the details variables from here
                    // maybe use Ids for dynamique rendering
                    visible={visible}
                    setVisible={setVisible}
                />
            }
        </>
    )
}


export default Table
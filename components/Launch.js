import styles from '../styles/launch.module.css'
import Woman from './SVGs/Woman'
import { useState } from 'react'
import LaunchLogo from './SVGs/LaunchLogo';
const Launch = () => {


    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    const [success, setSuccess] = useState(false)

    const handleSignUp = (e) => {
        e.preventDefault();
        addPosts(nom, prenom, email);
    }



    const addPosts = async (nom, prenom , email) => {
        const response = await fetch('https://6340100ad1fcddf69cb045a9.mockapi.io/api/v1/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: nom,
                prenom: prenom,
                email: email
            })
        });
        return response.json();
    };


    return (
        <>


            <div className={styles.container}>
                <div className={styles.logo}>
                    <LaunchLogo />
                </div>

                <h1>Plusieurs nouvelles arrivent très bientôt</h1>
                <p>Entrez votre adresse e-mail pour être au courant en premier et bénéficiez de nos offres incroyables!</p>

                <form
                    className={styles.form}
                    onSubmit={handleSignUp}
                >
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setNom(e.target.value)}
                            placeholder='Nom'
                            required
                        />
                        <input
                            type="text"
                            onChange={(e) => setPrenom(e.target.value)}
                            placeholder='Prenom'
                            required
                        />
                    </div>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    <button type='submit'>Envoyer</button>
                </form>

                <div className={styles.woman}>
                    <Woman />
                </div>
            </div>
            <footer className={styles.footer}></footer>

        </>
    )
}

export default Launch
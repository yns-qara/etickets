import styles from '../styles/infoHolder.module.css'
const InfoHolder = props => {

    return (
        <div className={styles.container}>
            <form
                onSubmit={props.handleSubmit}
                onReset={props.handleReset}
                className={styles.form__container}>
                <h1 className={styles.h}>Mes informations</h1>
                {props.children}
                <div className={styles.button__holder}>

                    <button type="submit">MODIFIER</button>
                    <button type="reset">ANNULER</button>
                </div>
            </form>
        </div>
    )

}


export default InfoHolder
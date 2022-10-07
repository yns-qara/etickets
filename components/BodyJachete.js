import styles from '../styles/BodyJachete.module.css'
const BodyJachete = ({ description }) => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Description:</h1>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}


export default BodyJachete
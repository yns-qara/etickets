import styles from '../styles/launch.module.css'
import Image from 'next/image'
const Launch = () => {


    return (
        <>
            <div className={styles.container}>
                <h1>ouverture prochaine. <span>a tres vite</span></h1>

                <div>
                    <Image src="/etic.jpg" width="750" height="600" />
                </div>
            </div>
        </>
    )
}

export default Launch
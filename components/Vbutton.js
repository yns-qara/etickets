import styles from '../styles/Vbutton.module.css'
import Link from 'next/link'
const Vbutton = () => {
  return (
    <div className={styles.container}>
      <Link href="/payement">CONFIRME DACHAT </Link>
    </div>



  )
}


export default Vbutton
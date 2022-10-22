import Navbar2 from "../components/Navbar2"
import Footer from "../components/Footer"
import styles from "../styles/payement.module.css"
import Image from "next/image"
import Credit from "../components/SVGs/credit"
const Finaliser = () => {
  const total = 100;
  return (
    <>
      <Navbar2 />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
          <Image src="/credit_card.jpg" width={650} height={400} alt="carte bancaire" />

          </div>
          <div className={styles.right}>
            <h1>Payment Details</h1>

            <div className={styles.card_number}>
              <input type="number" placeholder="card number" required />
              <Credit />
            </div>

            <input type="text" placeholder="cardholder name" required />

            <div className={styles.numbers}>
              <input type="number" placeholder="12" required/>
              <input type="number" placeholder="2022" required/>
              <div>
                <input type="number" placeholder="cvv" required/>
              </div>
            </div>
            <div className={styles.buttons}>
              <button>confirm and pay {total} MAD</button>
              <button>cancel</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Finaliser
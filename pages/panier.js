import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import H1 from "../components/H1"
import HeadHolder from "../components/HeadHolder"
import MesTickets from "../components/MesTickets"
import Ticket from "../components/Ticket"
import Checkout from "../components/Checkout"
import Total from '../components/Total'
import Codepromo from '../components/Codepromo'
import Payment from '../components/Payment'
import ModeDePayment from '../components/ModeDePayment'
import ControlButtons from '../components/ControlButtons'
import Vbutton from '../components/Vbutton'
import Cbutton from '../components/Cbutton'
import s from '../styles/s.module.css'


// we should get the cart items here from a get request along with order_id

// when the client is ready to purchase the cart
// we pass the order id to the payement page
// after the client enters the correct identity informations
// then we post a request to /payment endpoint with the folowing data:
// {order_id , description , card_number , exp_month , exp_year , cvc}


const monPanier = () => {
    return (
        <>
            <Navbar />


            <div className={s.cont}>
                <H1 />
                <HeadHolder>

                    <MesTickets>

                        <Ticket imgURL="/final.png" title="Wydad Athletic Club vs Al Ahly" sub="PPC: 200MADSous-total: " placeholder="2" />
                        <Ticket imgURL="/jamal.png" title="Marrakech du rire" sub="PPC: 100MADSous-total: " placeholder="4" />
                        <Ticket imgURL="/jamal.png" title="Marrakech du rire" sub="PPC: 100MADSous-total: " placeholder="4" />

                    </MesTickets>

                    <Checkout>
                        <Total />
                        <Codepromo />
                    </Checkout>

                </HeadHolder>
                <div className={s.flex_start}>
                    <Payment>
                        <ModeDePayment />
                        <ControlButtons >
                            <Vbutton />
                            <Cbutton />
                        </ControlButtons>
                    </Payment>
                </div>
            </div>




            <Footer />



        </>
    )
}


export default monPanier
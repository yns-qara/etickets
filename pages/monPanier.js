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






const monPanier = props => {
  return (
    <>
        <H1 />
        <HeadHolder>

            <MesTickets>
                
                <Ticket imgURL="/final.png" title="Wydad Athletic Club vs Al Ahly" sub="PPC: 200MADSous-total: " placeholder="2" />
                <Ticket imgURL="/jamal.png" title="Marrakech du rire" sub="PPC: 100MADSous-total: " placeholder="4" />

            </MesTickets>
            
            <Checkout>
                <Total />
                <Codepromo />
            </Checkout>

        </HeadHolder>

        <Payment>
            <ModeDePayment />
            <ControlButtons>
                <Vbutton />
                <Cbutton />
            </ControlButtons>
        </Payment>



        <Footer /> 
    
    
    
    </>
  )
}


export default monPanier
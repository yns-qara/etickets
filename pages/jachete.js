import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import Header from "../components/Header"
import JachetHead from '../components/JachetHead'
import CardJachete from "../components/CardJachete"
import BodyJachete from "../components/BodyJachete"
import Login from "../components/Login"
const Jachete = props => {
  return (
    <>
    
        <Navbar />
        <JachetHead title="FIFA World Cup QATAR 2022">
            <CardJachete />
        </JachetHead>
        {/* <Login /> */}
        <BodyJachete />
        <Footer />
    </>
  )
}


export default Jachete
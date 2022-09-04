import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import Header from "../components/Header"
import JachetHead from '../components/JachetHead'
import CardJachete from "../components/CardJachete"
import BodyJachete from "../components/BodyJachete"

const Jachete = props => {
  return (
    <>
        <Navbar />
        <JachetHead title="FIFA World Cup QATAR 2022">
            <CardJachete />
        </JachetHead>
        <BodyJachete />
    </>
  )
}


export default Jachete
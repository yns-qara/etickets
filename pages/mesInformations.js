import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Input from "../components/Input"
import infoHolder from "../components/infoHolder"
const mesInformations = props => {
    return (
        <>
            {/* <Navbar /> */}
            <infoHolder>
            <Input
                label="name"
                type="text"
                ID = "inpt"
                placeholder="wassim"
            />
            </infoHolder>

            {/* <Footer /> */}
        </>
    )
}


export default mesInformations
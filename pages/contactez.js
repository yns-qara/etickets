import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"


import HoldContact from "../components/HoldContact"
import FormContact from "../components/FormContact"




const monPanier = props => {
    return (
        <>
            <Navbar />
            <HoldContact>
                <FormContact />
            </HoldContact>
            <Footer />

        </>
    )
}


export default monPanier
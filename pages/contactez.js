import Navbar from "../components/navbar"
import Navbar2 from "../components/Navbar2"

import Footer from "../components/Footer"


import HoldContact from "../components/HoldContact"
import FormContact from "../components/FormContact"




const monPanier = props => {
    const logedIn = false;
    return (
        <>
            {logedIn ? <Navbar2 /> : <Navbar />}
            <HoldContact>
                <FormContact />
            </HoldContact>
            <Footer />

        </>
    )
}


export default monPanier
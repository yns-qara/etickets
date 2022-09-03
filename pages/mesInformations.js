import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Input from "../components/Input"
import InfoHolder from "../components/infoHolder"
const mesInformations = props => {
    return (
        <>
            <Navbar />
            <InfoHolder>
                <Input
                    label="Nom"
                    type="text"
                    ID="inpt"
                    placeholder="Sachhi"
                />
                <Input
                    label="Prenom"
                    type="text"
                    ID="inpt"
                    placeholder="wassim"
                />
                <Input
                    label="Email"
                    type="email"
                    ID="inpt"
                    placeholder="wa6msachhi@gmail.com"
                />
                <Input
                    label="Telephone"
                    type="tel"
                    ID="inpt"
                    placeholder="+32484821006"
                />

            </InfoHolder>

            <Footer />
        </>
    )
}


export default mesInformations
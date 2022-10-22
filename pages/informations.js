import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import Input from "../components/Input"
import InfoHolder from "../components/infoHolder"
import { useState } from "react"


// from here we will getServerSideProps so we can get the { nom , prenom , email , tele} of the current user,
// we will store the data recieved in data object
// we pass that object throught props to mesInformations
// on the declaration of the useStates, we set the default value of our states to the corresponding data. ex: 
// const [nom, setNom] = useState(data.nom);
// as for the placeholder we set the value to the corresponding data as well
// as for the handleReset function we set the states of our user data to the default data recieved from the server
// as for the handleSubmit function , if all the input fields are changed then we post a request with all the data.
// if one or more fields did not change we submit only the changed values or we submit the changed values as well as the unchanged ones
// DO NOT post an emty string 


const Informations = () => {
    const [nom, setNom] = useState("Sachhi");
    const [prenom, setPrenom] = useState("wassim");
    const [email, setEmail] = useState("wa6msachhi@gmail.com");
    const [tele, setTele] = useState(32484821006);


    const handleSubmit = async () => {
        // send a post request to the user end poit to update the user informations
        // just submit {nom , prenom , email , tele} and it will work
    }
    const handleReset = () => {
        // const [nom, setNom] = useState(data.nom);
        // const [prenom, setPrenom] = useState(data.prenom);
        // const [email, setEmail] = useState(data.email);
        // const [tele, setTele] = useState(data.tele);
    }

    return (
        <>
            <Navbar />
            {/* console login test */}

            {/* {nom}
            <br />
            {prenom}
            <br />
            <br />
            <br />
            {email}
            <br />
            {tele}
            <br /> */}

            {/* console login test */}
            <InfoHolder
                handleSubmit={handleSubmit}
                handleReset={handleReset}
            >
                <Input
                    label="Nom"
                    type="text"
                    ID="inpt"
                    placeholder="Sachhi"
                    nom={nom}
                    setNom={setNom}
                />
                <Input
                    label="Prenom"
                    type="text"
                    ID="inpt"
                    placeholder="wassim"
                    prenom={prenom}
                    setPrenom={setPrenom}
                />
                <Input
                    label="Email"
                    type="email"
                    ID="inpt"
                    placeholder="wa6msachhi@gmail.com"
                    email={email}
                    setEmail={setEmail}
                />
                <Input
                    label="Telephone"
                    type="tel"
                    ID="inpt"
                    placeholder="+32484821006"
                    tele={tele}
                    setTele={setTele}
                />

            </InfoHolder>

            <Footer />
        </>
    )
}


export default Informations
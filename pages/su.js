import { useState } from "react"

const Su = () => {

    const [nom, setNom] = useState('younes');
    const [prenom, setPrenom] = useState('qara');
    const [tele, setTele] = useState('0679072113');
    const [email, setEmail] = useState('b@gmail.com');
    const [password, setPassword] = useState('testtest');


    

    const handleSignUp = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: nom,
                lastName: prenom,
                telephone: tele,
                email: email,
                password: password
            })
        });
        await setresp(response.json());
        return response.json();
    }


    return (
        <>
            <button onClick={handleSignUp}>Click Here</button>
            <h1>{nom}</h1>
        </>
    )
}


export default Su
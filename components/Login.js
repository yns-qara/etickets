import Link from "next/link"


const Login = props => {
  return (
    <form action="">
        <h1>Connexion</h1>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Mot de passe" />
        <h4>Ou</h4>
        <div>

        </div>
        <button type="submit"></button>

        <Link href="#">Mot de passe oublie?</Link>
    </form>
  )
}


export default Login
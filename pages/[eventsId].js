import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import JachetHead from '../components/JachetHead'
import CardJachete from "../components/CardJachete"
import BodyJachete from "../components/BodyJachete"
import { motion} from 'framer-motion'
import { useRouter } from "next/router"
import { useEffect } from "react"
// replace this with an api fetch to get the specific details based on the ID



export const getServerSideProps = async (context) => {
  const {params} = context;
  const res = await fetch(`https://6340100ad1fcddf69cb045a9.mockapi.io/api/v1/events/${params.eventsId}`);
  const data = await res.json();
  return {
    props: {
      evenement: data
    }
  }
}


const Jachete = ({evenement}) => {

  // const router = useRouter();
  // const eventsId = router.query.eventsId;


  return (
    <>
      <animatePresense>

        <Navbar />
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .8, ease: 'easeInOut' }}

        >
          <JachetHead title={evenement.title}>
            <CardJachete 
               title={evenement.title}
               date={evenement.date}
               lieu={evenement.lieu}
               month={evenement.month}
               day={evenement.day}
               prix={evenement.price}
               city={evenement.city}
               imgURL={evenement.url}
            />
          </JachetHead>
          
          <BodyJachete />
          <Footer />
        </motion.div>
      </animatePresense>

    </>

  )
}


export default Jachete
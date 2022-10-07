import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import JachetHead from '../components/JachetHead'
import CardJachete from "../components/CardJachete"
import BodyJachete from "../components/BodyJachete"
import { motion} from 'framer-motion'



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
               detailsImg={evenement.detailsImg}
            />
          </JachetHead>
          
          <BodyJachete description={evenement.description} />

          <Footer />

        </motion.div>
      </animatePresense>

    </>

  )
}


export default Jachete
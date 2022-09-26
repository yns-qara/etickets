import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import JachetHead from '../components/JachetHead'
import CardJachete from "../components/CardJachete"
import BodyJachete from "../components/BodyJachete"
import { motion} from 'framer-motion'

const Jachete = () => {
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
          <JachetHead title="FIFA World Cup QATAR 2022">
            <CardJachete />
          </JachetHead>
          
          <BodyJachete />
          <Footer />
        </motion.div>
      </animatePresense>
    </>
  )
}


export default Jachete
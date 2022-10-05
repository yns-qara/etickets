import Navbar from "../components/Navbar2"
import Footer from "../components/Footer"
import JachetHead from '../components/JachetHead'
import CardJachete from "../components/CardJachete"
import BodyJachete from "../components/BodyJachete"
import { motion} from 'framer-motion'
import { useRouter } from "next/router"
// replace this with an api fetch to get the specific details based on the ID




const Jachete = () => {

  const router = useRouter();
  const detailsId = router.query.details;

  const fetchedData = [
    {
      id: '1',
      title: 'jamal humour',
      genre: 'humour',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Marrakech',
      lieu: 'Cinema megarama',
      month: '9',
      day: '19',
      price: '200',
      sold: 'false',
      reserved: 'false',
      url: '/cardB.png'

    },
    {
      id: '2',
      title: 'mawazine',
      genre: 'music',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Rabat',
      lieu: 'Cinema rabat',
      month: '11',
      day: '19',
      price: '250',
      sold: 'false',
      reserved: 'false',
      url: '/cardB2.png'

    },
    {
      id: '3',
      title: 'mawazine',
      genre: 'music',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Rabat',
      lieu: 'Cinema rabat',
      month: '11',
      day: '19',
      price: '250',
      sold: 'false',
      reserved: 'false',
      url: '/cardB2.png'

    },
    {
      id: '4',
      title: 'mawazine',
      genre: 'music',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Rabat',
      lieu: 'Cinema rabat',
      month: '11',
      day: '19',
      price: '250',
      sold: 'false',
      reserved: 'false',
      url: '/cardB2.png'

    },
    {
      id: '5',
      title: 'mawazine',
      genre: 'music',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Rabat',
      lieu: 'Cinema rabat',
      month: '11',
      day: '19',
      price: '250',
      sold: 'false',
      reserved: 'false',
      url: '/cardB2.png'

    },
    {
      id: '6',
      title: 'mawazine',
      genre: 'music',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Rabat',
      lieu: 'Cinema rabat',
      month: '11',
      day: '19',
      price: '250',
      sold: 'false',
      reserved: 'false',
      url: '/cardB2.png'

    },
    {
      id: '7',
      title: 'Coup de monde',
      genre: 'sport',
      date: 'Samedi 31 Aout 2022 - 12:45',
      city: 'Qatar',
      lieu: 'stadium',
      month: '10',
      day: '19',
      price: '300',
      sold: 'false',
      reserved: 'false',
      url: '/cardB3.png'

    },
    {
      id: '8',
      title: 'Coup de monde',
      genre: 'sport',
      date: 'Samedi 31 Aout 2022 - 12:45',
      city: 'Qatar',
      lieu: 'stadium',
      month: '10',
      day: '19',
      price: '300',
      sold: 'false',
      reserved: 'false',
      url: '/cardB3.png'

    },
    {
      id: '9',
      title: 'jamal humour',
      genre: 'humour',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Marrakech',
      lieu: 'Cinema megarama',
      month: '9',
      day: '19',
      price: '200',
      sold: 'false',
      reserved: 'false',
      url: '/cardB.png'

    },
    {
      id: '10',
      title: 'Champions league',
      genre: 'sport',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Marrakech',
      lieu: 'stadium',
      month: '9',
      day: '25',
      price: '350',
      sold: 'false',
      reserved: 'false',
      url: '/cardB5.png'
    }
  ]

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
          <JachetHead title={detailsId}>
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
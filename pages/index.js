import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Drop from '../components/Drop'
import Header from '../components/Header'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import VoirPlusButton from '../components/VoirPlusButton'
import Marketplace from '../components/Marketplace'
import CardMini from '../components/CardMini'
import CardMiniHolder from '../components/CardMiniHolder'
import Qualities from '../components/Qualities'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


// this is commented because we still finding a way to replace the local host api with the actual api,
// when deploying and after finding out how to use the api with env variables we uncomment the below code and delete the array fetshed Data we also make sure toadd fetshed data as props

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/hello');
//   // const res = await fetch('/api/hello');
//   // const res = await fetch('http://127.0.0.1:3000/api/hello');
//   const data = await res.json();

//   return {
//     props: {
//       fetchedData: data
//     }
//   }
// }



// Home({ fetchedData  })

export default function Home() {
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
    },
    {
      id: '11',
      title: 'dizzy dross',
      genre: 'music',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Casa blanca',
      lieu: 'Cinema megarama',
      month: '9',
      day: '20',
      price: '250',
      sold: 'false',
      reserved: 'false',
      url: '/cardB6.png'

    },
    {
      id: '12',
      title: 'festival',
      genre: 'entertainment',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Marrakech',
      lieu: 'Cinema megarama',
      month: '12',
      day: '9',
      price: '50',
      sold: 'false',
      reserved: 'false',
      url: '/cardB7.png'

    },
    {
      id: '13',
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
      id: '14',
      title: 'Jamal',
      genre: 'humour',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Marrakech',
      lieu: 'Cinema megarama',
      month: '10',
      day: '1',
      price: '100',
      sold: 'false',
      reserved: 'false',
      url: '/cardB8.png'

    },
    {
      id: '15',
      title: 'dizzy dross',
      genre: 'music',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Casa blanca',
      lieu: 'Cinema megarama',
      month: '9',
      day: '20',
      price: '250',
      sold: 'false',
      reserved: 'false',
      url: '/cardB6.png'

    },
    {
      id: '16',
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
    },
    {
      id: '17',
      title: 'Sanae jabrane',
      genre: 'gala',
      date: 'Samedi 30 Aout 2022 - 16:45',
      city: 'Nador',
      lieu: 'Cinema megarama',
      month: '9',
      day: '15',
      price: '300',
      sold: 'false',
      reserved: 'false',
      url: '/cardB9.png'

    }
  ]
  const [AllEvents, setAllEvents] = useState([]) // this is the state where to save the fetched data
  const [FiltredEvents, setFiltredEvents] = useState([])

  const [activeVille, setActiveVille] = useState("")
  const [activeDate, setActiveDate] = useState("")
  const [activePrix, setActivePrix] = useState(0)
  const [expriredSoon, setExpriredSoon] = useState(false)

  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const [limit, setLimit] = useState(8);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setAllEvents(fetchedData);
    setFiltredEvents(fetchedData);
  }, []);
  // add fetchedData as a dependency to the useeffect above when fetching from an api



  return (
    <>


      <Header>
        <Navbar />
        <Hero />
      </Header>
      <Drop
        AllEvents={AllEvents}
        setAllEvents={setAllEvents}
        filtredEvents={FiltredEvents}
        setFiltredEvents={setFiltredEvents}
        activeVille={activeVille}
        setActiveVille={setActiveVille}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
        activePrix={activePrix}
        setActivePrix={setActivePrix}
        expriredSoon={expriredSoon}
        setExpriredSoon={setExpriredSoon}
        active = {active}
        setActive = {setActive}
      />


      <motion.div
        layout
      >
        <CardContainer>
          <AnimatePresence>
            {
              FiltredEvents.slice(0, limit).map((card) => {
                return (
                  <div
                    key={card.id}>
                    <Card
                      title={card.title}
                      genre={card.genre}
                      date={card.date}
                      city={card.city}
                      lieu={card.lieu}
                      month={card.month}
                      day={card.day}
                      price={card.price}
                      sold={card.sold}
                      reserved={card.reserved}
                      imgURL={card.url}
                      link={'/' + card.title}

                    />
                  </div>
                )
              })
            }
          </AnimatePresence>


        </CardContainer>
      </motion.div>


      {
        // this logic .lenght migh change cause the data fetched is .json maybe
        (limit < fetchedData.length) &&
        <VoirPlusButton limit={limit} setLimit={setLimit} />
      }

      <Marketplace>
        <AnimatePresence>
          <CardMiniHolder
            visible1={visible1}
            visible2={visible2}
            visible3={visible3}

            setVisible1={setVisible1}
            setVisible2={setVisible2}
            setVisible3={setVisible3}

          >
            {
              visible1 &&
              <>
                <CardMini imgURL="/cardB8.png" />
                <CardMini imgURL="/cardB8.png" />
                <CardMini imgURL="/cardB8.png" />
                <CardMini imgURL="/cardB8.png" />
              </>
            }
            {
              visible2 &&
              <>
                <CardMini imgURL="/cardB9.png" />
                <CardMini imgURL="/cardB9.png" />
                <CardMini imgURL="/cardB9.png" />
                <CardMini imgURL="/cardB9.png" />
              </>
            }
            {
              visible3 &&
              <>
                <CardMini imgURL="/cardB3.png" />
                <CardMini imgURL="/cardB3.png" />
                <CardMini imgURL="/cardB3.png" />
                <CardMini imgURL="/cardB3.png" />

              </>
            }

          </CardMiniHolder>
        </AnimatePresence>
      </Marketplace>
      <Qualities />
      <Footer active = {active} setActive = {setActive} />

    </>
  )
}

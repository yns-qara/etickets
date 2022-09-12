import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Drop from '../components/Drop'
import Header from '../components/Header'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import VoirPlusButton from '../components/VoirPlusButton'
import Marketplace from '../components/Marketplace'
import MarketplaceHolder from '../components/MarketplaceHolder'
import CardMini from '../components/CardMini'
import CardMiniHolder from '../components/CardMiniHolder'
import Qualities from '../components/Qualities'
import Footer from '../components/Footer'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import { motion, AnimatePresence } from 'framer-motion'




export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return {
    props: {
      fetchedData: data
    }
  }
}





export default function Home({ fetchedData }) {
  const [AllEvents, setAllEvents] = useState([]) // this is the state where to save the fetched data
  const [FiltredEvents, setFiltredEvents] = useState([])

  const [activeVille, setActiveVille] = useState("")
  const [activeDate, setActiveDate] = useState("")
  const [activePrix, setActivePrix] = useState(0)
  const [expriredSoon, setExpriredSoon] = useState(false)

  // this is just a place holder in practice we use the useeffect bellow
  // const fetchedData = [
  //   {
  //     "id": "1",
  //     "title": "jamal humour",
  //     "genre": "humour",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "Marrakech",
  //     "lieu": "Cinema megarama",
  //     "month" : "12",
  //     "day" : "19",
  //     "price": "200",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB.png"

  //   },
  //   {
  //     "id": "2",
  //     "title": "mawazine",
  //     "genre": "music",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "Rabat",
  //     "lieu": "Cinema rabat",
  //     "month" : "11",
  //     "day" : "19",
  //     "price": "250",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB2.png"

  //   },
  //   {
  //     "id": "3",
  //     "title": "Coup de monde",
  //     "genre": "sport",
  //     "date": "Samedi 31 Aout 2022 - 12:45",
  //     "city": "Qatar",
  //     "lieu": "stadium",
  //     "month" : "10",
  //     "day" : "19",
  //     "price": "300",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB3.png"

  //   },
  //   {
  //     "id": "4",
  //     "title": "marvel avengers",
  //     "genre": "cinema",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "knetra",
  //     "lieu": "Cinema",
  //     "month" : "10",
  //     "day" : "9",
  //     "price": "200",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB4.png"

  //   },
  //   {
  //     "id": "5",
  //     "title": "Champions league",
  //     "genre": "sport",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "Marrakech",
  //     "lieu": "stadium",
  //     "month" : "9",
  //     "day" : "25",
  //     "price": "350",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB5.png"

  //   },
  //   {
  //     "id": "6",
  //     "title": "dizzy dross",
  //     "genre": "music",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "Casa blanca",
  //     "lieu": "Cinema megarama",
  //     "month" : "9",
  //     "day" : "20",
  //     "price": "250",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB6.png"

  //   },
  //   {
  //     "id": "7",
  //     "title": "festival",
  //     "genre": "entertainment",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "Marrakech",
  //     "lieu": "Cinema megarama",
  //     "month" : "12",
  //     "day" : "9",
  //     "price": "50",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB7.png"

  //   },
  //   {
  //     "id": "8",
  //     "title": "Jamal",
  //     "genre": "humour",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "Marrakech",
  //     "lieu": "Cinema megarama",
  //     "month" : "10",
  //     "day" : "1",
  //     "price": "100",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB8.png"

  //   },
  //   {
  //     "id": "9",
  //     "title": "Sanae jabrane",
  //     "genre": "gala",
  //     "date": "Samedi 30 Aout 2022 - 16:45",
  //     "city": "Nador",
  //     "lieu": "Cinema megarama",
  //     "month" : "9",
  //     "day" : "15",
  //     "price": "300",
  //     "sold": "false",
  //     "reserved": "false",
  //     "url": "/cardB9.png"

  //   }

  // ]
  // setAllEvents(fetchedData);

  // end of place holder.

  useEffect(() => {
    setAllEvents(fetchedData);
    setFiltredEvents(fetchedData);
  }, []);




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
      />


      <motion.div
        layout
      >
        <CardContainer>
          <AnimatePresence>
            {
              FiltredEvents.map((card) => {
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


                    />
                  </div>
                )
              })
            }
          </AnimatePresence>


        </CardContainer>
      </motion.div>



      <VoirPlusButton />

      <Marketplace>
        <CardMiniHolder>
          <CardMini imgURL="/cardB.png" />
          <CardMini imgURL="/cardB.png" />
          <CardMini imgURL="/cardB.png" />
          <CardMini imgURL="/cardB.png" />
        </CardMiniHolder>
      </Marketplace>
      <Qualities />
      <Footer />

    </>
  )
}

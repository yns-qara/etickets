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
import Router from 'next/router'



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
          <CardMini imgURL="/cardB8.png" />
          <CardMini imgURL="/cardB8.png" />
          <CardMini imgURL="/cardB8.png" />
          <CardMini imgURL="/cardB8.png" />
        </CardMiniHolder>
      </Marketplace>
      <Qualities />
      <Footer />

    </>
  )
}

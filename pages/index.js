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
import styles from '../styles/CardMiniHolder.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import { motion, AnimatePresence } from 'framer-motion'
import Router from 'next/router'



export const getStaticProps = async () => {
  // const res = await fetch('http://localhost:3000/api/hello');
  const res = await fetch('http://127.0.0.1:3000/api/hello');
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

  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

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
                      link={'/jachete' + card.id}

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
      <Footer />

    </>
  )
}

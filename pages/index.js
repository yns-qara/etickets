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


export const getServerSideProps = async () => {
  const res = await fetch('https://6340100ad1fcddf69cb045a9.mockapi.io/api/v1/events');
  const data = await res.json();
  return {
    props: {
      fetchedData: data
    }
  }
}


// test the comit

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

  const [limit, setLimit] = useState(8);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setAllEvents(fetchedData);
    setFiltredEvents(fetchedData);
  }, [fetchedData]);



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
        active={active}
        setActive={setActive}
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
                      link={'/' + card.id}

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
        (limit <  fetchedData.length) &&
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
      <Footer active={active} setActive={setActive} />

    </>
  )
}

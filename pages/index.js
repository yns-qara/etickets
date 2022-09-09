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
import Footer from '../components/Footer'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import { motion } from 'framer-motion'

export default function Home() {
  // this object can be passed by props from utils.js when the server delivers the data, also the url of imges is not the only data we work on on cards, date of finish, name of event, price, city,...
  const imgs = [
    {
      "id": "1",
      "url": "/cardB.png"
    },
    {
      "id": "2",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    },
    {
      "id": "3",
      "url": "/cardB.png"
    }
  ]
  return (
    <>

      <Header>
        <Navbar />
        <Hero />
      </Header>
      <Drop />

      {/* <Popup triger={true} /> */}

      <CardContainer>

        {
          imgs.map((img) => {
            return (
              <div key={img.id}>
                <Card imgURL={img.url} />
              </div>
            )
          })
        }

      </CardContainer>
      <VoirPlusButton />

      <Marketplace>
        <CardMiniHolder>
          <CardMini imgURL="/cardB.png" />
          <CardMini imgURL="/cardB.png" />
          <CardMini imgURL="/cardB.png" />
          <CardMini imgURL="/cardB.png" />
        </CardMiniHolder>
        {/* maybe here: the weird shape */}

      </Marketplace>

      <Footer />

    </>
  )
}

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

export default function Home() {
  return (
    <>

      <Header>
        <Navbar />
        <Hero />
      </Header>

      <Drop />

      <CardContainer>
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
        <Card imgURL="/cardB.png" />
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

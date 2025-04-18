import React from 'react'
import Navbar from '../components/Navbar'
import HomeText from '../components/HomeText'
import AnimatedCards from '../components/AnimatedCards'
import FeaturedCollection from '../components/FeaturedCollection'
import TrendingNfts from '../components/TrendingNfts'
import TopSeller from '../components/TopSeller'
import Auction from '../components/Auction'
import TopCollection from '../components/TopCollection'
import Sold from '../components/Sold'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'
import EmailSignup from '../components/EmailSignup'
import DigitalAssets from '../components/DigitalAssets'
import BoostNfts from '../components/BoostNfts'
import LandingTop from '../components/LandingTop'

const LandingPage = () => {
  return (
    <div >
      <Navbar/>
      <HomeText/>
      <LandingTop/>
      {/* <AnimatedCards/> */}
      <FeaturedCollection/>
      <TrendingNfts/>
      <TopSeller/>
      <Auction/>
      <TopCollection/>
      <Sold/>
      <DigitalAssets/>
      <BoostNfts/>
      <Accordion/>
      <EmailSignup/>
      <Footer/>
    </div>
  )
}

export default LandingPage

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from '../Assets/12.jpg'
import Destination from '../Destiantion/Destination'
import Trip from '../Trip/Trip'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero'
      HeroImg={Image}
      title='Your Journey Your Story'
      text='Choose Your Favourite Destination'
      btnClass='btnclass'
      btnText='Travel Plan'
      url='/'

       />
       <Destination />
       <Trip />
       <Footer />

    </div>

  )
}

export default Home
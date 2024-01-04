import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from'../Assets/img7.jpg'
import Footer from '../Footer/Footer'
import Trip from '../Trip/Trip'

const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero-mid'
      HeroImg={Image}
      title='Service'
      />
      <Trip />
      <Footer />
    </div>
  )
}

export default Service
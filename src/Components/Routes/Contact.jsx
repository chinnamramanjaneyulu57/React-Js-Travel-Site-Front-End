import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Image from '../Assets/img2.jpg'
import Footer from '../Footer/Footer'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName='hero-mid'
      HeroImg={Image}
      title='Contact'
      />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default Contact
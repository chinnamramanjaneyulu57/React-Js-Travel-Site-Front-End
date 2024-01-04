import React from 'react'
import Image1 from '../Assets/i2.jpg'
import Image2 from '../Assets/i3.jpg'
import Image3 from '../Assets/i4.jpeg'
import Image4 from '../Assets/i5.jpg'
import './Destination.css'
import Destinationdata from '../Destiantion/Destinationdata'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Travelling is an amazing way to learn a lot of things in life.</p>
        <Destinationdata 
          cName='first-des'
          heading='Taal Valcano, Batangas'
          data='Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.'
          img1={Image1}
          img2={Image2}
        />

        <Destinationdata 
          cName='first-des-reverse'
          heading='Taal Valcano, Batangas'
          data='Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.'
          img1={Image3}
          img2={Image4}
        />

    </div>
    
  )
}

export default Destination

//here in this we can make first-des by making copy paste of another set 
//instead we use class component to make dynamic of that using props
/*
<div className='first-des'>
<div className='des-text'>
    <h2>Taal Valcano, Batangas</h2>
    <p>Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.</p>
</div>
<div className='image'>
    <img src={Image1} alt='img' />
    <img src={Image2} alt='img' />
</div>
</div>*/

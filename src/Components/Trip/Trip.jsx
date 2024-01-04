import './Trip.css'
import React from 'react'
import Tripdata from './Tripdata'
import Image from '../Assets/img6.jpg'

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps. </p>
        <div className="tripcard">
           <Tripdata
            img={Image}
            heading='Trip in Indonesia'
            text='Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.'
           />
           <Tripdata
            img={Image}
            heading='Trip in Indonesia'
            text='Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.'
           />
           <Tripdata
            img={Image}
            heading='Trip in Indonesia'
            text='Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.'
           />

        </div>
    </div>
  )
}

export default Trip
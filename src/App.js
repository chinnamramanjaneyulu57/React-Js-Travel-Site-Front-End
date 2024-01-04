import React from 'react'
import Home from '../src/Components/Routes/Home'
import About from './Components/Routes/About';
import Service from './Components/Routes/Service';
import Contact from './Components/Routes/Contact';
import Signup from './Components/Routes/Signup';
import "./style.css";
import { BrowserRouter, Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App
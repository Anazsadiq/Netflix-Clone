import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import {action} from './components/url'
import {originals} from './components/url'
import {} from './'
function App() {
  return (
    <div className='App'>
         <Navbar/>
         <Banner/>
         <Rowpost url={originals}title='Netflix Originals'  />
         <Rowpost url={action} title ='Action' isSmall />
    </div>
  )
}

export default App

 

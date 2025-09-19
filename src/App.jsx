import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import AvailabilityTable from './components/AvailabilityTable'
import Neighbourhood from './components/Neighbourhood'
import BuildingAmenities from './components/BuildingAmenities'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Header />
    <div className=''>
      <Home />
      <About />
      <AvailabilityTable/>
      <Services/>
      <Neighbourhood/>
      <BuildingAmenities/>
      <NewsFeed/>
    </div>
    <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'


const App = () => {
  return (
    <>
    <Header />
    <div className=''>
      <Home />
      <About />
    </div>
    </>
  )
}

export default App

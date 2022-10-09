import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/pages/Home'
import About from './Component/pages/About'
import Contact from './Component/pages/Contact'
import Policy from './Component/pages/Policy'
import Services from './Component/pages/Services'
import Error from './Component/pages/Error'
import Header from './Component/Header'
import Footer from './Component/Footer'



const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element= { <Home/> }/>
        <Route path='/about' element= { <About/> }/>
        <Route path='/contact' element= { <Contact/> }/>
        <Route path='/policy' element= { <Policy/> }/>
        <Route path='/services' element= { <Services/> }/>
        <Route path='/*' element= {<Error />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

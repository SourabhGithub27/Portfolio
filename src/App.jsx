// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from "./components/Footer"
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <Toaster />
      
    </>
  )
}

export default  App
import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Header from './components/Header'
import { About } from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
import Nasa from './components/Nasa'
import Bored from './components/Bored'
import UserDisplay from './components/UserDisplay';


function App() {

  return (
    <div className="app bg-info">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nasa" element={<Nasa />} />
        <Route path="/Bored" element={<Bored />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>)
}

export default App
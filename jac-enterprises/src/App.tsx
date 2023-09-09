import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Blog } from './components/Blog'
import Header from './components/Header'
import { About } from './components/About'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <About />
    </>
  )
}

export default App

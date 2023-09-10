import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Header from './components/Header'
import { About } from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App

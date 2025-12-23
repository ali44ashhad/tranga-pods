import React from 'react'
import Home from './pages/Home'
import Index from './pages/index'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { Routes,Route } from 'react-router-dom'
// import ContactSuccess from './pages/ContactSuccess'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
        <ScrollToTop />
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
              <Route path='/support' element={<Index></Index>} ></Route>
          {/* <Route path='/contact' element={<ContactSuccess></ContactSuccess>} ></Route> */}
        </Routes>
        {/* <Footer></Footer> */}
        
    </div>
  )
}

export default App
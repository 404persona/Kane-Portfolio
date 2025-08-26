import React from 'react'
import Banner from './components/sections/banner'
import About from './components/sections/about'
import Services from './components/sections/services'
import Experience from './components/sections/experience'
import Header from './components/sections/header'
import Testimonial from './components/sections/testimonial'
import Pricing from './components/sections/pricing'
import Blogs from './components/sections/blogs'
import Contact from './components/sections/contact/contact'
import Portfolio from './components/sections/portfolio'
import Footer from './components/sections/footer'
import ProgressBar from './components/ui/progressBar'
import BrowserMockup from './components/BrowserMockup'
import { Route, Routes } from 'react-router-dom'
import BlogDetails from './components/sections/blogDetail';
// import "./assets/css/style.css"



export const HomePage = () => {
  return (
    <main className="main">
      <Banner />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Pricing />
      <Blogs />
      <Contact />

    </main>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<div style={
          { paddingTop: '100px' }
        }  ><Blogs /></div>} />
        <Route path='/blogs/:slug' element={
          <div
            style={{ paddingTop: '100px' }}
          >
            <BlogDetails />
          </div>
        } />

      </Routes>
      <Footer />
      <ProgressBar />
    </div >
  )
}

export default App
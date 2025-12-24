import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import PackagesSection from '../components/PackagesSection'
import GallerySection from '../components/GallerySection'
import ReviewsSection from '../components/ReviewsSection'
import ContactSection from '../components/ContactSection'
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <PackagesSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
    
    </div>
  )
}

export default Home
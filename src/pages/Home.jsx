import React from 'react'
import UpcomingEvent from '../components/Event'
import Hero from '../components/Hero'
import Service from '../components/Service'
import OurStory from '../components/Story'
const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <OurStory />
      <UpcomingEvent />
    </div>
  )
}

export default Home
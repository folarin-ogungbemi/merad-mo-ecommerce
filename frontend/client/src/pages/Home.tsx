import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../home/Carousel'
import Benefits from '../home/Benefits'

const Home:React.FC = () => {
  return (
    <Layout title='Merad & Mo | Home' content='About Merad & Mo'>
        <Carousel/>
        <Benefits/>
    </Layout>
  )
}

export default Home;
import React from 'react'
import { Layout, Hero, ProductCard, Testimonial, Track } from '../../components'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <Layout>
      <Hero />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home

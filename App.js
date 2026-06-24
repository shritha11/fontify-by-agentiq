import React from 'react';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import FeaturedProducts from './FeaturedProducts.js';
import Categories from './Categories.js';
import Testimonials from './Testimonials.js';
import CTA from './CTA.js';
import Footer from './Footer.js';

export default function App() {
  return (
    <div style={{ background: "#f1e8dc", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif", color: "#fff" }}>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
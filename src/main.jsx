import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/HomePage.jsx';
import Signup from './landing_page/signup/Signup.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
  
    <Routes>
      <Route  path="/" element={<HomePage />} /> 
      <Route  path="/signup" element={<Signup />} />  
      <Route  path="/about" element={<AboutPage />} />  
      <Route  path="/products" element={<ProductPage />} /> 
      <Route  path="/pricing" element={<PricingPage />} />  
      <Route  path="/support" element={<SupportPage />} />  
    </Routes>
    <Footer />
  </BrowserRouter>
)

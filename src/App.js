import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

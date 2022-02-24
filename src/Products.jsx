import React, { useState } from 'react';
import './style.css';
import Pdata from './Pdata.jsx';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      {Pdata.map((item, index) => {
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <h1>{item.price}</h1>
            <Link to={`/products/${item.id}`}>
              <button> LINK </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react'
import { useState } from 'react';

const Add = () => {
  const[book,setBook] = useState({
    title: '',
    description: '',
    cover: '',
    price: null
  });
  
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Cover URL" />
      <input type="number" placeholder="Price" />
    </div>
  )
}

export default Add

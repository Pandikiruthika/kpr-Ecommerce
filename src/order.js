import {Link, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import OrderTracking from "./orderTracking.js";
import {Button} from "react-bootstrap";
const OrderForm = () => {
  const [orderId, setOrderId] = useState('');
  const [name, setName] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the order object
    const newOrder = {
      orderId,
      name,
      
      // Add other relevant order details here
    };

    try {
      // Send the order data to the backend
      const response = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        // Order placed successfully
        alert('Order placed successfully!');
        // Optionally, you can reset the form fields here
        setOrderId('');
        setName('');
      
      } else {
        // Error occurred while placing the order
        alert('Failed to place the order. Please try again later.');
      }
    } catch (err) {
      console.error('Error placing the order:', err);
    }
  };

  return (
    <div className="div1">
      <div className="div2">
    <center>

    <form onSubmit={handleSubmit} className="Registerform" >
      <h1 id="h1">orders</h1>
      <label className='order1'>Order id:</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        value={orderId}
        name="orderId"
        onChange={(e) => setOrderId(e.target.value)}
        required
      /><br /><br />
      <label className='order1'>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        required
      /><br /><br />
       <Link to="/ordertracking">
       <Button type="submit"  className="create" disabled={!orderId && !name} ><b>order</b></Button>
      </Link>
      </form>
     
      <Routes>
        <Route path="/ordertracking" element={<OrderTracking />} />
      </Routes>

    
    </center>
    </div>
    </div>
  );
};

export default OrderForm;









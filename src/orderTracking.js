import {Button} from "react-bootstrap";
import React, { useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Tracking from "./trackedorder"

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderInfo, setOrderInfo] = useState(null);

  const handleTrackOrder = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api//orders/:${orderId}`);
      const data = await response.json();

      if (response.ok) {
        setOrderInfo(data); // Update state with the order information
      } else {
       
      }
    } catch (err) {
      console.error('Error fetching order information:', err);
    }
  };

  return (
    <div className="div1">
      <div className="div2">
        <center>
      <form onSubmit={handleTrackOrder} className="Registerform">
      <h1 id="h1">Tracking order</h1><br /><br />
        <label className='order1'>Enter orderId:</label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        /><br /><br /><br />
        <Link to="/trackedorder">
        <Button  className="create"  type="submit">Tracking order</Button>
      </Link>
      </form>
     
      <Routes>
        <Route path="/trackedorder" element={< Tracking />} />
      </Routes>
       
    
      </center>
      {orderInfo && (
        <div>
          <h2>Order Information</h2>
          <p>Order Number: {orderInfo.orderId}</p>
          <p>Status: {orderInfo.status}</p>
       
        </div>
      )}
      </div>
    </div>
  );
};

export default OrderTracking;









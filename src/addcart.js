// frontend/src/components/AddToCart.js
import React, { useState } from 'react';

const AddToCart = () => {
  const [userId, setUserId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddToCart = async (e) => {
    e.preventDefault();

    const cartData = {
      userId,
      productId,
      quantity: parseInt(quantity),
    };

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      });

      if (response.ok) {
        alert('Item added to the cart!');
        setUserId('');
        setProductId('');
        setQuantity('');
      } else {
        alert('Failed to add item to the cart. Please try again later.');
      }
    } catch (err) {
      console.error('Error adding item to the cart:', err);
    }
  };

  return (
    <form onSubmit={handleAddToCart}>
      <label>User ID:</label>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <label>Product ID:</label>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        required
      />
      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default AddToCart;

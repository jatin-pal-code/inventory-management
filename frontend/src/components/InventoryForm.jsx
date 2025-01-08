import  { useState } from 'react';
import PropTypes from 'prop-types';
const InventoryForm = ({ setInventory }) => {
  const [formData, setFormData] = useState({ name: '', quantity: '', price: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const newItem = await res.json();
    setInventory((prev) => [...prev, newItem]);
    setFormData({ name: '', quantity: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};
InventoryForm.propTypes = {
    setInventory: PropTypes.func.isRequired,
  };
export default InventoryForm;
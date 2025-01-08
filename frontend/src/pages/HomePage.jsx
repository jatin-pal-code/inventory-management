import  { useState, useEffect } from 'react';
import InventoryForm from '../components/InventoryForm';
import InventoryList from '../components/InventoryList';

const HomePage = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/inventory')
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div>
      <h1>Inventory App</h1>
      <InventoryForm setInventory={setInventory} />
      <InventoryList inventory={inventory} setInventory={setInventory} />
    </div>
  );
};

export default HomePage;
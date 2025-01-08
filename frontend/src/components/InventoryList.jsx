
import PropTypes from 'prop-types';
const InventoryList = ({ inventory, setInventory }) => {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/inventory/${id}`, { method: 'DELETE' });
    setInventory((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <ul>
      {inventory.map((item) => (
        <li key={item._id}>
          {item.name} - {item.quantity} units - ${item.price}
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
InventoryList.propTypes = {
    inventory: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
    setInventory: PropTypes.func.isRequired,
  };
export default InventoryList;

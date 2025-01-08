const InventoryItem = require('../models/inventoryItem');

// Get all inventory items
exports.getInventory = async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new inventory item
exports.addInventoryItem = async (req, res) => {
  const { name, quantity, price } = req.body;
  try {
    const newItem = new InventoryItem({ name, quantity, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an inventory item
exports.updateInventoryItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  try {
    const updatedItem = await InventoryItem.findByIdAndUpdate(
      id,
      { name, quantity, price },
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an inventory item
exports.deleteInventoryItem = async (req, res) => {
  const { id } = req.params;
  try {
    await InventoryItem.findByIdAndDelete(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

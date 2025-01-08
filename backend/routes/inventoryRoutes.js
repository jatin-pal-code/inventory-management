const express = require('express');
const {
  getInventory,
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} = require('../controllers/inventoryController');

const router = express.Router();

router.get('/', getInventory);
router.post('/', addInventoryItem);
router.put('/:id', updateInventoryItem);
router.delete('/:id', deleteInventoryItem);

module.exports = router;
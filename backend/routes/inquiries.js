const express = require('express');
const router = express.Router();

// Mock data storage (replace with database)
let inquiries = [];

// GET: Fetch all inquiries
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// POST: Create new inquiry
router.post('/', (req, res) => {
  try {
    const { name, email, serviceType, budget, date } = req.body;

    if (!name || !email || !serviceType) {
      return res.status(400).json({ error: 'Name, email, and service type are required' });
    }

    const newInquiry = {
      id: inquiries.length + 1,
      name,
      email,
      serviceType,
      budget: budget || 'Not specified',
      date: date || new Date(),
      createdAt: new Date(),
    };

    inquiries.push(newInquiry);

    res.status(201).json({
      success: true,
      message: 'Inquiry created successfully',
      data: newInquiry,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create inquiry' });
  }
});

// GET: Fetch single inquiry
router.get('/:id', (req, res) => {
  try {
    const inquiry = inquiries.find((i) => i.id === parseInt(req.params.id));
    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    res.json({ success: true, data: inquiry });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inquiry' });
  }
});

// DELETE: Remove inquiry
router.delete('/:id', (req, res) => {
  try {
    const index = inquiries.findIndex((i) => i.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    const deleted = inquiries.splice(index, 1);
    res.json({ success: true, message: 'Inquiry deleted', data: deleted[0] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete inquiry' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Mock portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    description: 'Contemporary living space with minimalist design',
    image: 'modern-living-room.jpg',
    category: 'Living Room',
    budget: '$5,000 - $10,000',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'Luxury Kitchen Redesign',
    description: 'High-end kitchen with custom cabinetry',
    image: 'luxury-kitchen.jpg',
    category: 'Kitchen',
    budget: '$15,000 - $25,000',
    createdAt: '2024-02-20',
  },
];

// GET: Fetch all portfolio items
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      count: portfolioItems.length,
      data: portfolioItems,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio' });
  }
});

// GET: Fetch single portfolio item
router.get('/:id', (req, res) => {
  try {
    const item = portfolioItems.find((p) => p.id === parseInt(req.params.id));
    if (!item) {
      return res.status(404).json({ error: 'Portfolio item not found' });
    }
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio item' });
  }
});

// POST: Add new portfolio item (admin only)
router.post('/', (req, res) => {
  try {
    const { title, description, image, category, budget } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ error: 'Title, description, and category are required' });
    }

    const newItem = {
      id: portfolioItems.length + 1,
      title,
      description,
      image: image || 'placeholder.jpg',
      category,
      budget: budget || 'Contact for quote',
      createdAt: new Date().toISOString().split('T')[0],
    };

    portfolioItems.push(newItem);

    res.status(201).json({
      success: true,
      message: 'Portfolio item added successfully',
      data: newItem,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add portfolio item' });
  }
});

module.exports = router;

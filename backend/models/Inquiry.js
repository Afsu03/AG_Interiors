// Placeholder for MongoDB Inquiry Model
// Uncomment and use with Mongoose when MongoDB is connected

/*
const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: String,
  serviceType: {
    type: String,
    enum: ['consultation', 'design', 'renovation', 'other'],
    required: true,
  },
  budget: String,
  message: String,
  status: {
    type: String,
    enum: ['new', 'contacted', 'scheduled', 'completed'],
    default: 'new',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Inquiry', inquirySchema);
*/

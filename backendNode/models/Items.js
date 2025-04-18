const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  location_found: { type: String, required: true },
  finder_name: { type: String, required: true },
  finder_contact: { type: String, required: true },
  status: { type: String, default: 'found' },
  image_url: { type: String, required: true },
  found_date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', ItemSchema);
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  thumbnail_url: { type: String },
  description: { type: String },
  link: { type: String },
  year: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);

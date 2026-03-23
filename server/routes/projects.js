const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects — fetch all projects (optionally filter by category)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== 'All' ? { category } : {};
    const projects = await Project.find(filter).sort({ year: -1 });

    // If DB is empty, return sample data
    if (projects.length === 0) {
      return res.json(getSampleProjects());
    }
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

function getSampleProjects() {
  return [
    {
      _id: '1', title: 'Nebula Dashboard', category: 'Web App',
      tags: ['React', 'Node.js', 'MongoDB'],
      thumbnail_url: '', description: 'A real-time analytics dashboard with cosmic UI.',
      link: '#', year: 2024
    },
    {
      _id: '2', title: 'Starfield UI Kit', category: 'Design',
      tags: ['Figma', 'CSS', 'Animation'],
      thumbnail_url: '', description: 'Component library inspired by deep space visuals.',
      link: '#', year: 2024
    },
    {
      _id: '3', title: 'Pulsar API', category: 'Backend',
      tags: ['Express', 'PostgreSQL', 'JWT'],
      thumbnail_url: '', description: 'High-performance REST API with rate limiting and auth.',
      link: '#', year: 2023
    },
    {
      _id: '4', title: 'Void Mobile', category: 'Mobile',
      tags: ['React Native', 'Expo', 'Firebase'],
      thumbnail_url: '', description: 'Cross-platform app with immersive dark-mode experience.',
      link: '#', year: 2023
    },
    {
      _id: '5', title: 'Aurora ML Model', category: 'AI/ML',
      tags: ['Python', 'TensorFlow', 'Flask'],
      thumbnail_url: '', description: 'Image classification model with 94% accuracy.',
      link: '#', year: 2023
    },
    {
      _id: '6', title: 'Comet CMS', category: 'Web App',
      tags: ['Next.js', 'Sanity', 'Tailwind'],
      thumbnail_url: '', description: 'Headless CMS platform for editorial teams.',
      link: '#', year: 2022
    },
  ];
}

module.exports = router;

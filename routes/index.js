const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});

router.get('/', (req, res) => {
  res.render('upload', {
    title: 'Upload',
  });
});

module.exports = router;

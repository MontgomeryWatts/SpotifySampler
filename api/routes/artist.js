const express = require('express');
const router = express.Router();
const Artist = require('./artistModel');

router.get('/random', async (_req, res) => {
  try {
    const artist = await Artist.aggregate([{ $sample: { size: 1 } }]);
    res.json(artist);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    res.json(artist);
  } catch (err) {
    console.error(err);
    res.status(404).send();
  }
});

module.exports = router;

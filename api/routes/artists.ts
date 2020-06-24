import express from 'express';

import Artist from './artistModel';
const router = express.Router();

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
    if (artist === null) {
      res.status(404).send();
    } else {
      res.json(artist);
    }
  } catch (err) {
    console.error(err);
    res.status(404).send();
  }
});

export default router;

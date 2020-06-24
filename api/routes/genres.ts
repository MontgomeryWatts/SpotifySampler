import express from 'express';

import Artist from './artistModel';
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const genres: string[] = await Artist.distinct('genres');
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get('/:genre', async (req, res) => {
  try {
    const artists = await Artist.find({ genres: req.params.genre });
    res.json(artists);
  } catch (err) {
    console.error(err);
    res.status(404).send();
  }
});

export default router;

import express from 'express';

import Artist from './artistModel';
const router = express.Router();

router.get('/random', (_req, res) => {
  Artist.aggregate(
    [{ $sample: { size: 1 } }, { $limit: 1 }, { $project: { _id: 1 } }],
    (err: Error, artist: Array<any>) => {
      if (err) {
        res.status(500).send();
      } else if (artist.length === 0) {
        res.status(404).send();
      } else {
        res.json(artist[0]._id);
      }
    }
  );
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

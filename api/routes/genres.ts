import express from 'express';

import Artist from './artistModel';
import Genre from './genreModel';
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const genres: object[] = await Genre.find();
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get('/:genre', (req, res) => {
  const pageQuery: number = Number(req.query.page);
  const page: number = isNaN(pageQuery) ? 1 : pageQuery;
  const pageSize: number = 20;
  Artist.aggregate(
    [
      { $match: { genres: req.params.genre } },
      { $skip: (page - 1) * pageSize },
      { $limit: pageSize },
      { $project: { name: 1, uri: 1, images: 1 } }
    ],
    (err: Error, artists: any) => {
      if (err) {
        res.status(404).send();
      } else {
        res.json(artists);
      }
    }
  );
});

export default router;

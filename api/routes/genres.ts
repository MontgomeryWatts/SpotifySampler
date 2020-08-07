import express from 'express';

import Artist from './artistModel';
import Genre from './genreModel';
const router = express.Router();

router.get('/', async (req, res) => {
  const pageQuery: number = Number(req.query.page);
  const page: number = isNaN(pageQuery) ? 1 : pageQuery;
  const pageSize: number = 40;
  try {
    const genres: object[] = await Genre.find()
      .sort({ _id: 1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    const numGenres: number = await Genre.countDocuments({});
    const payload = {
      genres,
      numPages: Math.ceil(numGenres / pageSize)
    };
    res.json(payload);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get('/:genre', async (req, res) => {
  const pageQuery: number = Number(req.query.page);
  const page: number = isNaN(pageQuery) ? 1 : pageQuery;
  const pageSize: number = 20;
  try {
    const artists = await Artist.aggregate([
      { $match: { genres: req.params.genre } },
      { $skip: (page - 1) * pageSize },
      { $limit: pageSize },
      { $project: { name: 1, uri: 1, images: 1 } }
    ]);
    const genreDoc: any = await Genre.findById(req.params.genre);
    const payload = {
      artists,
      numPages: Math.ceil(genreDoc.numArtists / pageSize)
    };
    res.json(payload);
  } catch (e) {
    res.status(404).send();
  }
});

export default router;

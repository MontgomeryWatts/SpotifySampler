import express from 'express';

import Artist from './artistModel';
import Genre from './genreModel';
const router = express.Router();

router.get('/', async (req, res) => {
  const pageQuery: number = Number(req.query.page);
  const page: number = isNaN(pageQuery) ? 1 : pageQuery;
  const pageSize: number = 40;
  try {
    const genrePage: any[] = await Genre.aggregate([
      { $sort: { _id: 1 } },
      {
        $facet: {
          total: [{ $count: 'total' }],
          genres: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }]
        }
      }
    ]);
    const payload = {
      genres: genrePage[0].genres,
      numPages: Math.ceil(genrePage[0].total[0].total / pageSize)
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
    const artistsPage = await Artist.aggregate([
      { $match: { genres: req.params.genre } },
      {
        $facet: {
          total: [{ $count: 'total' }],
          artists: [
            { $skip: (page - 1) * pageSize },
            { $limit: pageSize },
            { $project: { name: 1, uri: 1, images: 1 } }
          ]
        }
      }
    ]);
    const payload = {
      artists: artistsPage[0].artists,
      numPages: Math.ceil(artistsPage[0].total[0].total / pageSize)
    };
    res.json(payload);
  } catch (e) {
    res.status(404).send();
  }
});

export default router;

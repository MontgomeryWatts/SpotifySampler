import express from 'express';

import Artist from './artistModel';
const router = express.Router();

router.get('/', async (req, res) => {
  const pageQuery: number = Number(req.query.page);
  const page: number = isNaN(pageQuery) ? 1 : pageQuery;
  const pageSize: number = 20;
  try {
    const aggregationPipeline: any[] = [
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
    ];
    if (req.query.name) {
      aggregationPipeline.unshift({
        $match: { $text: { $search: req.query.name } }
      });
    }
    const artistsPage = await Artist.aggregate(aggregationPipeline);
    const payload = {
      artists: artistsPage[0].artists,
      numPages: Math.ceil(artistsPage[0].total[0].total / pageSize)
    };
    res.json(payload);
  } catch (e) {
    res.status(404).send();
  }
});

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

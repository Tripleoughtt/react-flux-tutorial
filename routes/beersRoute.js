import express from 'express';
import request from 'request';

const router = express.Router();

router.get('/random', (req, res) => {
  request('http://api.brewerydb.com/v2/beer/random/?key=59cc8d3ab90d892bd0a66aab8804762a',
  (err, resp, body) => {
    res.status(200).send(JSON.parse(body));
  });
});

export default router;

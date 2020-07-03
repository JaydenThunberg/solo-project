const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('in GET movies')
  const queryText = `SELECT "event_name", "description", "link", "start_date", "end_date" from events 
    WHERE "approved" = TRUE
    ORDER BY "start_date" ASC;`;
  pool.query(queryText)
    .then((result) => {
      console.log('GET events', result.rows)
      res.send(result.rows);
    }).catch((error) => {
      console.log(error)
      alert('error with getting events');
      res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('req.body in POST:', req.body)
  let queryText = `INSERT INTO "events" ( "event_name", "location", "start_date", "end_date", "link" )
  VALUES ($1, $2, $3, $4, $5);`
  pool.query(queryText, [req.body.name, req.body.location, req.body.startDate, req.body.endDate, req.body.mediaLink])
    .then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(error)
      res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
  console.log('in /api/events DELETE ', req.params);

  let queryText = `DELETE FROM "events" WHERE id=$1`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
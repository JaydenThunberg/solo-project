const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('in GET events')
    const queryText = `SELECT * FROM events ORDER BY "start_date" ASC;`;
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

  router.post('/', (req, res) => {
    console.log('req.body in POST:', req.body)
    let queryText = `INSERT INTO "events" ( "event_name", "description", "location", "start_date", "end_date", "link", "approved" )
    VALUES ($1, $2, $3, $4, $5, $6);`
    pool.query(queryText, [req.body.name, req.body.description, req.body.location, req.body.startDate, req.body.endDate, req.body.mediaLink, req.body.approved])
      .then((result) => {
        res.sendStatus(201);
      }).catch((error) => {
        console.log(error)
        res.sendStatus(500);
      })
  });

  module.exports = router;
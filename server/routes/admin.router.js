const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in GET events')
    const queryText = `SELECT * FROM events ORDER BY "start_date" ASC;`;
    pool.query(queryText)
      .then((result) => {
        // console.log('GET events', result.rows)
        res.send(result.rows);
      }).catch((error) => {
        console.log(error)
        alert('error with getting events');
        res.sendStatus(500);
      })
  });

  router.post('/', rejectUnauthenticated, (req, res) => {
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

  router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in PUT req.body is:', req.body)
    let queryText = `UPDATE "events" 
    SET event_name = $1,
    description = $2,
    location = $3,
    link = $4,
    start_date = $5,
    end_date = $6
    WHERE id = $7
    ;`;
    pool.query(queryText, [req.body.name, req.body.description, req.body.location, req.body.mediaLink, req.body.startDate, req.body.endDate, req.body.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error updating: ', error)
            alert('Error updating the event. Please contact an admin.')
            res.sendStatus(500);
        })
  })
  module.exports = router;
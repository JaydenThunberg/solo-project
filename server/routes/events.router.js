const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

//if favorite event /req.user.id
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('in GET events')
  const queryText = `SELECT "id", "event_name", "description", "location", "link", "start_date", "end_date" from events 
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
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('req.body in POST:', req.body)
  let queryText = `INSERT INTO "events" ( "event_name", "description", "location", "start_date", "end_date", "link" )
  VALUES ($1, $2, $3, $4, $5, $6);`
  pool.query(queryText, [req.body.name, req.body.description, req.body.location, req.body.startDate, req.body.endDate, req.body.mediaLink])
    .then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(error)
      res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated,(req, res) => {
  console.log('in /api/events DELETE ', req.params);
  /* ADD reject if auth_level is less than 2  
  EX: */
  // if (req.isAuthenticated() === true) {
    // let queryText = `DELETE FROM "events" WHERE id=$1 AND "auth_level" < $2`;
    // pool.query(queryText, [req.params.id, req.user.auth_level])
    let queryText = `DELETE FROM "events" WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
      .then((result) => {
        res.sendStatus(200);
      }).catch((error) => {
        console.log(error);
        alert('Sorry, you do not have authorization to delete an event. Please contact an admin.')
        res.sendStatus(500);
      });
  // } else {
  //   res.sendStatus(401)
  // }
});

module.exports = router;
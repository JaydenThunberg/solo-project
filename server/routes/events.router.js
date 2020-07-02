const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in GET movies')
    const queryText= `SELECT "event_name", "description", "link", "start_date", "end_date" from events 
    WHERE "approved" = TRUE
    ORDER BY "start_date" ASC;`;
    pool.query(queryText)
    .then((result) => {
      console.log('GET events', result.rows)
      res.send(result.rows);
    }) .catch( (error ) =>{
      console.log(error)
      alert('error with getting events');
      res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
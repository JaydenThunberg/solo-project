const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in GET movies')
    const queryText= `SELECT "id", "event_name", "description", "link" from events ORDER BY id ASC;`;
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
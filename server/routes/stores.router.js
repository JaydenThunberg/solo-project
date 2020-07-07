const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('in GET stores')
  const queryText = `SELECT * FROM stores ORDER BY "id" ASC;`;
  pool.query(queryText)
    .then((result) => {
      console.log('GET stores', result.rows)
      res.send(result.rows);
    }).catch((error) => {
      console.log(error)
      alert('error with getting stores');
      res.sendStatus(500);
    })
});

module.exports = router;
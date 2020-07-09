const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/:id', rejectUnauthenticated, (req, res) => {
    //req.params.id (this should be the event id) 
    //req.user.id to get the user id since already logged in

});

module.exports = router;
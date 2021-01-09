const express = require('express');
const router = express.Router();
// importing pool from pool.js
const pool = require('../modules/pool');


// GET
// get tasks from DB
router.get('/', (req, res) => {
    let query = 'SELECT * FROM "tasks" ORDER BY "date" ASC;';
    pool.query(query).then(result => {
        res.send(result.rows);

    }).catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
    });
}); //end GET

// POST


// PUT


// DELETE



// export router
module.exports = router;
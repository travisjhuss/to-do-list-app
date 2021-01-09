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
router.post('/', (req, res) => {
    let newTask = req.body;
    let query = `
                INSERT INTO "tasks" ("task", "priority", "label", "date", "time")
                VALUES ($1, $2, $3, $4, $5);
                `;
    pool.query(query, [newTask.task, newTask.priority, newTask.label, newTask.date, newTask.time])
        .then(result => {
            res.sendStatus(201);

        }).catch(error => {
            console.log('Error adding new task', error);
            res.sendStatus(500);
        }); // end pool query

}); // end POST

// PUT


// DELETE



// export router
module.exports = router;
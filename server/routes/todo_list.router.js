const express = require('express');
const router = express.Router();
// importing pool from pool.js
const pool = require('../modules/pool');


// GET
// get tasks from DB
router.get('/', (req, res) => {
    const query = 'SELECT * FROM "tasks" ORDER BY "date" ASC;';
    pool.query(query).then(result => {
        res.send(result.rows);

    }).catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
    });
}); //end GET

// POST
router.post('/', (req, res) => {
    const newTask = req.body;
    const query = `
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
router.put('/:id', (req, res) => {
    const task = req.body;
    const id = req.params.id;
    console.log(task);
    
    console.log(`Updating task ${id} with `, task.completed);
  
    // TODO - REPLACE BELOW WITH YOUR CODE
    let queryText;
  
    if (task.complete === true) {
      queryText = `
              UPDATE "tasks"
              SET "completed" = true
              WHERE "id" = $1;`
  
    } else {
      res.sendStatus(400)
      // do nothing else
      return;
    }
  
    pool.query(queryText, [id])
      .then((result) => {
        res.sendStatus(200);
  
      }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
      })
  
  });

// DELETE
router.delete('/:id', (req, res) => {
    let id = req.params.id; // id of the thing to delete
    console.log('Delete route with id of', id);
  
    // TODO - REPLACE BELOW WITH YOUR CODE
    const query = `DELETE FROM "tasks" WHERE "id" = $1;`;
  
    pool.query(query, [id])
      .then((result) => {
        res.sendStatus(204);
      }).catch((error) => {
        console.log('error');
        res.sendStatus(500);
      })
  
  });


// export router
module.exports = router;
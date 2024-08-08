const express = require('express')
const {createToDo, getAllToDo, getToDobyID, getToDobyIDandDel, getToDobyIDandUpdate} = require('../controllers/todoControllers')

const router = express.Router()

router.post('/createToDo', createToDo);
router.get('/getAllToDo', getAllToDo);
router.get('/getToDobyID/:id', getToDobyID);
router.delete('/getToDobyIDandDel/:id', getToDobyIDandDel);
router.patch('/getToDobyIDandUpdate/:id', getToDobyIDandUpdate);


module.exports = router;
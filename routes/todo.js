const express = require('express');
const router = express.Router();
const {
    createTodo,
    updateTodo,
    deleteTodo,
    listTodos
} = require('../controllers/todoController');

router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.get('/', listTodos);

module.exports = router;

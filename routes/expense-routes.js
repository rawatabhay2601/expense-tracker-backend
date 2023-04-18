const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense-app');

router.post('/expense/addExpense', expenseController.postExpense);
router.get('/expense/getAllRecords', expenseController.getAllRecords);
router.post('/expense/deleteExpense/:primaryKey', expenseController.deleteExpense);

module.exports = router;
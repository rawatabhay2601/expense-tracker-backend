const Expense = require("../models/expense-db");

exports.postExpense = async (req,res,next) => {
    
    try{
        const price = req.body.money;
        const description = req.body.desc;
        const category = req.body.category;

        const response = await Expense.create({price : price, description : description, category : category});

        res.status(201).json({ExpenseDetails : response});
    }
    catch(err){
        console.log(`Error while writing data to database : ${err}`);
        res.status(500);
    }
};

exports.getAllRecords = async (req,res,next) => {

    try{
        const response = await Expense.findAll();
        res.status(201).json({allRecords : response});
    }
    catch(err){
        console.log('Error while finding all details : ', err)
        res.status(500);
    }
}

exports.deleteExpense = async (req,res,next) => {
    
    try{
        const response = await Expense.destroy({where : {id : req.params.primaryKey}});
        console.log('Item Deleted from database');
        res.status(201).json({responseData : response});
    }
    catch(err){
        
        console.log('Error while deleting from database : ',err);
        res.status(500);
    }
};
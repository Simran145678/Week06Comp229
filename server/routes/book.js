let express = require('express');
let router= express.Router();
let mongoose= require('mongoose');

let passport = require('passport');



let bookController=require('../controllers/book');
//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/*get route for book list page*/
router.get('/',bookController.displayBookList);

/*get route for displaying add page- CREATE operation*/
router.get('/add',requireAuth,bookController.displayAddPage);

/*POST Route for processing the Add page-CREATE Opeartion*/
router.post('/add',requireAuth,bookController.processAddPage);

/*GET route for displaying the edit page-UPDATE operation*/
router.get('/edit/:id',requireAuth,bookController.displayEditPage);

/*POST route for processing the edit page-UPDATE operation*/
router.post('/edit/:id',requireAuth,bookController.processEditPage);

/*GET to perform Deletion-DELETE operation*/
router.get('/delete/:id',requireAuth,bookController.performDelete);


module.exports=router;
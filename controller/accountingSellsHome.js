const express 	    = require('express');
const pdfDocument	= require('pdfkit');
const fs			= require('fs');
const fastCsv       = require('fast-csv');
const userModel     = require.main.require('./models/userModel');
const customerModel = require.main.require('./models/customerModel');
const productModel  = require.main.require('./models/productModel');
const bankModel     = require.main.require('./models/bankModel');
const salaryModel   = require.main.require('./models/salaryModel');
const router 	    = express.Router();
router.get('/', (req, res)=>{
	
	if(req.cookies['uname'] != null){
		var uname = req.cookies['uname'];
		res.render('accountingSellsHome/index',{uname});
	}else{
		res.redirect('/login');
	}
	/* console.log(req.cookies['uname']);
	var uname = req.cookies['uname'];
	console.log(uname);
	res.render('accountingSellsHome/index',{uname}); */
})

router.get('/product', (req, res)=>{
	productModel.getAll(function(results){
		console,console.log(results);
		var uname = req.cookies['uname'];
		res.render('accountingSellsHome/product', {productList: results, uname});
	});
})
router.get('/customer', (req, res)=>{

	customerModel.getAll(function(results){
		console,console.log(results);
		var uname = req.cookies['uname'];
		res.render('accountingSellsHome/customer', {customerList: results, uname});
	});

})

router.get('/report', (req, res)=>{
	var uname = req.cookies['uname'];
	res.render('accountingSellsHome/report', {uname}); 
})
router.get('/revenue', (req, res)=>{
	var uname = req.cookies['uname'];
	res.render('accountingSellsHome/revenue',{uname}); 
})
router.get('/salary', (req, res)=>{
	salaryModel.getAll(function(results){
		console,console.log(results);
		var uname = req.cookies['uname'];
		res.render('accountingSellsHome/salary', {salaryList: results, uname});
	});
})
router.get('/bankInfo', (req, res)=>{
	bankModel.getAll(function(results){
		console,console.log(results);
		var uname = req.cookies['uname'];
		res.render('accountingSellsHome/bankInfo', {bankInfo: results, uname});
	}); 
})
router.get('/calendar', (req, res)=>{
	var uname = req.cookies['uname'];
	res.render('accountingSellsHome/calendar', {uname}); 
});

module.exports = router;
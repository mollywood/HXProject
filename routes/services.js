const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../models/index');

// @route GET routes/hub/register
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("register-hub", {
    title: "Register a Hub"
  });
});

// @route POST routes/hub/register
// @desc
// @access Protected
router.post("/register", (req, res) => {});

// display services on /services page
router.get('', function(req,res){
  db.Service.findAll().then(function(services){
    res.render('services', {serviceList: services})
  })
})

module.exports = router;
const express = require('express');
const router = express.Router();
const { User } = require('../Model/Schema'); 
const Joi = require("joi");


router.get('/result/:id', async (req, res) => {
  try {

    const user = await User.findOne({ id: req.params.id }); 
   // console.log(email)
    if (!user) return res.status(404).send('User not found');
    //console.log(email)
    res.send(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});
module.exports = router;
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const { body, validationResult } = require('express-validator');

const jwt_secret = "heheboi";

//Creating user
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').isLength({ min: 5 })

], async (req, res) => {

  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  };

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success,error: "Sorry a user alrady exist with this email" });
    }

    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })


    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, jwt_secret);
    success=true;



    res.json({ success,authToken });

  }
  catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occured");
  }
});


//Authenticating user
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists()

], async (req, res) => {
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };


  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success,error: "Enter correct credentials" })
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({success, error: "Enter correct credentials" })
    }

    const data = {
      user: {
        id: user.id
      }
    }
    success=true;
    const authToken = jwt.sign(data, jwt_secret);
    res.json({ success,authToken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

//Logged in user details
router.post('/getuser', fetchuser, async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password');
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
})

module.exports = router
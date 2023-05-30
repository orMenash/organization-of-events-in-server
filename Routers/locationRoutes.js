
const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const checkAuth = require("../Auth/checkAuth");
const sendMsgToUser = require("../Schems/sendMsgToUser");
const sendEmailToAdmin = require("../Util/SandEmail");

let savedLocation = null;

router.post('/send_location', (req, res) => {
  const { latitude, longitude } = req.body;
  savedLocation = { latitude, longitude };
  console.log('Location saved:', { latitude, longitude });
  console.log(savedLocation);
  res.sendStatus(200);
});

router.get('/get_location', (req, res) => {
    console.log(savedLocation);
  if (savedLocation) {
    res.json(savedLocation);
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
});


module.exports = router;
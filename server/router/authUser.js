const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = dummyUser.find(u => u.email === email && u.password === password)
  
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      
      res.status(400).json({ message: 'Invalid username or password' });
    }
  });

  module.exports = router ;
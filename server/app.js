const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.json());


app.get('/', (req,res)=>{
    res.send('HEllo');
})

// Dummy data for authentication
const dummyUser = [
    {
      email: 'anukalpkumar2000@gmail.com',
      password : 'anukalprauniyar'
    },
    {
        email: 'hexadecimal@gmail.com',
        password : 'hexadecimal'
    }
    ];

app.post('/login', (req, res) => {
    const { email, password } = req.body;


    const user = dummyUser.find(u => u.email === email && u.password === password)
  
    if (user) {
      // Authentication successful
      res.status(200).json({ message: 'Login successful' });
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });

app.listen(5000, ()=>{
    console.log(`Server is running on port number 5000`);
})
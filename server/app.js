const express = require('express');
const app = express();
const cors = require('cors');

const jwt = require('jsonwebtoken');

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

app.post('/login', async (req, res) => {
    const { email, password } = req.body;


    const user = dummyUser.find(u => u.email === email && u.password === password)
  
    if (user) {
      
      const secretKey = 'hexadecimal2023'; // Replace with your own secret key
      const token = jwt.sign({ userId: user.email}, secretKey, { expiresIn: '1h' });
      res.json({token});

    } else {
      // Authentication failed
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });

  
app.listen(5000, ()=>{
    console.log(`Server is running on port number 5000`);
})
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const jsonParser = bodyParser.json();
app.use(bodyParser.json());
const index = '/home/jp/WebDev/login_test/index.html';
app.use(cors());
app.use(express.static('/home/jp/WebDev/login_test'));
let port = 5050;

app.get('/api/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    
    if (username === 'admin' && password === 'password') {
        res.status(200).json({ message: 'Login successful!' });
        console.log('Login success!');
    } else {
        res.status(401).json({ message: 'Invalid username or password.' });
    }
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
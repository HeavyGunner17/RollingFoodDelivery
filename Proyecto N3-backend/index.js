const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./utils/conectionDB');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
dbConnection();

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/products', require('./routes/productRouter'));
//app.use('/category/:categoryId', require('./routes/categoryRouter'));
//app.use('/users/', require('./routes/userRouter'));





app.listen(port, () => console.log(`Example app listening on port ${port}!`));

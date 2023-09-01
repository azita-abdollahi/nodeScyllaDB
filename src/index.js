const express = require('express');
require('dotenv').config();
const bookRoutes = require('./routes/book.router')
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const corsOption = {
    origin: process.env.origin,
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  };
app.use(express.json({ limit: '70mb' }));
app.use(express.urlencoded({ limit: '70mb', extended: true}));
app.use(cors(corsOption));

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

const port = process.env.PORT | 3000;

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Scylla😉');
});
app.use('/api/book', bookRoutes);

app.listen(port, () => {
    console.log(`Server Listen On http://localhost:${port}`);
})
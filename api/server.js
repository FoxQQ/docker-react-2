import {data} from './mock_data.js';
// import express from 'express';
// import cors from 'cors';

import express from 'express';
import cors from 'cors';
// const data = require('./mock_data');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.get('/', (req,res) => {

    res.send(data);
});

app.listen(PORT, () => {
    console.info(`listening on ${PORT}`);
})
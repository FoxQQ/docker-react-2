import express from 'express';
import cors from 'cors';
import {data} from './mock_data.js';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors())

app.get('/', (req,res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.info(`listening on ${PORT}`);
})
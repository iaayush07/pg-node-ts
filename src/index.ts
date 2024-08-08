import express from 'express';
import morgan from 'morgan';
import { pool } from './config/db';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import router from './routes/empRoutes'

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'))

pool.query(`
    CREATE TABLE IF NOT EXISTS anys (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
    );
`)
    .then(() => {
        console.log('Anys table is ready');
        // Start the Express server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => console.error('Connection error', err.stack));

    app.use('/', router);



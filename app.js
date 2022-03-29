require('dotenv').config();
require('express-async-errors');

// import security package
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

const express = require('express');
const app = express();

// db import
const connectDB = require('./db/connect');

const authMiddleware = require('./middleware/authentication');

// routers import
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// security package
app.set('trust proxy', 1); //heroku require
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
);

app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);
app.use(cors());
app.use(xss());

// routes
app.use('/auth', authRouter);
app.use('/jobs', authMiddleware, jobsRouter);

// frontend path
app.use(express.static('./build'));

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3005;

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();

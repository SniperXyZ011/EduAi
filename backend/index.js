import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import connnetDB from './config/database.js';
import cors from 'cors';
import userRoute from './routes/userRoute.js'

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: "http://localhost:5173",
    credentials: true,
}

app.use(cors(corsOption));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/v1/user', userRoute);

app.listen(port, () => {
    connnetDB();
    console.log(`Server is running on port ${port}`);
});

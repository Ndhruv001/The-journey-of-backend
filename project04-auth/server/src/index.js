import express from 'express';
import authRoutes from './routes/authRoute.js';
import config from './config/config.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.get('/auth/signup', (req, res) => {
    res.send("hello how are you");
})

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
import express from 'express';
import authRoutes from './routes/authRoute.js';
import config from './config/config.js';
import cors from 'cors';


const app = express();
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust to your frontend's origin
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));
app.use(express.json());
app.use('/auth', authRoutes);



app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
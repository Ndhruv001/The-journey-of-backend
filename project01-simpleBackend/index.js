import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req , res) => {
    res.send("<h1 style='color: red; text-align: center;'>Congratulation you made your first server!</h1>");
});

app.listen(port , ()=>{
    console.log(`app is listening on ${port} port.`);
})


//dotenv
import dotenv from "dotenv";
//db file
import connectDB from "./db/index.js";
//app
import {app} from './app.js';

dotenv.config();

const port = process.env.PORT || 3000;

//connet to database
connectDB()
.then(() =>
  app.listen(port , () => {
    console.log(`server is running at ${port}`);
  })
)
.catch((error)=>{
  console.log('failed to connect database ' ,error)
});

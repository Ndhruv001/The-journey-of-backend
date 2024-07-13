//MONGOOSE LIBRARY
import mongoose from "mongoose";
//CONSTANTS
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("ERROR : MONGODB CONNECTION FAILED ", error);
    process.exitCode = 1;
  }
};

export default connectDB;

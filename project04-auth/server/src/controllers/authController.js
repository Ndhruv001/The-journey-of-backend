import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import config from '../config/config.js';
import { findUserByEmail, createUser } from '../db/connectDB.js';


export async function signup(req, res){
    const {username, email, password} = req.body;
    
    try {
        const userId = await createUser(username, email, password);
        res.status(201).json({userId});
    } catch (error) {
        res.status(500).json({message : "something went wrong while registering", error : error.message })
    }
}

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        // Retrieve the user by email
        const user = await findUserByEmail(email);

        // Check if user exists and password matches
        if (!user || !(await bcrypt.compare(password, user.password))) {
            console.log("Invalid credentials");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token =  jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: config.jwtExpiry });

        // Send the token in response
        res.json({ token });

    } catch (error) {
        console.error("Error during login:", error); // Log the error for debugging
        res.status(500).json({ message: "Something went wrong while logging in", error: error.message });
    }
}

export async function me(req, res) {
    const user = req.user;
    res.json(user);
  }
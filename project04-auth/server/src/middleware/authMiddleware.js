import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export async function authenticateToken(req, res, next) {
    // Get the authorization header
    const authHeader = req.headers['authorization']; // Use lowercase 'authorization'


    // Extract the token from the header
    const token = authHeader && authHeader.split(' ')[1]; // Correctly extract the token part
    

    if (!token) {
        return res.sendStatus(401); // Unauthorized if no token is provided
    }
    
    // Verify the token
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            console.error("Token verification failed:", err); // Log the error
            return res.sendStatus(403); // Forbidden if token verification fails
        }

        // Attach user to request object
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    });
}
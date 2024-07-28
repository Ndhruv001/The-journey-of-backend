import dotenv from "dotenv";
dotenv.config();

export default {
    mysqlHost : process.env.MYSQL_HOST,
    mysqlUser : process.env.MYSQL_USER,
    mysqlPassword : process.env.MYSQL_PASSWORD,
    mysqlDb : process.env.MYSQL_DB_NAME,
    port : process.env.PORT || 8000,
    jwtSecret : process.env.JWT_SECRET,
    jwtExpiry : process.env.JWT_EXPIRY
};
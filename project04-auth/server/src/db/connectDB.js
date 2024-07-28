import mysql from 'mysql2';
import config from '../config/config.js'
import bcrypt from 'bcrypt'

const pool = mysql.createPool({
    host :  config.mysqlHost,
    user :  config.mysqlUser,
    password :  config.mysqlPassword,
    database :  config.mysqlDb
}).promise();


//functions
export async function findUserByEmail(email) {
  const [user] =  await pool.execute("select * from users where email = ?",[email]);
  if(!user){
    console.log("user not found");
    return;
  }
  return user[0];
}

export async function createUser(username, email, password){

    //bcrypt password
    const hashPassword = await bcrypt.hash(password,10);

    const [result] = await pool.execute("insert into users (username, email, password) values (?, ?, ?)",[username, email, hashPassword]);
    return result.insertId;
}

import mysql from "mysql2/promise"
import dotenv from "dotenv"
//import { promisify } from "util";

dotenv.config();


export const mysqlPool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME
})

//export const db = promisify(mysqlPool.query).bind(mysqlPool);



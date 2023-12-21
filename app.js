import express from "express";
import dotenv from "dotenv";
import routes from "./route/index.js";
import { mysqlPool } from "./model/db.js";


dotenv.config();
const app = express();
const Port = process.env.PORT;



app.use(express.json());
app.use("/api/employees", routes);


// app.listen(Port, () => {
//   async function fetchData() {
//     try {
//       const results = await db("SELECT * FROM employees");
//       console.log("connected to DB successfully!!");
//       console.log(`server now running.......`);
//     } catch (error) {
//       console.error("Error executing query:", error);
//     }
//   }
  
//   fetchData();
// });
mysqlPool.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(3000,
            () => console.log(`server started at ${Port}`))
    })
    .catch(err => console.log('db connection failed. \n' + err))

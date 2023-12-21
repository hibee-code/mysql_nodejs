import express from "express"
import { getAllEmployees, getEmployeeId, newEmployee } from "../controller/index.js";


const routes = express.Router();

routes.post('/', newEmployee)
routes.get('/', getAllEmployees);
routes.get('/:id',getEmployeeId);


export default routes
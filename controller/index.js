//import { db } from "../model/db.js";
import { mysqlPool } from "../model/db.js";

export const getAllEmployees = async (req, res) => {
  try {
    const records = await mysqlPool.query("SELECT * FROM employees");
    return res.status(200).json({ records });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getEmployeeId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await mysqlPool.query(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );

    // if (result.length === 0) {
    //   return res.status(404).json({ error: "Task not found!" });
    // }

    // const records = await mysqlPool.query("SELECT * FROM employees");

    // const employeeExists = records.filter(
    //   (employee) => employee.id === result[0].id
    // );

    // if (!employeeExists) {
    //   return res.status(404).json({ error: "Employee not found!" });
    // }

    return res.status(200).json(result[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const newEmployee = async (req, res) => {
  try {
    const { name, city, employee_code, salary } = req.body;
    if (!(name, city, employee_code, salary)) {
      return res.status(401).json({ message: "Credential Not Found!!!!" });
    }
    const result = await mysqlPool.query(
      "INSERT INTO employees (name, city, employee_code, salary) VALUES (?, ?, ?, ?)",
      [name, city, employee_code, salary]
    );
    return res
      .status(201)
      .json({ result, message: "New Employee Details Succesfully Created!!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

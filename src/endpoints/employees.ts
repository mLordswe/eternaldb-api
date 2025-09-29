import { Router } from "express";
import { PrismaClient, type employees } from "../prisma/client/index.js";

const employeeRouters = Router();
const prisma = new PrismaClient();

employeeRouters.get("/employees", async (req, res) => {
	try {
		const employee: employees[] = await prisma.employees.findMany();
		res.json({
			message: "List of employees",
			data: employee,
		});
	} catch (error) {
		console.error("Error fetching employees:", error);
		res.status(500).json({
			message: "Internal server error!",
		});
	}
});
export default employeeRouters;

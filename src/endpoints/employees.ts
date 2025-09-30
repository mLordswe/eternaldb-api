import { Router } from "express";
import { PrismaClient, type employees } from "../prisma/client/index.js";
import { buildFilters } from "../utils/buildFIlters.js";

const employeeRouters = Router();
const prisma = new PrismaClient();

employeeRouters.get("/employees", async (req, res) => {
	try {
		const filters = buildFilters(req.query);
		const employee: employees[] = await prisma.employees.findMany({ where: filters });
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

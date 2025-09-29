import { Router } from "express";
import { PrismaClient, type member } from "../prisma/client/index.js";

const memberRouters = Router();
const prisma = new PrismaClient();

memberRouters.get("/members", async (req, res) => {
	try {
		const member: member[] = await prisma.member.findMany();
		res.json({
			message: "List of members",
			data: member,
		});
	} catch (error) {
		console.error("Error fetching members:", error);
		res.status(500).json({
			message: "Internal server error!",
		});
	}
});
export default memberRouters;

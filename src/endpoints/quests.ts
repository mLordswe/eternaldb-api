import { Router } from "express";
import { PrismaClient, type quests } from "../prisma/client/index.js";
import { buildFilters } from "../utils/buildFIlters.js";

const questsRouters = Router();
const prisma = new PrismaClient();

questsRouters.get("/quests", async (req, res) => {
	try {
		const filters = buildFilters(req.query);

		const quests: quests[] = await prisma.quests.findMany({ where: filters });

		res.json({
			message: "List of quests",
			data: quests,
		});
	} catch (error) {
		console.error("Error fetching quests:", error);
		res.status(500).json({
			message: "Internal server error!",
		});
	}
});
export default questsRouters;

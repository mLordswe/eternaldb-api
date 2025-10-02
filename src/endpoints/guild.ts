import { Router } from "express";
import { PrismaClient, type guild } from "../prisma/client/index.js";
import { buildFilters } from "../utils/buildFIlters.js";

const guildRouters = Router();
const prisma = new PrismaClient();

guildRouters.get("/guild", async (req, res) => {
	try {
		const filters = buildFilters(req.query);
		const guild: guild[] = await prisma.guild.findMany({ where: filters });
		res.json({
			meta: {
				related: ["/api/members", "/api/employees", "/api/quests"],
			},
			message: "List of guild",
			data: guild,
		});
	} catch (error) {
		console.error("Error fetching guild:", error);
		res.status(500).json({
			message: "Internal server error!",
		});
	}
});
export default guildRouters;

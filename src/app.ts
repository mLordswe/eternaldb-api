import express, { type NextFunction, type Request, type Response } from "express";

import memberRouter from "./endpoints/members.js";
import employeeRouters from "./endpoints/employees.js";
import questsRouters from "./endpoints/quests.js";
import { Prisma, PrismaClient } from "./prisma/client/index.js";
import guildRouters from "./endpoints/guild.js";
import health from "./endpoints/health.js";
import cors from "cors";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorhandler.js";
export const prisma = new PrismaClient();
const app = express();

app.set("view enginge", "ejs");
app.get("/", (req, res) => {
	try {
		res.render("index.ejs");
	} catch (error) {
		console.log("something went wrong", error);
	}
});
app.use(logger);
//add routes below

app.use(cors());
app.use("/api", memberRouter);
app.use("/api", employeeRouters);
app.use("/api", questsRouters);
app.use("/api", guildRouters);
app.use("/api", health);

// add routes above
app.use(errorHandler);
export default app;

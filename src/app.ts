import express, { type NextFunction, type Request, type Response } from "express";

import memberRouter from "./endpoints/members.js";
import employeeRouters from "./endpoints/employees.js";
import questsRouters from "./endpoints/quests.js";
import { Prisma, PrismaClient } from "./prisma/client/index.js";

export const prisma = new PrismaClient();
const app = express();

app.use("/api", memberRouter);
app.use("/api", employeeRouters);
app.use("/api", questsRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(500).json({ message: "Internal server error" });
});
export default app;

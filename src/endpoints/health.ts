import { Router } from "express";
import { uptime } from "process";

const healthRouter = Router();

healthRouter.get("/health", async (req, res) => {
	res.json({ ok: true, uptime: process.uptime() });
});
export default healthRouter;

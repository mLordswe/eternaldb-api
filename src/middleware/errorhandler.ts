import type { Request, Response, NextFunction } from "express";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
	console.error(err);
	res.status(500).json({ message: "Internal server error" });
}

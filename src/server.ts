import { rejects } from "assert";
import app, { prisma } from "./app.js";

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

const shutDown = async () => {
	try {
		console.log("Shutting down with grace");
		await new Promise<void>((resolve, reject) => {
			server.close((err) => {
				if (err) reject(err);
				else resolve();
			});
		});
		console.log("HTTP server closed");
		await prisma.$disconnect();
		console.log("Database Disconnected");
		process.exit(0);
	} catch (error) {
		console.error("Error during shutdown", error);
		process.exit(1);
	}
};
process.on("SIGINT", shutDown);
process.on("SIGTERM", shutDown);

import app, { prisma } from "./app.js";

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

const shutdown = async () => {
	console.log("Shutting down gracefully...");
	server.close(async () => {
		console.log("HTTP server closed");
		await prisma.$disconnect();
		console.log("Database disconnected");
		process.exit(0);
	});
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

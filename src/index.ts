import express from "express";
import { PrismaClient, type member } from "./prisma/client/index.js";

const prisma = new PrismaClient();
const app = express();

// app.use(express.json);
// app.get("/", (req, res) => {
// 	res.json({
// 		message: "hello world",
// 	});
// });

app.get("/api/members", async (req, res) => {
	const members: member[] = await prisma.member.findMany();
	res.json({
		message: "List of all members",
		data: members,
	});
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
// 	console.log(`Server is running on ${PORT}`);
// });
app.listen(3000);

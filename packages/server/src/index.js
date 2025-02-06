import express from "express";
import { randomReturn } from "@bitbolic/library";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send(`Hello World! ${randomReturn()}`);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

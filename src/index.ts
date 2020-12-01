import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

class App {
	public app: Application;

	constructor() {
		this.app = express();
		this.plugins();
		this.routes();
	}

	protected plugins(): void {
		this.app.use(bodyParser.json());
		this.app.use(morgan("dev"));
	}

	protected routes(): void {
		this.app.route("/").get((req: Request, res: Response) => {
			res.send("Ini ada route menggunakan typescript with express JS");
		});

		this.app.route("/users").post((req: Request, res: Response) => {
			res.send(req.body);
		});
	}
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
	console.log("This application run in port " + port);
});
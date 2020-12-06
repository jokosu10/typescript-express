import { Response, Request } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");

class TodoController implements IController {
	index(req: Request, res: Response): Response {
		return res.json({ message: "Index" });
	}

	create = async (req: Request, res: Response): Promise<Response> => {
		const { id } = req.app.locals.credential;
		const { description } = req.body;

		const todo = await db.todo.create({
			user_id: id,
			description: description
		})

		return res.json({ message: "Create todo success", data: todo });
	}

	show(req: Request, res: Response): Response {
		return res.json({ message: "Show" });
	}

	update(req: Request, res: Response): Response {
		return res.json({ message: "Update" });
	}

	delete(req: Request, res: Response): Response {
		return res.json({ message: "Delete" });
	}
}

export default new TodoController();
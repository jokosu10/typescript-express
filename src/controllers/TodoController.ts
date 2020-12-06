import { Response, Request } from "express";
import user from "../db/models/user";
import IController from "./ControllerInterface";
const db = require("../db/models");

class TodoController implements IController {
	index = async (req: Request, res: Response): Promise<Response> => {
		const { id } = req.app.locals.credential;

		const todos = await db.todo.findAll({ where: { user_id: id }, attributes: ['id', 'description'] });

		return res.json({ message: `List all todo by user id : ${id}`, data: todos });
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

	show = async (req: Request, res: Response): Promise<Response> => {
		const { id: user_id } = req.app.locals.credential;
		const { id } = req.params;

		const todo = await db.todo.findOne({
			where: { id, user_id }
		});

		if (todo) {
			return res.json({ message: `List single todo by params todo id`, data: todo });
		} else {
			return res.json({ message: "To do not found" });
		}
	}

	update = async (req: Request, res: Response): Promise<Response> => {
		const { id: user_id } = req.app.locals.credential;
		const { id } = req.params;
		const { description } = req.body;

		const todo = await db.todo.findOne({
			where: { id, user_id }
		});

		if (todo) {
			await db.todo.update({
				description: description
			}, {
				where: { id, user_id }
			});

			return res.json({ message: "Succesfull update todo" });
		} else {
			return res.json({ message: "Unsuccesfull update todo, because id not found" });
		}

	}

	delete = async (req: Request, res: Response): Promise<Response> => {
		const { id: user_id } = req.app.locals.credential;
		const { id } = req.params;

		const todo = await db.todo.findOne({
			where: { id, user_id }
		});

		if (todo) {
			await db.todo.destroy({
				where: { id, user_id }
			});

			return res.json({ message: "Succesfull delete todo" });
		} else {
			return res.json({ message: "Unsuccesfull update todo, because id not found" });
		}
	}
}

export default new TodoController();
import { Response, Request } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController {
	index = async (req: Request, res: Response): Promise<Response> => {
		const service: TodoService = new TodoService(req);
		const todos = await service.getAll();

		return res.json({ message: `List all todo by user id : ${service.credential.id}`, data: todos });
	}

	create = async (req: Request, res: Response): Promise<Response> => {
		const service: TodoService = new TodoService(req);
		const todo = await service.store();

		return res.json({ message: "Create todo success", data: todo });
	}

	show = async (req: Request, res: Response): Promise<Response> => {
		const service: TodoService = new TodoService(req);
		const todo = await service.getOne();

		if (todo) {
			return res.json({ message: `List single todo by params todo id`, data: todo });
		} else {
			return res.json({ message: "To do not found" });
		}
	}

	update = async (req: Request, res: Response): Promise<Response> => {
		const service: TodoService = new TodoService(req);
		const todo = await service.update();

		if (todo) {
			return res.json({ message: "Succesfull update todo" });
		} else {
			return res.json({ message: "Unsuccesfull update todo, because id not found" });
		}

	}

	delete = async (req: Request, res: Response): Promise<Response> => {
		const service: TodoService = new TodoService(req);
		const todo = await service.delete();

		if (todo) {
			return res.json({ message: "Succesfull delete todo" });
		} else {
			return res.json({ message: "Unsuccesfull delete todo, because id not found" });
		}
	}
}

export default new TodoController();
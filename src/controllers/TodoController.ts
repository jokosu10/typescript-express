import { Response, Request } from "express";
import IController from "./ControllerInterface";

class TodoController implements IController {
	index(req: Request, res: Response): Response {
		return res.json({ message: "Index" });
	}

	create(req: Request, res: Response): Response {
		return res.json({ message: "Create" });
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
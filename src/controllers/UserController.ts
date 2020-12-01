import { Response, Request } from "express";
import IController from "./ControllerInterface";

class UserController implements IController {
	index(req: Request, res: Response): Response {
		return res.json({ message: "Ini adalah endpoint index dari file controller" });
	}

	create(req: Request, res: Response): Response {
		return res.send(req.body);
	}

	show(req: Request, res: Response): Response {
		throw new Error("Method not implemented");
	}

	update(req: Request, res: Response): Response {
		throw new Error("Method not implemented");
	}

	delete(req: Request, res: Response): Response {
		throw new Error("Method not implemented");
	}
}

export default new UserController();
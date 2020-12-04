import { Response, Request } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
	{ id: 1, name: "Adi" },
	{ id: 2, name: "Budi" },
	{ id: 3, name: "Cidi" },
	{ id: 4, name: "Didi" }
];

class UserController implements IController {
	index(req: Request, res: Response): Response {
		console.log("this is index user from user controller");
		return res.json(data);
	}

	create(req: Request, res: Response): Response {
		const { id, name } = req.body;
		data.push({
			id: id,
			name: name
		});

		return res.json({ message: "Create data success" });
	}

	show(req: Request, res: Response): Response {
		const { id } = req.params;

		let person = data.find(item => item.id == id);

		if (person) {
			return res.json({ message: "Data found", data: person })
		}

		return res.json({ message: "Data not found" });
	}

	update(req: Request, res: Response): Response {
		const { id } = req.params;
		const { name } = req.body;

		let person = data.find(item => item.id == id);

		if (person) {
			person.name = name;
			return res.json({ message: "Data Updated", data: person })
		}

		return res.json({ message: "Data not found" });
	}

	delete(req: Request, res: Response): Response {
		const { id } = req.params;
		let people = data.filter(item => item.id != id);

		return res.json({ message: "Data found", data: people });
	}
}

export default new UserController();
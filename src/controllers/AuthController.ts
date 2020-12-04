import { Request, Response } from "express";
import user from "../db/models/user";
const db = require('../db/models');

class AuthController {
	register = async (req: Request, res: Response): Promise<Response> => {
		let { username, password } = req.body;

		const createdUser = await db.user.create({
			username: username,
			password: password
		});

		return res.json({ message: "Registration user success" });
	}

	login(req: Request, res: Response): Response {
		return res.send("test login")
	}
}

export default new AuthController();
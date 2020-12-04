import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
import user from "../db/models/user";
const db = require('../db/models');

class AuthController {
	register = async (req: Request, res: Response): Promise<Response> => {
		let { username, password } = req.body;
		const HashPassword: string = await Authentication.passwordHash(password);

		const createdUser = await db.user.create({
			username: username,
			password: HashPassword
		});

		return res.json({ message: "Registration user success" });
	}

	login = async (req: Request, res: Response): Promise<Response> => {
		let { username, password } = req.body;

		const user = await db.user.findOne({
			where: { username: username }
		});

		if (!user) {
			return res.json({ message: "User not found" });
		}

		let compare = await Authentication.comparePassword(password, user.password);

		if (compare) {
			let token = Authentication.generateToken(user.id, username, user.password);
			return res.json({ message: "Authentication successfull", data: token });
		}

		return res.json({ message: "Authentication failed" });

	}
}

export default new AuthController();
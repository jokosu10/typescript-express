import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
	if (!req.headers.authorization) {
		return res.json({ message: "Not Authenticated" })
	}

	let secretKey = process.env.JWT_SECRET_KEY || 'secretkey';
	const token: string = req.headers.authorization.split(" ")[1];

	try {
		const credential: string | object = jsonwebtoken.verify(token, secretKey);

		if (credential) {
			req.app.locals.credential = credential;
			return next();
		}

		return res.json({ message: "token invalid" });
	} catch (error) {
		return res.json(error);
	}
}
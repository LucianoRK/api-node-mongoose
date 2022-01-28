import { verify } from "jsonwebtoken";
import jwtConfig from "../config/jwt.config";

export default async function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token inválido" })
    }

    const [type, token] = authHeader.split(' ');

    try {
        const decode = await verify(token, jwtConfig.secret);

        req.userId = decode.sub;

        return next();

    } catch (error) {
        return res.status(401).json({ error: "Token inválido" })
    }

}
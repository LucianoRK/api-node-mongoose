import User from "../models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import jwrConfig from "../config/jwt.config";


class AuthController {

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Usuário ou senha incorreto' })
        }

        const checkPassword = await bcryptjs.compare(password, user.password);

        if (!checkPassword) {
            return res.status(400).json({ error: 'Usuário ou senha incorreto' })
        }

        const { secret, expiresIn } = jwrConfig;

        const token = jwt.sign(user.show(), secret, {
            subject: String(user._id),
            expiresIn
        })

        return res.status(200).json({ token: token });
    }
}

export default new AuthController();
import User from "../models/User";

class UserController {

    async index(req, res){
        const users = await User.find();

        return res.json(users);
    }

    async show(req, res) {
        const {id} = req.params;
        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({message: 'Não encontrado'});
        }

        return res.json({user:user.show()});
    }

    async store(req, res){
        const {name, email, password} = req.body;
        const user = await User.create({
            name,
            email,
            password
        })

        return res.status(201).json({user:user.show()});
    }

    async update(req, res){
        const {id} = req.params;
        const {name, email, password} = req.body;
        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({message: 'Não encontrado'});
        }

        user.name = name;
        user.email = email;
        user.password = password;

        user.save();

        return res.json({message: 'Alterado com sucesso'});
    }

    async delete(req, res){
        const {id} = req.params;
        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({message: 'Não encontrado'});
        }

        await user.remove();

        return res.status(204).json();
    }
}

export default new UserController();
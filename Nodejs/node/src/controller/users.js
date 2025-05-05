import { Router } from "express";
import { User } from "../database/User.js";


const userController = Router();

// consulta general
userController.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    }
    catch(err){
        // muestro el error capturado/encontrado junto con un msg
        console.error(err);
        res.status(500).json({ message: "Server error"})
    }
});

// consulta por ID
userController.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        res.status(200).json(user);
    }
    catch(err){
        // muestro el error capturado/encontrado junto con un msg
        console.error(err);
        res.status(500).json({ message: "ID no encontrado"})
    }
});

export default userController;
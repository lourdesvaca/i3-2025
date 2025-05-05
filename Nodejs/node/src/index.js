import express from "express";
import { route } from "./controller/products.js";
import { middleware} from "./middleware/middleware.js";
import sequelize from "./database/database.js";
import { User } from ".database/User.js"
//
const app = express();
//
app.use(cors({origin: "*"}))

app.use(route);

async function connection() {
    await sequelize.authenticate();
    await sequelize.sync({ });// force:true se borra para que no borre y cree las tablas cada que se ejecute
    await test();
};

// insert de datos a la tabla usuarios
async function test() {
    await User.create({
        name: "Farid",
        email: "farid@123.com",
        birthday: "2000-05-25"//yyyy-mm-dd
    });

    // consulta de datos insertados, busqueda general
    const data = await User.findAll();
    console.log(data)

    // consulta por PK
    const user = await User.findByPk();// Colocar o ID
    console.log(user)

    // consulta para actualizar
    await user.update({
        name: "Farid Mont",
        email: "farid@123.com",
        birthday: "2000-05-25"
    });
    
    console.log(user)

    // consulta para eliminar
    await user.destroy();
}


connection();

app.listen(3000, () => {
    console.log("Server started")
});







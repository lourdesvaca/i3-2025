import { DataTypes } from "sequelize";
import sequelize from "./database.js";

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE 
    }
});

export { User };
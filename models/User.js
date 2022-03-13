const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    checkPass(pword){
        return (pword === this.password);
    }
}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
                msg: "Your username must be an email address."
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:{
                    args: [8, 32],
                    msg: "Password must be between 8 and 32 characters long."
                }
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;

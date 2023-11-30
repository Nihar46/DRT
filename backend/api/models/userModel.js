import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";

const User = db.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  user_uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_type: {
    type: DataTypes.STRING,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
  },
  createdBy: {
    type: DataTypes.STRING,
  },
  modifiedBy: {
    type: DataTypes.STRING,
  },
  createdDate: {
    type: DataTypes.DATE,
  },
  updatedDate: {
    type: DataTypes.DATE,
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
  remoteIP: {
    type: DataTypes.STRING,
  },
  passwordExpDate: {
    type: DataTypes.DATE,
  },
  loginAttempts: {
    type: DataTypes.INTEGER,
  },
  accountLockTime: {
    type: DataTypes.DATE,
  },
  isAccountLocked: {
    type: DataTypes.ENUM("0", "1"), // Adjust the type based on your requirements
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.sync({ alter: true })
  .then(() => {
    console.log("User table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing User table:", error);
  });

export default User;

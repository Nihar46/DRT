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
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reset_password_token: {
    type: DataTypes.STRING,
  },
  user_type: {
    type: DataTypes.STRING,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
  },
  created_by: {
    type: DataTypes.STRING,
  },
  modified_by: {
    type: DataTypes.STRING,
  },
  created_date: {
    type: DataTypes.DATE,
  },
  updated_date: {
    type: DataTypes.DATE,
  },
  last_login: {
    type: DataTypes.DATE,
  },
  remote_ip: {
    type: DataTypes.STRING,
  },
  password_exp_date: {
    type: DataTypes.DATE,
  },
  login_attempts: {
    type: DataTypes.INTEGER,
  },
  account_lock_time: {
    type: DataTypes.DATE,
  },
  is_account_locked: {
    type: DataTypes.ENUM("0", "1"), // Adjust the type based on your requirements
  },
  is_email_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;

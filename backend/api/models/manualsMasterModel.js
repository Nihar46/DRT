import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";

const ManualsMaster = db.define("ManualsMasters", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  manual_category: {
    type: DataTypes.STRING,
  },
  filePath: {
    type: DataTypes.STRING,
  },
  version: {
    type: DataTypes.INTEGER,
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
});

// Sync the model with the database
ManualsMaster.sync({ alter: true })
  .then(() => {
    console.log("ManualsMaster table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing ManualsMaster table:", error);
  });

export default ManualsMaster;

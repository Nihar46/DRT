import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";

import User from "./userModel.js"; // Import the User model for association

const Project = db.define("Projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  project_name: {
    type: DataTypes.STRING,
  },
  project_id: {
    type: DataTypes.INTEGER,
  },
  project_status: {
    type: DataTypes.ENUM("InProgress", "Completed", "OnHold", "Cancelled"), // Adjust enum values based on your project status options
  },
  project_milestone: {
    type: DataTypes.ENUM("Milestone1", "Milestone2", "Milestone3"), // Adjust enum values based on your project milestone options
  },
  project_estimation_cost: {
    type: DataTypes.INTEGER,
  },
  project_actual_cost: {
    type: DataTypes.INTEGER,
  },
  request_number: {
    type: DataTypes.STRING,
    unique: true,
  },
  brand: {
    type: DataTypes.STRING,
  },
  division_id: {
    type: DataTypes.INTEGER,
  },
  region_id: {
    type: DataTypes.INTEGER,
  },
  territory: {
    type: DataTypes.STRING,
  },
  account_manager_id: {
    type: DataTypes.UUID,
    // Foreign key referencing the User table
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

// Define foreign key relationship
Project.belongsTo(User, {
  foreignKey: "account_manager_id",
  targetKey: "user_uuid",
  as: "accountManager",
});

// Sync the model with the database
Project.sync({ alter: true })
  .then(() => {
    console.log("Project table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing Project table:", error);
  });

export default Project;

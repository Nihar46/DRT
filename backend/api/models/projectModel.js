import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";

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
  /*request_number: {
    type: DataTypes.STRING,
    unique: true,
  },
  */
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
    references: {
      model: "Users", // Table name as it is in the database
      key: "user_uuid",
    },
    // Foreign key referencing the User table
  },
  createdBy: {
    type: DataTypes.UUID,
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

export default Project;

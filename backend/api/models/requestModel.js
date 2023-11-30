import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";
import User from "./userModel.js"; // Import the User model for association
import Project from "./projectModel.js"; // Import the Project model for association

const Request = db.define("Request", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  request_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key referencing the country master table
  },
  design_file_link: {
    type: DataTypes.STRING,
  },
  completion_file_link: {
    type: DataTypes.STRING,
  },
  request_number: {
    type: DataTypes.STRING,
    // Foreign key referencing the Project table
  },
  _2d_count: {
    type: DataTypes.INTEGER,
  },
  _3d_count: {
    type: DataTypes.INTEGER,
  },
  generic_pattern_guide_required: {
    type: DataTypes.ENUM("Yes", "No"), // Adjust enum values based on your options
  },
  expected_completion_date: {
    type: DataTypes.DATE,
  },
  client_requested_deadline: {
    type: DataTypes.DATE,
  },
  brand: {
    type: DataTypes.STRING,
  },
  style: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  installation: {
    type: DataTypes.STRING,
  },
  comment_description: {
    type: DataTypes.STRING,
  },
  assigned_designer_id: {
    type: DataTypes.UUID,
    // Foreign key referencing the User table
  },
  admin_id: {
    type: DataTypes.UUID,
    // Foreign key referencing the User table
  },
  estimator_id: {
    type: DataTypes.UUID,
    // Foreign key referencing the User table
  },
  request_status: {
    type: DataTypes.ENUM("Pending", "InProgress", "Completed", "Cancelled"), // Adjust enum values based on your options
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

// Define foreign key relationships
Request.belongsTo(Project, {
  foreignKey: "request_number",
  targetKey: "request_number",
  as: "project",
});
Request.belongsTo(User, {
  foreignKey: "assigned_designer_id",
  targetKey: "user_uuid",
  as: "assignedDesigner",
});
Request.belongsTo(User, {
  foreignKey: "admin_id",
  targetKey: "user_uuid",
  as: "admin",
});
Request.belongsTo(User, {
  foreignKey: "estimator_id",
  targetKey: "user_uuid",
  as: "estimator",
});

// Sync the model with the database
Request.sync({ alter: true })
  .then(() => {
    console.log("Request table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing Request table:", error);
  });

export default Request;

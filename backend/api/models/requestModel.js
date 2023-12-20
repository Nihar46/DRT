import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";

const Request = db.define(
  "Requests",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
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
      unique: true,
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
    /*
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
    */
    comment_description: {
      type: DataTypes.STRING,
    },
    assigned_designer_id: {
      type: DataTypes.UUID,
      references: {
        model: "Users",
        key: "user_uuid",
      },
      // Foreign key referencing the User table
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Projects",
        key: "id",
      },
    },
    admin_id: {
      type: DataTypes.UUID,
      references: {
        model: "Users",
        key: "user_uuid",
      },
      // Foreign key referencing the User table
    },
    estimator_id: {
      type: DataTypes.UUID,
      // Foreign key referencing the User table
    },
    request_status: {
      type: DataTypes.ENUM(
        "Pending",
        "In Progress",
        "On Hold",
        "Delivered",
        "Revision Requested",
        "Rivision in Progress",
        "Revision Delivered"
      ), // Adjust enum values based on your options
    },
    createdBy: {
      type: DataTypes.UUID,
      references: {
        model: "Users",
        key: "user_uuid",
      },
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
  },
  {
    timestamps: true,
  }
);

export default Request;

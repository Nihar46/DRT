import Request from "./requestModel.js";
import User from "./userModel.js";
import Project from "./projectModel.js";
import RequestDesignDetail from "./requestDesignDetailModel.js";
//USER AND REQUEST

console.log("Associations started");
User.hasMany(Request, {
  foreignKey: "createdBy",
  as: "createdRequests",
});

Request.belongsTo(User, {
  foreignKey: "createdBy",
  as: "creator",
});

// A Request has an assigned Admin (User)
Request.belongsTo(User, {
  foreignKey: "admin_id",
  as: "admin",
});

// A Request has an assigned Designer (User)
Request.belongsTo(User, {
  foreignKey: "assigned_designer_id",
  as: "designer",
});

// USER AND PROJECT
User.hasMany(Project, {
  foreignKey: "account_manager_id",
  as: "createdProjects",
});

Project.belongsTo(User, {
  foreignKey: "account_manager_id",
  as: "creator",
});

//PROJECT AND REQUEST
Project.hasMany(Request, {
  foreignKey: "project_id",
  as: "requests",
});

Request.belongsTo(Project, {
  foreignKey: "project_id", // This is a foreign key in the Request model that references the Project's primary key
  targetKey: "id", // This should match the primary key in the Project model
  as: "project",
});

//REQUEST AND REQUESTDESIGNDETAILS
Request.hasMany(RequestDesignDetail, {
  foreignKey: "request_id",
  as: "details",
});

RequestDesignDetail.belongsTo(Request, {
  foreignKey: "request_id",
  as: "request",
});

export { User, Request, Project, RequestDesignDetail };

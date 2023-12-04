import accountManagerSalesRepRoutes from "./accountManagerSalesRepRoutes.js";
import User from "../models/userModel.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import crypto from "crypto";
import sendEmail from "../utilities/sendEmail.js";

const routes = (app) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // TESTING THE API ROUTE
  app.get("/test", (req, res) => {
    console.log("API HIT!!!");
    return res.json({ message: "Api Working!" });
  });

  app.post("/upload", (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    // "files" is the name of the input field
    let uploadedFiles = req.files.files;
    console.log("FILES::", uploadedFiles);

    // If only one file is uploaded, ensure that uploadedFiles is an array
    if (!Array.isArray(uploadedFiles)) {
      uploadedFiles = [uploadedFiles];
    }

    const filesPromises = uploadedFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const targetPath = path.join(
          __dirname,
          "..",
          "..",
          "assets",
          "design-files",
          file.name
        );
        file.mv(
          //path.join(__dirname, "assets/design_files", file.name),
          targetPath,
          (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        );
      });
    });

    Promise.all(filesPromises)
      .then(() => res.send("Files uploaded!"))
      .catch((err) => res.status(500).send(err));
  });

  app.delete("/delete-file/:name", (req, res) => {
    const fileName = req.params.name;
    //const filePath = path.join(__dirname, "assets/design_files", fileName);

    const targetPath = path.join(
      __dirname,
      "..",
      "..",
      "assets",
      "design-files",
      fileName
    );

    fs.unlink(targetPath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send("File deleted!");
    });
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("REQ BODY:", req.body);

    //Check that required fields are present
    if (!email || !password) {
      return res.json({
        message: "One or more required fields are missing",
        success: false,
      });
    }

    try {
      const userExists = await User.findOne({
        where: { email },
      });

      //Check for user in database
      if (!userExists) {
        return res.status(404).json({
          message: "User does not exist. Please sign up!",
          success: false,
        });
      }

      //validate password of user(if found)
      const validPassword = await bcryptjs.compare(
        password,
        userExists.password
      );
      if (!validPassword) {
        return res.status(401).json({
          message: "Invalid credentials!",
          success: false,
        });
      }

      const tokenData = {
        id: userExists.id,
        email: userExists.email,
      };

      //create signed token
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      });

      //encrypt email
      const user = userExists.dataValues.email;

      res.cookie("token", token);
      res.cookie("user", user);

      return res.status(201).json({
        message: "Login successful!",
        success: true,
      });
    } catch (error) {
      console.log("Login failed:", error);
      return res.status(500).json({ error: "Login failed" });
    }
  });
  app.post("/logout", async (req, res) => {
    try {
      res.clearCookie("token", { path: "/", expires: new Date(0) });
      res.clearCookie("user", { path: "/", expires: new Date(0) });

      return res.json({
        message: "You have been logged out!",
        success: true,
      });
    } catch (error) {
      console.log("Error occured while logging out:", error);
      return res.status(500).json({ error: "Log out failed" });
    }
  });
  app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
      const userExists = await User.findOne({
        where: { email },
      });

      //Check for user in database
      if (!userExists) {
        return res.status(404).json({
          message: "User does not exist. Please sign up!",
          success: false,
        });
      }

      const passwordResetToken = crypto.randomBytes(32).toString("hex");
      const response = await User.update(
        { reset_password_token: passwordResetToken },
        {
          where: {
            id: userExists.id,
          },
        }
      );

      const url = `${process.env.BASE_URL}users/${userExists.id}/reset-password/${passwordResetToken}`;
      await sendEmail(userExists.email, "Password Reset Link", url);

      return res.status(201).json({
        message: "A reset password link has been sent to your email",
        success: true,
      });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  });

  app.post("/users/:id/reset-password/:token", async (req, res) => {
    const { password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          [Op.and]: [
            { id: req.params.id },
            { reset_password_token: req.params.token },
          ],
        },
      });

      if (!user) {
        return res.status(400).json({
          message: "Invalid link",
          success: false,
        });
      }

      const salt = await bcryptjs.genSalt(10);
      const NewPassword = await bcryptjs.hash(password, salt);

      const response = await User.update(
        { reset_password_token: "", password: NewPassword },
        {
          where: { id: req.params.id },
        }
      );

      res
        .status(200)
        .json({ message: "Password reset successful", success: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to reset password", success: false });
    }
  });

  app.use("/account-manager-sales-rep", accountManagerSalesRepRoutes);
};

export default routes;

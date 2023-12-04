import accountManagerSalesRepRoutes from "./accountManagerSalesRepRoutes.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";

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

  app.get("/login", (req, res) => {
    console.log("Login API WORKING");
    return res.json({ message: "Login working" });
  });
  app.use("/account-manager-sales-rep", accountManagerSalesRepRoutes);
};

export default routes;

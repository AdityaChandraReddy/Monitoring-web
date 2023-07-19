const mysql = require("mysql");
const config = require("../config");
const path = require("path");
const multer = require("multer");

module.exports = (body) =>
  new Promise((resolve, reject) => {
    // let sampleFile;
    // let uploadPath;
    console.log("bodydy", body);
    // const storage = multer.diskStorage({
    //   destination: (req, file, cb) => {
    //     cb(null, "uploads/");
    //   },
    //   filename: (req, file, cb) => {
    //     cb(null, file.originalname);
    //   },
    // });
    // const upload = multer({ storage: storage });

    // if (!body.files || Object.keys(body.files).length === 0) {
    //   return reject({ status: 400, msg: "Image not found" });
    // }

    // const uploader = multer({ storage: multer.memoryStorage() });

    // sampleFile = body.files.sampleFile

    const connection = mysql.createConnection(config);

    connection.connect((error) => {
      if (error) reject({ statusMsg: error.message });
    });

    let query = `UPDATE users set profilePic = '${body.filename}' WHERE id = '1' `;

    connection.query(query, (error, results) => {
      if (error) {
        reject({ statusMsd: error.message });
      }
      resolve({ status: "200", message: "Image added successfully", results });
    });
    connection.end();
  });

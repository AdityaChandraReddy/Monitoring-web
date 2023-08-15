const mysql = require("mysql");
const config = require("../config");
const path = require("path");
const multer = require("multer");

module.exports = (bodyFile, body) =>
  new Promise((resolve, reject) => {
    console.log("bodydy", bodyFile, body);
    const { images, roomId } = body;
    //
    console.log("imagesssssss", images, roomId);
    const connection = mysql.createConnection(config);

    connection.connect((error) => {
      if (error) reject({ statusMsg: error.message });
    });
    const new_arry = JSON.stringify([
      ...JSON.parse(images),
      `${bodyFile.filename}`,
    ]);
    console.log(new_arry);
    let query = `UPDATE projectmonitoring set image = ${JSON.stringify(
      new_arry
    )} WHERE roomId = ${roomId} `;

    connection.query(query, (error, results) => {
      if (error) {
        reject({ statusMsd: error.message });
      }
      resolve({ status: "200", message: "Image added successfully", results });
    });
    connection.end();
  });

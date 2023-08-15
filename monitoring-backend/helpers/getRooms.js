const mysql = require("mysql");
const config = require("../config");

module.exports = (ProjectId) =>
  new Promise((resolve, reject) => {
    console.log("getting rooms");
    const connection = mysql.createConnection(config);
    connection.connect((error) => {
      if (error) reject({ statusMsg: error.message });
    });
    console.log(ProjectId);
    connection.query(
      `SELECT * FROM projectmonitoring WHERE projectId= ${ProjectId}`,
      (error, results) => {
        if (error) {
          reject({ statusMsd: error.message });
        }
        console.log("results of rooms", results);
        resolve({
          status: "200",
          payload: results,
        });
      }
    );
    connection.end();
  });

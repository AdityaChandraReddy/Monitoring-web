const mysql = require("mysql");
const config = require("./config");

module.exports = (firm) =>
  new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);

    connection.connect((error) => {
      if (error) reject({ statusMsg: error.message });
    });
    connection.query("SELECT * FROM projects", (error, results) => {
      if (error) {
        reject({ statusMsd: error.message });
      }
      resolve({ status: "200", payload: results });
    });
    connection.end();
  });

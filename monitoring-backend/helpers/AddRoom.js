const mysql = require("mysql");
const config = require("../config");

module.exports = (body) =>
  new Promise((resolve, reject) => {
    console.log("aaaaaaaaaaa", body);

    let { projectName, roomName, projectId } = body;
    console.log(projectName);
    const connection = mysql.createConnection(config);

    connection.connect((error) => {
      if (error) reject({ statusMsg: error.message });
    });

    let query = `INSERT INTO ProjectMonitoring (ProjectName,roomName,projectId) VALUES  ('${projectName}','${roomName}','${projectId}')`;

    connection.query(query, (error, results) => {
      if (error) {
        reject({ statusMsd: error.message });
      }
      resolve({ status: "200", message: "Added Room Successfully", results });
    });
    connection.end();
  });

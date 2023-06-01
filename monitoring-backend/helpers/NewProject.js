const mysql = require("mysql");
const config = require("../config");

module.exports = (body) =>
  new Promise((resolve, reject) => {
    console.log("aaaaaaaaaaa");

    let { projectName, dateCreated, company } = body;
    console.log(projectName, dateCreated, company);
    const connection = mysql.createConnection(config);

    connection.connect((error) => {
      if (error) reject({ statusMsg: error.message });
    });

    let query = `INSERT INTO projects (ProjectName , DateCreated , company) VALUES ('${projectName}','${dateCreated}','${company}')`;

    connection.query(query, (error, results) => {
      if (error) {
        reject({ statusMsd: error.message });
      }
      resolve({ status: "200", message: "Added Project Successfully" });
    });
    connection.end();
  });

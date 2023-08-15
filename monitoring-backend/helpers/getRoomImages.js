const mysql = require("mysql");
const config = require("../config");

module.exports = (roomid) =>
  new Promise((resolve, reject) => {
    console.log("getting pic");
    const connection = mysql.createConnection(config);

    connection.connect((error) => {
      if (error) reject({ statusMsg: error.message });
    });
    connection.query(
      `SELECT image FROM projectmonitoring WHERE roomId= ${roomid}`,
      (error, results) => {
        if (error) {
          reject({ statusMsd: error.message });
        }
        console.log("results of pic", results, results[0].profilePic);
        resolve({
          status: "200",
          payload: results,
          //   link: `http://localhost:8000/${results[0].profilePic}`,
        });
      }
    );
    connection.end();
  });

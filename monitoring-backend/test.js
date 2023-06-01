// var config = require("./config");
const sql = require("mysql");

// const config = {
//   user: "root", // sql user
//   password: "9490", //sql user password
//   //   server: "127.0.0.1", // if it does not work try- localhost
//   server: "localhost", // if it does not work try- localhost
//   database: "new_schema",
//   port: 3306,
// };

const sqlConfig = {
  user: "root",
  password: "9490",
  database: "new_schema",
  server: "127.0.0.1",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    // encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

// async function a() {
//   let pool = sql.connect(sqlConfig, async () => {
//     console.log("connnetecd", pool);
//     //   return products.recordsets;
//   });
//   let products = await pool.request().query("SELECT * from projects");
//   console.log("proecc", products);
// }

// a();
// var dbConn = new sql.Connection(sqlConfig);
// console.log("dg", dbConn);
// console.log(pool, "pool");

// console.log("ck eee");

// new Promise((resolve, reject) => {
//   // var con = sql.ConnectionPool(sqlConfig);

//   let pool = sql.connect(sqlConfig, () => {
//     console.log("conn");
//   });
//   let products = pool.request().query("SELECT * from projects");
//   // con.connect(function (err) {
//   //   if (err) throw err;
//   //   console.log("Connected!");
//   // });
// });

// var mysql = require('mysql');

var con = sql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "9490",
    database: "new_schema",
  },
  () => {
    console.log("connected");
  }
);
console.log("con,", con);

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("My SQL Connected");
});

con.query("SELECT * from projects", (err, results) => {
  console.log("results", results);
});

// (async () => {
//   await sql.connect(sqlConfig, () => {
//     console.log("aaaaaaaa");
//   });
//   let r = pool.request().query("SELECT * from projects");

//   // con.connect(function (err) {
//   //   if (err) throw err;
//   //   console.log("Connected!");
//   // });
// })();

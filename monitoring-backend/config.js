const config = {
  user: "root", // sql user
  password: "9490", //sql user password
  server: "127.0.0.1", // if it does not work try- localhost
  database: "new_schema",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "New", // SQL Server instance name
  },
  port: 3306,
};

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
module.exports = sqlConfig;

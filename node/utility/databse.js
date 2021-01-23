const db = require("mysql2");
const pool =db.createPool({
  user: "root",
  database: "blogs",
  password: "root",
  host: "localhost",
});
module.exports=pool.promise();
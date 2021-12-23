const express = require("express");
const mysql = require("mysql");

const port = 3000;

const conn = mysql.createConnection({
  host: "fc_mysql",
  user: "root",
  password: "root",
  database: "full_cycle",
});

conn.connect((err) => {
  if (err) {
    console.error("Mysql connection error!!! >>>>>:", err);
    return;
  }

  console.log("Mysql connection successful!");

  //inserindo dados no db
  const sql = "INSERT INTO people(nome) VALUES('Jhonatan')";
  conn.query(sql);
  conn.end();

});

const app = express();

app.get("/", (_, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(port, () => {
  console.log("Express listen on " + port + "!!!");
});

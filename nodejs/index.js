const express = require("express");
const mysql = require("mysql");
const getPeople = "SELECT nome FROM people";

const port = 3000;

const app = express();

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
  const sql = "INSERT INTO people(nome) VALUES('Jhonatan Yamane')";
  conn.query(sql);
});

app.get("/", (_, res) => {
  //declarando variavel para armazenar codigo html
  var finalResult =
    "<h1>Full Cycle Rocks!!!</h1><h2>Lista de Nomes Cadastrados no BD: </h2><ul>";

  conn.query(getPeople, function (err, result, fields) {
    if (err) throw err;
    console.log("Result:" + result);
    result.forEach((element) => {
      finalResult = finalResult + "<li>" + element.nome + "</li>";
    });

    finalResult = finalResult + "</ul>";
    console.log("FinalResult: " + finalResult);
    res.send(finalResult);
  });

});

app.listen(port, () => {
  console.log("Express listen on " + port + "!!!");
});

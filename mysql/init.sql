CREATE DATABASE full_cycle;

use full_cycle;

/*criando banco de dados*/
CREATE TABLE people (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

/*inserindo dados*/
INSERT INTO people(nome) values ('Jhow');
# Iniciando com Docker

## Desafio Nginx com Node.js

Para obter o resultado do desafio, execute o código abaixo:
```
docker-compose up
```

Para acessar o banco de dados dentro do container mysql, utilize as seguintes configurações:

- acessando banco de dados no container
```
docker exec -it <ID_CONTAINER> sh
```

- dentro do container digite:
```
mysql -uroot -proot
```

# Pronto, você já está dentro do mysql! 

Para visualizar os dados do banco de dados, siga essas etapas:

- verificando todos bd
```
show databases;
```

- ativando bd para acessar a tabela people.
```
use full_cycle;
```

- e por fim, selecione todos os registros da tabela people:
```
select * from people;
```

Ao total serão 2 registros dentro da tabela. Um registro criado no script init.sql dentro da pasta mysql, e o outro criado dentro da aplicação conforme desafio.
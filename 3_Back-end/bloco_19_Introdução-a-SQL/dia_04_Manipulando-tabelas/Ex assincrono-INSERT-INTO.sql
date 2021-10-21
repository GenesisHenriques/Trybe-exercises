-- 1 Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o 
-- botão direito na tabela sakila.staff e selecione
-- "Table Inspector". Clique na aba "columns" e verifique
-- quais campos aceitam nulos para te guiar. Lembre-se de
-- que valores que são gerados automaticamente não precisam
-- ser inseridos manualmente. Boa explorada

SELECT * FROM sakila.staff;

INSERT INTO sakila.staff
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
	('Filipe', 'Henriques', 2, 'guina@gmail.com', 1, 1, 'guina', 'guinaGuina');

-- 2 Feito o exercício anterior, vamos agora para o nível 2.
-- Insira dois funcionários novos em apenas uma query .

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Thiago', 'Henriques', 2, 'thiago@gmail.com', 1, 1, 'thiago', 'thiagoThiago'),
('Talia', 'Henriques', 2, 'thalia@gmail.com', 1, 1, 'thalia', 'thaliaThalia');

-- 3 Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre
-- essas pessoas como atores na tabela sakila.actor .

SELECT * FROM sakila.actor
ORDER BY actor_id DESC;

SELECT * FROM sakila.customer;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;

-- 4 Cadastre três categorias de uma vez só na tabela sakila.category .

SELECT * FROM sakila.category;

INSERT INTO sakila.category (name)
VALUES ('abc'), ('def'), ('ghi');

-- 5 Cadastre uma nova loja na tabela sakila.store .

SELECT * FROM sakila.store;

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUE (3, 3);
    

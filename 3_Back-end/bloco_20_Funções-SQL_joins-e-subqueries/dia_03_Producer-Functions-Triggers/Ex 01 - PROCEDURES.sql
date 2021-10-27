-- 1 Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir
-- o id do ator ou atriz e a quantidade de filmes atuados.

USE sakila;

DELIMITER $$
	CREATE PROCEDURE exibe_atores_mais_famosos()
    BEGIN
		SELECT 
    CONCAT(a.first_name, ' ', a.last_name) AS `Nome`,
    COUNT(*) AS `Quantidade_filmes`
FROM
    sakila.actor AS a
INNER JOIN
	sakila.film_actor AS fa ON a.actor_id = fa.actor_id
    GROUP BY fa.actor_id
    ORDER BY `Quantidade_filmes` DESC LIMIT 10;
    END $$
    DELIMITER ;
    
CALL exibe_atores_mais_famosos();
    
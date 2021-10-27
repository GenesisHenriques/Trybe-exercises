-- 2 Crie uma function que, dado o parâmetro de entrada inventory_id ,
-- retorna o nome do filme vinculado ao registro de inventário com esse id.

USE sakila;

DELIMITER $$
CREATE FUNCTION pegue_filme_correspondente(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN DECLARE nome_filme VARCHAR(100);
	SELECT 
    f.title
FROM
    sakila.inventory AS i
INNER JOIN
	sakila.film AS f ON i.film_id = f.film_id
WHERE i.inventory_id = id
INTO nome_filme;
RETURN nome_filme;
END $$
DELIMITER ;

SELECT pegue_filme_correspondente(30);

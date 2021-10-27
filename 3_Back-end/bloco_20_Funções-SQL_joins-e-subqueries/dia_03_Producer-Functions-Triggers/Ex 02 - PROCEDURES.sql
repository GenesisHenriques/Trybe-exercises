-- 2 Monte uma procedure que receba como parâmetro o nome da categoria desejada
-- em uma string e que exiba o id do filme , seu titulo , o id de sua categoria
-- e o nome da categoria selecionada. Use as tabelas film , film_category e category
-- para montar essa procedure.

USE sakila;

DELIMITER $$
CREATE PROCEDURE achar_filme_por_categoria(IN categoria VARCHAR(50))
BEGIN
	SELECT 
    f.film_id,
    f.title,
    c.category_id,
    c.name
FROM
    sakila.film AS f
INNER JOIN
	sakila.film_category AS fc ON f.film_id = fc.film_id
INNER JOIN
	sakila.category AS c ON fc.category_id = c.category_id
WHERE c.name = categoria;
END $$
DELIMITER ;

CALL achar_filme_por_categoria('Action');


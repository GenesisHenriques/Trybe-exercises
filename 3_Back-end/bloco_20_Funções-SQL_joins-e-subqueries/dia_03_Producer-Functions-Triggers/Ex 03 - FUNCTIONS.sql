-- 3 Crie uma function que receba uma determinada categoria de filme
-- em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade
-- total de filmes registrados nessa categoria.

USE sakila;

DELIMITER $$
CREATE FUNCTION retorna_quantidade_total_de_filmes_por_categoria(categoria VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN DECLARE quantidade_filmes INT;
SELECT
    COUNT(*) AS `Quantidade_filmes`
FROM
    sakila.category AS c
INNER JOIN
	sakila.film_category AS fc ON c.category_id = fc.category_id
INNER JOIN
	sakila.film AS f ON fc.film_id = f.film_id
WHERE c.name = categoria
INTO quantidade_filmes;
RETURN quantidade_filmes;
END $$
DELIMITER ;

SELECT retorna_quantidade_total_de_filmes_por_categoria('Horror');



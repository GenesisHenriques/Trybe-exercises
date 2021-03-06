-- Exercicios assincronos sobre - Funções de agregaçao

-- 1 Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
-- A duração mínima dos filmes como 'Duração Mínima';
-- A duração máxima dos filmes como 'Duração Máxima';
-- A soma de todas as durações como 'Tempo de Exibição Total';
-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT * FROM sakila.film;

SELECT AVG(length) AS 'Média de duração',
	   MIN(length) AS 'Duração mínima',
	   MAX(length) AS 'Duração máxima',
	   SUM(length) AS 'Tempo de exebição total',
	   COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;

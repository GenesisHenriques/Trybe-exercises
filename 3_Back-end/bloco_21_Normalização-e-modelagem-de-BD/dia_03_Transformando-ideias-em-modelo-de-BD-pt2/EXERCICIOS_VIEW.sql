-- Exercicios do dia 21.3

-- 1 Crie uma view chamada film_with_categories utilizando as tabelas
-- category , film_category e film do banco de dados sakila . Essa view
-- deve exibir o título do filme, o id da categoria e o nome da categoria,
-- conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

USE sakila;

CREATE VIEW film_with_categories AS
SELECT 
    f.title AS `Titulo`,
    c.category_id AS `Categoria`,
    c.name AS `Nome_categoria`
FROM
    sakila.film AS f
INNER JOIN
	sakila.film_category AS fc ON f.film_id = fc.film_id
INNER JOIN
	sakila.category AS c ON fc.category_id = c.category_id
ORDER BY `Titulo`;

SELECT * FROM film_with_categories;


-- 2 Crie uma view chamada film_info utilizando as tabelas actor ,
-- film_actor e film do banco de dados sakila . Sua view deve exibir
-- o actor_id , o nome completo do ator ou da atriz em uma coluna com
-- o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados
-- pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW film_info AS
SELECT 
    a.actor_id AS `ID_autor`,
    CONCAT(a.first_name, ' ', a.last_name) AS `Nome`,
    f.title AS `Titulo`
FROM
    sakila.actor AS a
INNER JOIN
	sakila.film_actor AS fc ON a.actor_id = fc.actor_id
INNER JOIN
	sakila.film AS f ON fc.film_id = f.film_id
ORDER BY `Nome`;

SELECT * FROM film_info;


-- 3 Crie uma view chamada address_info que faça uso das tabelas address e
-- city do banco de dados sakila . Sua view deve exibir o address_id ,
-- o address , o district , o city_id e a city . Os resultados devem ser
-- ordenados pelo nome das cidades. Use a imagem abaixo como referência.

CREATE VIEW address_info AS
    SELECT 
        a.address_id, a.address, a.district, a.city_id, c.city
    FROM
        sakila.address a
            INNER JOIN
        sakila.city c ON c.city_id = a.city_id
    ORDER BY c.city;
    
-- 4 Exercício 4: Crie uma view chamada movies_languages , usando as tabelas
-- film e language do banco de dados sakila . Sua view deve exibir o título
-- do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

CREATE VIEW movies_languages AS
    SELECT 
        f.title, f.language_id, l.name AS language
    FROM
        sakila.film f
            INNER JOIN
        sakila.language l ON l.language_id = f.language_id;


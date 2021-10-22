-- Exercicios assincronos sobre - SELF JOIN

-- 1 Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT * FROM sakila.film;

SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- 2 Exiba o título e a duração de empréstimo dos filmes que possuem
-- a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

SELECT * FROM sakila.film;

SELECT 
    A.title, A.rental_duration, B.title, B.rental_duration
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

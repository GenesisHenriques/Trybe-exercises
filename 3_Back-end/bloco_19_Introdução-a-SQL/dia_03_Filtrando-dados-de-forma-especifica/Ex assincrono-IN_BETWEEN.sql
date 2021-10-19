SELECT first_name, last_name FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;

SELECT COUNT(*) Pagamentos FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005/05/01' AND '2005/08/01';

SELECT title, release_year, length, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;


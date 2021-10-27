-- 1 Utilizando a tabela sakila.payment , monte uma function que
-- retorna a quantidade total de pagamentos feitos até o momento
-- por um determinado customer_id .

USE sakila;

DELIMITER $$
CREATE FUNCTION pegue_total_de_pagamentos(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_pagamentos INT;
    SELECT
		COUNT(*) AS `quantidade_total_pagamentos`
	FROM sakila.payment
    WHERE customer_id = id
    INTO total_pagamentos;
    RETURN total_pagamentos;
END $$
DELIMITER ;

SELECT pegue_total_de_pagamentos(7);


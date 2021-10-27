-- 3 Monte uma procedure que receba o email de um cliente como parâmetro de
-- entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.


USE sakila;

DELIMITER $$
CREATE PROCEDURE verifica_se_o_cliente_e_ativo(IN email VARCHAR(100), OUT resultado BOOL)
BEGIN
	SELECT 
    IF (active = 1, TRUE, FALSE) AS `Ativa?`
FROM
    sakila.customer AS e
WHERE e.email = email
INTO resultado;
END $$
DELIMITER ;

SELECT @activeStatus;
CALL verifica_se_o_cliente_e_ativo('MARY.SMITH@sakilacustomer.org', @activeStatus);
SELECT @activeStatus;


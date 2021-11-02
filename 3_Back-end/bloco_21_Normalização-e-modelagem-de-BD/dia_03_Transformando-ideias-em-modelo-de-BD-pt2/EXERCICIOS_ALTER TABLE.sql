-- Exercicios sobre alter table

-- 1 Escreva uma query SQL para alterar na tabela localtions o nome da coluna
-- street_address para address , mantendo o mesmo tipo e tamanho de dados.

USE hr;

ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(50) NOT NULL;

-- 2 Escreva uma query SQL para alterar o nome da coluna region_name para region,
-- mantendo o mesmo tipo e tamanho de dados.

USE hr;
ALTER TABLE regions CHANGE COLUMN region_name region VARCHAR(25) NOT NULL;

-- 3 Escreva uma query SQL para alterar o nome da coluna country_name para country ,
--  mantendo o mesmo tipo e tamanho de dados.

USE hr;
ALTER TABLE countries CHANGE COLUMN country_name country VARCHAR(50) NOT NULL;

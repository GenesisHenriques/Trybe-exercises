-- 1 Crie um TRIGGER que, a cada nova inserção feita na tabela carros ,
-- defina o valor da coluna data_atualizacao para o momento do ocorrido,
-- a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .


USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER apos_inserir_carro
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÂO',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;


-- 2 Crie um TRIGGER que, a cada atualização feita na tabela carros ,
-- defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER apos_atualizar_carro
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÂO';
END $$
DELIMITER ;


-- 3 Crie um TRIGGER que, a cada exclusão feita na tabela carros ,
-- envie para a tabela log_operacoes as informações do tipo_operacao
-- como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER apos_deletar_carro
BEFORE DELETE ON carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÂO', NOW());
END $$
DELIMITER ;
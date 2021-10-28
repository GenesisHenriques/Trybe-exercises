CREATE DATABASE IF NOT EXISTS Funcionarios;
USE Funcionarios;

CREATE TABLE Setor (
	Setor_id INT PRIMARY KEY AUTO_INCREMENT,
    Setor VARCHAR(50) NOT NULL
);

INSERT INTO Setor(Setor_id, Setor)
VALUES (1, 'Administração'), (2, 'Vendas'), (3, 'Operacional'), (4, 'Estratégico');

CREATE TABLE Cliente(
	Cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Sobre_nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    data_cadastro VARCHAR(50) NOT NULL
)engine = InnoDB;

INSERT INTO Cliente(Cliente_id, Nome, Sobre_nome, email, telefone, data_cadastro)
VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(32)98552-1445', '2020-05-05 08:50:25'),
	  (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
      (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
      (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE Cliente_setor (
	Setor_id INT NOT NULL,
    Cliente_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(Setor_id, Cliente_id),
    FOREIGN KEY(Setor_id) REFERENCES Setor(Setor_id),
    FOREIGN KEY(Cliente_id) REFERENCES Cliente(Cliente_id)
);

INSERT INTO Cliente_setor(Setor_id, Cliente_idSetor)
VALUES (12, 1), (12, 2), (13, 3), (14, 4), (14, 2), (15, 5);

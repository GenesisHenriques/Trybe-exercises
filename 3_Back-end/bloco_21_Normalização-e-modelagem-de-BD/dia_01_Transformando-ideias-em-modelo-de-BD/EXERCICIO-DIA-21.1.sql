CREATE DATABASE IF NOT EXISTS Zologico;

CREATE TABLE Animal(
	Animal_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Especie VARCHAR(50) NOT NULL,
    Sexo VARCHAR(10) NOT NULL,
    Idade INT NOT NULL,
    Localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE Gerente(
	Gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL
);

CREATE TABLE Cuidador(
	Cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Gerente_id INT NOT NULL,
    -- CONSTRAINT PRIMARY KEY(Gerente_id), - Isso só é usado em tabelas de conexão
    FOREIGN KEY(Gerente_id) REFERENCES Gerente(Gerente_id)
);

CREATE TABLE Cuidador_animal(
    Cuidador_id INT NOT NULL,
    Animal_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(Cuidador_id, Animal_id),
    FOREIGN KEY(Cuidador_id) REFERENCES Cuidador(Cuidador_id),
    FOREIGN KEY(Animal_id) REFERENCES Animal(Animal_id)
);

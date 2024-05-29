CREATE DATABASE pjIndividual;
USE pjIndividual;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    dtNasc DATE
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    casas VARCHAR(45), 
    respostas VARCHAR(45)
);

CREATE TABLE resultadoQuiz (
    idResultado INT, 
    fkUsuario INT, 
    fkQuiz INT, 
    resultado VARCHAR(45),
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario)
        REFERENCES usuario(idUsuario),
    CONSTRAINT fkQuiz FOREIGN KEY (fkQuiz)
        REFERENCES quiz(idQuiz), 
    CONSTRAINT pkTripla PRIMARY KEY (idResultado, fkUsuario, fkQuiz)
);

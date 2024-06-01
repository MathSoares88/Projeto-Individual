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


CREATE TABLE resultados_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT,
    casa VARCHAR(50),
    FOREIGN KEY (usuarioId) REFERENCES usuario(idUsuario)
);

CREATE TABLE mensagens(
 idMensagem INT PRIMARY KEY AUTO_INCREMENT,
    usuarioId INT,
    mensagem TEXT,
    dataMensagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuario(idUsuario)
);

CREATE TABLE patronos (
    idPatrono INT PRIMARY KEY AUTO_INCREMENT,
    usuarioId INT,
    patronoNome VARCHAR(100),
    patronoImagem VARCHAR(255),
    dataPatrono TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuario(idUsuario)
);
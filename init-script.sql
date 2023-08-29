CREATE DATABASE IF NOT EXISTS rooto;
USE rooto;
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    access_token varchar(160) NOT NULL,
    PRIMARY KEY (id));
INSERT INTO users (username, access_token)
    VALUES 
        ('spaceghost', 'CHAVE_MEGASECRETA_Gmf5bHLHgAkSv4TuL7mhxeknRoVLdBk2fN5iJVrtPys4uCjy'),
        ('zorak', 'CHAVE_MEGASECRETA_QsriGQQbNsLykkfdci9TVutzbT9pfGZpSRMQ6FuhQNeYnZw6'),
        ('brak', 'CHAVE_MEGASECRETA_w47U8a8xgTVxwdKStaNTyrvfKno8hAo4Puri4J3jKF6zLLmJ');

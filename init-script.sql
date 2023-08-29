DROP DATABASE IF EXISTS rooto;
CREATE DATABASE IF NOT EXISTS rooto;
USE rooto;
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    access_token varchar(160) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    PRIMARY KEY (id));
INSERT INTO users (username, access_token, created_at)
    VALUES
        ('spaceghost', 'CHAVE_MEGASECRETA_Gmf5bHLHgAkSv4TuL7mhxeknRoVLdBk2fN5iJVrtPys4uCjy', UTC_TIMESTAMP()),
        ('zorak', 'CHAVE_MEGASECRETA_QsriGQQbNsLykkfdci9TVutzbT9pfGZpSRMQ6FuhQNeYnZw6', UTC_TIMESTAMP()),
        ('brak', 'CHAVE_MEGASECRETA_w47U8a8xgTVxwdKStaNTyrvfKno8hAo4Puri4J3jKF6zLLmJ',UTC_TIMESTAMP()),
        ('ttavares', 'CHAVE_MEGASECRETA_w47U8a8xgTVxwdKStaNTyrvfKno8hAo4Puri4J3jKF6zLLmJ',UTC_TIMESTAMP()),
        ('cavelar', 'CHAVE_MEGASECRETA_w47U8a8xgTVxwdKStaNTyrvfKno8hAo4Puri4J3jKF6zLLmJ',UTC_TIMESTAMP()),
        ('kid', 'CHAVE_MEGASECRETA_QsriGQQbNsLykkfdci9TVutzbT9pfGZpSRMQ6FuhQNeYnZw6', UTC_TIMESTAMP()),
        ('pedrinho', 'CHAVE_MEGASECRETA_Qsdkdfbfdod0Lykkfdci9TVutzbT9pfGZpSRMQ6FuhQNeYnZw6', UTC_TIMESTAMP())
        ;

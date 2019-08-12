DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    user_email VARCHAR(50),
    user_first_name VARCHAR(25),
    user_last_name VARCHAR(25),
    user_pw TEXT
);
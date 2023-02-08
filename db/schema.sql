DROP DATABASE IF EXISTS raise_dev;
CREATE DATABASE raise_dev;
\c raise_dev;

DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    body VARCHAR(1000) NOT NULL,
    name VARCHAR(30) NOT NULL,
    todays_date timestamp,
    topic TEXT,
    child_age TEXT
);


DROP TABLE IF EXISTS answers; 
CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    response VARCHAR(1000) NOT NULL,
    todays_date timestamp,
    provider_type int,
    question_id int
);

-- DROP TABLE IF EXISTS profiles;
-- CREATE TABLE profiles (
--     photo IMG TEXT,
--     user_name (VARCHAR(20))
--     bio TEXT NOT NULL
-- );

--  DROP TABLE IF EXISTS prompt;
--  CREATE TABLE prompt (

--  )
DROP DATABASE IF EXISTS raise_dev;
CREATE DATABASE raise_dev;


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
    provider_type TEXT,
    question_id int
);


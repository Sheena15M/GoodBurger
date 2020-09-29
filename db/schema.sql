CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id int Not Null AUTO_INCREMENT,
    burger_name varchar (255) Not Null, 
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
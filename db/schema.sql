CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE Burgers
(
    id int Not Null AUTO_INCREMENT,
    burger_name varchar (255) Not Null, 
    consume Boolean DEFAULT false,
    Primary key (id)
);
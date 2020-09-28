Create Database burger_db;
Use burger_db;

Create Table Burgers
(
    id int Not Null AUTO_INCREMENT,
    name varchar (255) Not Null, 
    consume Boolean DEFAULT false,
    Primary key (id)
);
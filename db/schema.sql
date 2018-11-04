drop database burger_db if exists;
create database burger_db;

use burger_db;

create table burgers (
  id int not NULL auto_increment,
  burger_name VARCHAR (255) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

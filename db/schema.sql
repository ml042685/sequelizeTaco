-- Create database 
CREATE DATABASE tacos_db;
USE tacos_db;

-- Create table
CREATE TABLE IF NOT EXISTS  tacos
(
	id int(10) NOT NULL AUTO_INCREMENT,
	taco_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	dt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
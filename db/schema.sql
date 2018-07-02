CREATE DATABASE ccorsi_my_library_app;
USE ccorsi_my_library_app;

CREATE TABLE authors (
	id INTEGER NOT NULL AUTO_INCREMENT,
	author_name VARCHAR(255) NOT NULL,
	nationality VARCHAR(255),
	primary key (id)
);

CREATE TABLE saved_works (
	id INTEGER NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	author_id INTEGER,
	genre VARCHAR(255) DEFAULT NULL,
	notes TEXT DEFAULT NULL,
	keyword VARCHAR(255) DEFAULT NULL,
	primary key (id),
	foreign key (author_id)
		references authors(id)
		on delete cascade
);


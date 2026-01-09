CREATE TABLE `folders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`parent_id` int,
	CONSTRAINT `folders_id` PRIMARY KEY(`id`)
);

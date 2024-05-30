CREATE DATABASE robo_project_auth;

USE robo_project_auth;

CREATE TABLE robo_project_auth.users
( user_id INT(11) NOT NULL AUTO_INCREMENT,
	username VARCHAR(25) NOT NULL,
	PASSWORD VARCHAR(30) NOT NULL,
	is_verified TINYINT(1) DEFAULT 0,
	PRIMARY KEY (`user_id`)
);

SELECT * FROM robo_project_auth.users;

ALTER TABLE robo_project_auth.users
MODIFY PASSWORD VARCHAR(100) NOT NULL;

ALTER TABLE robo_project_auth.users
MODIFY username VARCHAR(50) UNIQUE NOT NULL;

INSERT INTO `robo_project_auth`.`users` VALUES 
	(1, 'test1', '12332432', 0),
	(2, 'est2', '231343', 0),
	(3, 'etest3', '213214', 0),
	(4, 'werwer', 'weoruewoiruwoewoeurowiu23@#4324234', 0),
	(5, 'blahblahblan', '9098uiweuroweiuow', 0),
	(6, 'sewerouwei', '9080989238432', 0);
	
TRUNCATE TABLE robo_project_auth.users;

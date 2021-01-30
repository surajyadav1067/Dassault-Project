CREATE database IF NOT EXISTS PillReminderApp;
USE `PillReminderApp`;
 
CREATE TABLE IF NOT EXISTS User (
Id INT AUTO_INCREMENT PRIMARY KEY,
UserName VARCHAR(30) NOT NULL UNIQUE,
UserPassword VARCHAR(30) NOT NULL
);

INSERT INTO User (Id, UserName, UserPassword) 
VALUES 
(DEFAULT, "amitarora", "@m!t1234"),
(DEFAULT, "binodbasu", "b!n0d555"),
(DEFAULT, "camiejr", "c@m!e987"),
(DEFAULT, "dishadd", "d!5h@3"),
(DEFAULT, "iesha", "e5h@001");
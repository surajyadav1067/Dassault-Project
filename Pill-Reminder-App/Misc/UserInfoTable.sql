CREATE database IF NOT EXISTS PillReminderApp;
USE `PillReminderApp`;
 
CREATE TABLE IF NOT EXISTS UserInfo (
Id INT AUTO_INCREMENT PRIMARY KEY,
FirstName VARCHAR(20) NOT NULL,
MiddleName VARCHAR(20),
LastName VARCHAR(20),
DateOfBirth DATE NOT NULL,
Gender ENUM('Male','Female','Other') NOT NULL DEFAULT "Other",
ContactNumber BIGINT NOT NULL,
EmailId VARCHAR(60)
);

INSERT INTO UserInfo (Id, FirstName, MiddleName, LastName, DateOfBirth, Gender, ContactNumber, EmailId) 
VALUES 
(DEFAULT, "Amit", "Abhijeet", "Arora", "1996-01-02", "Male", 9988776655, "amit.arora@email.com"),
(DEFAULT, "Binod", "B", "Basu", "1995-06-06", "Male", 9998887776, "binodbasu@email.com"),
(DEFAULT, "Cameroon Jr", "Cameroon", "Clarke", "1997-08-08", "Male", 9876543210, "camiejr@email.com"),
(DEFAULT, "Disha", "Dinesh", "Deshpande", "1998-05-03", "Female", 8866442200, "disha98@email.com"),
(DEFAULT, "Esha", "Guru", "Ingale", "1997-12-20", "Female", 9977553311, "iesha@email.com");
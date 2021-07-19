create database if not exists xyz; 
use xyz; 

create table if not exists Suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    CompanyName varchar(50) not null,
    Address varchar(50),
    Phone varchar(50),
    createdAt datetime,
    updatedAt datetime
)ENGINE=INNODB; 

create table if not exists StatusProducts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Status varchar(12),
    createdAt datetime,
    updatedAt datetime
)ENGINE=INNODB; 

create table if not exists Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName varchar(50),
    Description text,
    createdAt datetime,
    updatedAt datetime
)ENGINE=INNODB; 

create table if not exists Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    CustomerName varchar(50),
    CustomerLastname varchar(50),
    Email varchar(100),
    Phone varchar(50),
    createdAt datetime,
    updatedAt datetime
)ENGINE=INNODB;

create table if not exists Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeName varchar(50),
    EmployeeLastname varchar(50),
    Email varchar(100),
    Phone varchar(50),
    Area varchar(20),
    createdAt datetime,
    updatedAt datetime
)ENGINE=INNODB;

create table if not exists Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ProductName varchar(50) not null,
    QuantityPerUnit int(11),
    UnitPrice decimal(10,2),
    UnitInStock int(5),
    UnitsOnOrder int(5),
    StatusID int(11),
    SupplierID INT(11) not null,
    CategoryID INT(11) not null,
    createdAt datetime,
    updatedAt datetime,
    FOREIGN KEY (StatusID) REFERENCES StatusProducts(id),
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(id),
    FOREIGN KEY (CategoryID) REFERENCES Categories(id)
)ENGINE=INNODB; 

create table if not exists Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    OrderDate date, 
    RequiredDate date,
    ShippedDate date,
    CustomerID int(11) not null,
    EmployeeID int (11) not null,
    createdAt datetime,
    updatedAt datetime,
    FOREIGN KEY (CustomerID) REFERENCES Customers(id),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(id)
)ENGINE=INNODB; 

create table if not exists OrderDetail (
    OrderID int(11),
    ProductID int(11),
    UnitPrice decimal(10,2),
    Quantity int(11),
    Discound decimal(10,2),
    createdAt datetime,
    updatedAt datetime,
    FOREIGN KEY (OrderID) REFERENCES Orders(id),
    FOREIGN KEY (ProductID) REFERENCES Products(id)
)ENGINE=INNODB; 


create table if not exists ProductSurvie (
    CustomerID int(11),
    ProductID int(11),
    Survie int(1),
    createdAt datetime,
    updatedAt datetime,
    FOREIGN KEY (CustomerID) REFERENCES Customers(id),
    FOREIGN KEY (ProductID) REFERENCES Products(id)
)ENGINE=INNODB;



INSERT INTO Suppliers (CompanyName, Address, Phone) values ("Mark Jack", "Calle 123, avenida felicidad", "+23 23234344");
INSERT INTO Suppliers (CompanyName, Address, Phone) values ("Inversiones JP", "Calle 321, tristeza", "+23 02354344");
INSERT INTO Suppliers (CompanyName, Address, Phone) values ("Fritos el gordo", "avenida libertador", "");
INSERT INTO Suppliers (CompanyName, Address, Phone) values ("SLM", "Caracas", "23234344");
INSERT INTO Suppliers (CompanyName, Address, Phone) values ("Sean Jhon", "NY", "+01 23234344");

INSERT INTO StatusProducts (Status) values ("ACTIVO");
INSERT INTO StatusProducts (Status) values ("INACTIVO");

INSERT INTO Categories (CategoryName, Description) values ("COCINA", "articulos de cocina");
INSERT INTO Categories (CategoryName, Description) values ("ELECTRODOMESTICOS", "articulos electricos");
INSERT INTO Categories (CategoryName, Description) values ("SALA", "articulos de sala");

INSERT INTO Customers (CustomerName, CustomerLastname, Email, Phone) values ("Mike", "Gonzales", "mike@correo.co", "+23 02354344");
INSERT INTO Customers (CustomerName, CustomerLastname, Email, Phone) values ("Miguel", "Gonzales", "mike@correo.co", "");
INSERT INTO Customers (CustomerName, CustomerLastname, Email, Phone) values ("Maria", "Gonzales", "mike@correo.co", "02354344");
INSERT INTO Customers (CustomerName, CustomerLastname, Email, Phone) values ("Michael", "rojas", "rojas@correo.co", "+23 02354344");
INSERT INTO Customers (CustomerName, CustomerLastname, Email, Phone) values ("Manuela", "Gonzales", "manuelita@correo.co", "");

INSERT INTO Employees (EmployeeName, EmployeeLastname, Email, Phone, Area) values ("carmen", "martinez", "empleado1@correo.co", "2132435","BODEGA");
INSERT INTO Employees (EmployeeName, EmployeeLastname, Email, Phone, Area) values ("Manuela", "rojas", "empleado2@correo.co", "5464574","BODEGA");
INSERT INTO Employees (EmployeeName, EmployeeLastname, Email, Phone, Area) values ("patricia", "Gonzales", "empleado3@correo.co", "1231232","BODEGA");
INSERT INTO Employees (EmployeeName, EmployeeLastname, Email, Phone, Area) values ("Manuel", "garizabalo", "empleado4@correo.co", "454657","BODEGA");
INSERT INTO Employees (EmployeeName, EmployeeLastname, Email, Phone, Area) values ("carlos", "Gonzales", "empleado5@correo.co", "876879","BODEGA");
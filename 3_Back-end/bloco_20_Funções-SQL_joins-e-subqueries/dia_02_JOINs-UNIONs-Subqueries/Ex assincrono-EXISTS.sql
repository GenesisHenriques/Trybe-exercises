-- Exercicios assincronos sobre - EXISTS

-- 1 Usando o EXISTS na tabela books_lent e books , exiba
-- o id e título dos livros que ainda não foram emprestados.

SELECT id, title FROM hotel.Books AS b
WHERE NOT EXISTS(
	SELECT * FROM hotel.Books_Lent
	WHERE b.Id = Book_id);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e
-- título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

SELECT id, title FROM hotel.Books AS b
WHERE EXISTS(
	SELECT * FROM hotel.Books_Lent
	WHERE b.Id = Book_id AND Title LIKE '%lost%');
    
-- 2 Usando a tabela carsales e customers , exiba apenas o nome
-- dos clientes que ainda não compraram um carro.

SELECT Name FROM hotel.Customers AS C
	WHERE EXISTS(
    SELECT * FROM hotel.CarSales
    WHERE C.CustomerID = CarSales.CustomerID
    );
    
-- 4 Usando o comando EXISTS em conjunto com JOIN e as tabelas cars ,
-- customers e carsales , exiba o nome do cliente e o modelo do carro de
-- todos os clientes que fizeram compras de carros.

SELECT Cus.Name, Car.Name FROM hotel.Customers AS Cus
	INNER JOIN hotel.Cars AS Car
    WHERE EXISTS(
		SELECT * FROM hotel.CarSales
        WHERE CustomerID = Cus.CustomerId AND Car.id = CarID
    );



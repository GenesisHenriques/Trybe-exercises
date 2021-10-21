USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 10 AS A, 20 AS B, 30 AS C;

SELECT 10 + 20;

SELECT (-1 + 4) * (-1 + 4);

SELECT * FROM Scientists;

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de trabalho' FROM Scientists.Projects;

SELECT * FROM Scientists.Scientists ORDER BY Name DESC;

SELECT CONCAT(Name, ' precisou de ', Hours, ' para ser concluído') FROM Scientists.Projects;

SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC  LIMIT 3;

SELECT DISTINCT Project FROM Scientists.AssignedTo;

SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;

SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;

SELECT CONCAT('Existe ',COUNT(name),' cientistas na tabela Scientists.') AS Resultado FROM Scientists.Projects;
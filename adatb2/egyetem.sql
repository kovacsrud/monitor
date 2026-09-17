CREATE DATABASE IF NOT EXISTS EgyetemiDemo;
USE EgyetemiDemo;

-- 1. Részlegek (Department)
CREATE TABLE reszlegek (
    id INT PRIMARY KEY,
    nev VARCHAR(50)
);

-- 2. Oktatók (Instructors) - 1:N kapcsolat a részleggel
CREATE TABLE oktatok (
    id INT PRIMARY KEY,
    nev VARCHAR(50),
    reszleg_id INT
);

-- 3. Kurzusok (Courses) - 1:N kapcsolat az oktatóval
CREATE TABLE kurzusok (
    id INT PRIMARY KEY,
    cim VARCHAR(100),
    oktato_id INT
);

-- 4. Diákok (Students)
CREATE TABLE diakok (
    id INT PRIMARY KEY,
    nev VARCHAR(50)
);

-- 5. Felvételek (Enrollments) - M:N kapcsolótábla
CREATE TABLE felvetelek (
    diak_id INT,
    kurzus_id INT,
    erdemjegy INT,
    PRIMARY KEY (diak_id, kurzus_id)
);

-- ADATOK FELTÖLTÉSE
INSERT INTO reszlegek VALUES (1, 'Informatika'), (2, 'Matematika'), (3, 'Fizika');

-- 'Kovács János' nincs részleghez rendelve (NULL)
INSERT INTO oktatok VALUES (101, 'Dr. Kiss László', 1), (102, 'Dr. Szabó Erika', 2), (103, 'Kovács János', NULL);

-- 'Kvantumfizika' oktató nélkül (NULL)
INSERT INTO kurzusok VALUES (501, 'Adatbázisok', 101), (502, 'Analízis', 102), (503, 'Kvantumfizika', NULL);

INSERT INTO diakok VALUES (1, 'Nagy Alíz'), (2, 'Tóth Bence'), (3, 'Varga Csilla');

-- Csilla nem vett fel kurzust, Bence olyat vett fel ami nincs a kurzusok közt (hiba szimuláció)
INSERT INTO felvetelek VALUES (1, 501, 5), (1, 502, 4), (2, 501, 3), (2, 999, 1);

--------------------------------------------------------------
Kik azok az oktatók, akiknek van részlegük, és mi az?

SELECT o.nev AS Oktato, r.nev AS Reszleg
FROM oktatok o
INNER JOIN reszlegek r ON o.reszleg_id = r.id;

----------------------------------------
Listázd az összes oktatót és a részlegüket (ha van)!


SELECT o.nev AS Oktato, r.nev AS Reszleg
FROM oktatok o
LEFT JOIN reszlegek r ON o.reszleg_id = r.id;

-----------------------------------------

SELECT o.nev AS Oktato, r.nev AS Reszleg
FROM oktatok o
RIGHT JOIN reszlegek r ON o.reszleg_id = r.id;

-----------------------------------------------
Diákok, a kurzusaik és az oktatók nevei:

SELECT d.nev AS Diak, k.cim AS Kurzus, o.nev AS Oktato
FROM diakok d
JOIN felvetelek f ON d.id = f.diak_id
JOIN kurzusok k ON f.kurzus_id = k.id
LEFT JOIN oktatok o ON k.oktato_id = o.id;

--------------------------------------------

Minden oktató és minden részleg, akkor is ha nincs közük egymáshoz:

SELECT o.nev AS Oktato, r.nev AS Reszleg FROM oktatok o LEFT JOIN reszlegek r ON o.reszleg_id = r.id
UNION
SELECT o.nev AS Oktato, r.nev AS Reszleg FROM oktatok o RIGHT JOIN reszlegek r ON o.reszleg_id = r.id;


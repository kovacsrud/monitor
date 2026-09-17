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


INSERT INTO oktatok VALUES (101, 'Dr. Kiss László', 1), (102, 'Dr. Szabó Erika', 2), (103, 'Kovács János', NULL);


INSERT INTO kurzusok VALUES (501, 'Adatbázisok', 101), (502, 'Analízis', 102), (503, 'Kvantumfizika', NULL);

INSERT INTO diakok VALUES (1, 'Nagy Alíz'), (2, 'Tóth Bence'), (3, 'Varga Csilla');


INSERT INTO felvetelek VALUES (1, 501, 5), (1, 502, 4), (2, 501, 3), (2, 999, 1);



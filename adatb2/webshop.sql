DROP DATABASE IF EXISTS gyakorlo_webshop;
CREATE DATABASE gyakorlo_webshop CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE gyakorlo_webshop;

-- 1. Kategóriák tábla
CREATE TABLE kategoriak (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(50) NOT NULL
);

-- 2. Termékek tábla
CREATE TABLE termekek (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(100) NOT NULL,
    kategoria_id INT,
    ar INT NOT NULL, -- Ár forintban
    keszlet INT NOT NULL DEFAULT 0,
    FOREIGN KEY (kategoria_id) REFERENCES kategoriak(id)
);

-- 3. Vásárlók tábla
CREATE TABLE vasarlok (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    varos VARCHAR(50) NOT NULL,
    regisztracio_datuma DATE NOT NULL
);

-- 4. Rendelések tábla
CREATE TABLE rendelesek (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vasarlo_id INT NOT NULL,
    rendeles_datuma DATETIME NOT NULL,
    statusz ENUM('Folyamatban', 'Kiszállítva', 'Törölve') NOT NULL,
    FOREIGN KEY (vasarlo_id) REFERENCES vasarlok(id)
);

-- 5. Rendelés tételek (Kapcsolótábla a rendelések és termékek között)
CREATE TABLE rendeles_tetelek (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rendeles_id INT NOT NULL,
    termek_id INT NOT NULL,
    mennyiseg INT NOT NULL,
    egysegar INT NOT NULL, -- Az ár a vásárlás pillanatában
    FOREIGN KEY (rendeles_id) REFERENCES rendelesek(id),
    FOREIGN KEY (termek_id) REFERENCES termekek(id)
);

-- ADATOK FELTÖLTÉSE --

INSERT INTO kategoriak (nev) VALUES 
('Elektronika'), ('Könyv'), ('Ruházat'), ('Otthon'), ('Sport'); -- A Sport kategóriába nem teszünk terméket (teszteléshez)

INSERT INTO termekek (nev, kategoria_id, ar, keszlet) VALUES 
('Okostelefon X', 1, 150000, 10),
('Laptop Pro', 1, 350000, 5),
('Vezeték nélküli fülhallgató', 1, 25000, 30),
('SQL Alapok könyv', 2, 6500, 50),
('Sci-fi Regény', 2, 4200, 0), -- Nincs készleten
('Férfi Póló (Kék)', 3, 4500, 20),
('Női Farmernadrág', 3, 12000, 15),
('Kávéfőző', 4, 45000, 8),
('Porszívó', 4, 38000, 12),
('Okosóra', 1, 60000, 0); -- Nincs készleten

INSERT INTO vasarlok (nev, email, varos, regisztracio_datuma) VALUES 
('Kovács János', 'janos.kovacs@email.hu', 'Budapest', '2023-01-15'),
('Nagy Éva', 'eva.nagy@email.hu', 'Debrecen', '2023-02-20'),
('Tóth Gábor', 'gabor.toth@email.hu', 'Szeged', '2023-03-10'),
('Szabó Anna', 'anna.szabo@email.hu', 'Budapest', '2023-05-05'),
('Horváth Péter', 'peter.horvath@email.hu', 'Győr', '2023-06-12'),
('Kiss Júlia', 'julia.kiss@email.hu', 'Budapest', '2023-08-01'); -- Ő még nem rendelt semmit

INSERT INTO rendelesek (vasarlo_id, rendeles_datuma, statusz) VALUES 
(1, '2023-02-01 10:30:00', 'Kiszállítva'),
(2, '2023-03-05 14:15:00', 'Kiszállítva'),
(1, '2023-04-10 09:00:00', 'Törölve'),
(3, '2023-05-20 18:45:00', 'Kiszállítva'),
(4, '2023-07-01 11:20:00', 'Folyamatban'),
(1, '2023-08-15 16:10:00', 'Folyamatban'),
(5, '2023-08-16 12:00:00', 'Kiszállítva');

INSERT INTO rendeles_tetelek (rendeles_id, termek_id, mennyiseg, egysegar) VALUES 
(1, 1, 1, 150000), -- János vett egy telefont
(1, 3, 1, 25000),  -- és egy fülhallgatót
(2, 4, 2, 6500),   -- Éva vett 2 SQL könyvet
(3, 2, 1, 350000), -- János törölt rendelése (Laptop)
(4, 6, 3, 4500),   -- Gábor vett 3 pólót
(4, 7, 1, 12000),  -- és egy farmert
(5, 8, 1, 45000),  -- Anna vett egy kávéfőzőt
(6, 4, 1, 6500),   -- János vett egy SQL könyvet
(7, 3, 2, 24000);  -- Péter vett 2 fülhallgatót (akciósan 24000-ért)
SELECT * FROM `konyvek` LEFT JOIN `szerzok` ON konyvek.szerzo_id=szerzok.szerzo_id
UNION
SELECT * FROM `konyvek` RIGHT JOIN `szerzok` ON konyvek.szerzo_id=szerzok.szerzo_id
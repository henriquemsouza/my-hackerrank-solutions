-- Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.

-- Input Format

-- The STATION table is described as follows:

SELECT DISTINCT city
FROM   station
WHERE  city NOT REGEXP '[aeiou]$' 
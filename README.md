Dit project is ontwikkeld door Rob Perdok in naam van CyberSecurity Noord-Nederland. Het behoort bij de applicatie WeerbaarheidsTool MKB die te vinden is in een aparte repository. De server beantwoord de requests van de React Native client.

Installatie:

Stap 1: Clone de code met onderstaand commando:
git clone https://github.com/rob997/WeerbaarheidsToolServer.git

Stap 2: Navigeer in de geclonede folder:
cd WeerbaarheidsToolServer

Stap 3: Genereer de database met het script dat bij de code is inbegrepen.
mysql -uroot -p mydb < MySqlCreateScript.txt

Stap 4:
Maak een gebruiker aan binnen MySQL voor het communiceren met de database en geef deze rechten:
mysql -u root -p
mysql> CREATE USER 'react'@'localhost' IDENTIFIED BY 'password'
mysql> GRANT SELECT, INSERT ON mydb.\* TO 'react'@'localhost'

Stap 5: Controleer of het bestand config.js de juiste gegevens bevat. Zo niet, verander deze.
vim config.js

Stap 6: Start de server met het commando:
node app.js

Dit project is ontwikkeld door Rob Perdok in naam van CyberSecurity Noord-Nederland. Het behoort bij de applicatie WeerbaarheidsTool MKB die te vinden is in een aparte repository. De server beantwoord de requests van de React Native client.

## Automatische Installatie:

Stap 1: Clone de respository met onderstaand commando:

```
git clone https://github.com/rob997/WeerbaarheidsToolServer.git
```

Stap 2: navigeer naar de map en start de applicatie:

```
cd WeerbaarheidsToolServer
./install.sh
```

## Handmatige Installatie:

Stap 1: Installeer de dependencies:
sudo apt update
sudo apt upgrade
sudo apt install mysql
sudo apt install nodejs

Stap 2: Clone de repository met onderstaand commando:

```
git clone https://github.com/rob997/WeerbaarheidsToolServer.git
```

Stap 3: Navigeer in de geclonede folder:

```
cd WeerbaarheidsToolServer
```

Stap 4: Genereer de database met het script dat bij de code is inbegrepen.

```
mysql -u root -p mydb < MySqlCreateScript.txt
```

Stap 5: Maak een gebruiker aan binnen MySQL voor het communiceren met de database en geef deze rechten:

```
mysql -u root -p
mysql> CREATE USER 'react'@'localhost' IDENTIFIED BY 'password'
mysql> GRANT SELECT, INSERT ON mydb.\* TO 'react'@'localhost'
```

Stap 6: Controleer of het bestand config.js de juiste gegevens bevat. Zo niet, verander deze.

```
vim config.js
```

Stap 7: Start de server met het commando:

```
node app.js
```

De applicatie zal nu luisteren naar requests van de React Native applicatie. Vergeet niet het ipadres in de config.js van de React Client te veranderen naar het ipadres van de server.

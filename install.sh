#!/bin/bash
if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi


apt update

apt install -y mysql
apt install -y nodejs

mysql -u root -p mydb < MySqlCreateScript.txt

echo "Enter a valid HaveIBeenPwned API key in config.js"
echo "Run server by typing: node app.js"

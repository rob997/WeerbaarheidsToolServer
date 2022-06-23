#!/bin/bash
if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi


apt update

apt install -y mysql-server
apt install -y nodejs

mysql -uroot < MySqlCreateScript.txt
echo ""
echo "Trying to create database: mydb"

mysql -uroot -e "CREATE USER 'react'@'localhost' IDENTIFIED BY 'Y*s!J5CRPn^Q?3@e'"
mysql -uroot -e "GRANT SELECT, INSERT ON mydb.* TO 'react'@'localhost'"
echo "Trying to create database user: 'react' and granting INSERT, SELECT rights on mydb"

echo ""
echo "ATTENTION:"
echo "Enter a valid HaveIBeenPwned API key in WeerbaarheidsToolServer/config.js"
echo "Run server with command: node app.js"

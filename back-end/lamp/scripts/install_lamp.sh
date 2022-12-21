#!/bin/bash 

set -x


#Actualizamos los repositores

apt-get update 

#Actualizamos los paquetes nuevos

#apt-get upgrade -y

#Actualizamos el servidor web apache

apt-get install apache2 -y

#Instalamos el sistema de gestor de dd

apt-get install mysql-server -y

#Instalamos los módulos de PHP 

apt install php libapache2-mod-php php-mysql -y

#Este paso es opcional 

#Copiamos el archivo phpinfo de PHP

cp ../php/info.php /var/www/html
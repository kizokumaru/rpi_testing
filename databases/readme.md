# MongoDB 
Instalamos la versión de la web de [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

[MongoDB en Raspberry](https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/)

## Install the MongoDB 4.4 GPG key:

    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

## Add the source location for the MongoDB packages:

    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

## Download the package details for the MongoDB packages:

    sudo apt-get update

## Install MongoDB:

    sudo apt-get install -y mongodb-org
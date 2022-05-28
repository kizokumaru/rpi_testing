# MongoDB 
Instalamos la versión de la web de [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

mongodb a traves de docker
docker run --name my-lame-db -d mongo
docker ps

Instalamos docker en el servidor.
sudo apt remove docker-desktop

sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

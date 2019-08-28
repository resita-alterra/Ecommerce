sudo docker stop helloworld
sudo docker rm helloworld
sudo docker rmi resitasriw/helloworld
sudo docker run -d --name helloworld -p 3000:80 resitasriw/helloworld:latest

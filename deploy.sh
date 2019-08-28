docker stop helloworld
docker rm helloworld
docker rmi resitasriw/helloworld
docker run -d --name helloworld -p 3000:80 resitasriw/helloworld:latest

# Endpoint-with-dockerfile

Scholar project runing a Endpoint with Node.js in a Docker container 🐋

## Steps to run the proyect

* Clone the repo:
```bash
git clone https://github.com/MagdielPm/Endpoint-with-dockerfile.git
``` 

* Install the dependencies:
```bash
npm install
``` 

* Build the docker file, but you have to run your docker before to run the next comand: 
```bash
docker build -t node-docker-endpoint .
``` 
* Run the docker container and listen the response in the port: 
```bash
docker run -it -p 9000:300 node-docker-endpoint
``` 
* Go to your browser an listen the next port: 
`localhost:900`

And well done, you should see the response in that port! 🚀

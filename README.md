## What is ScyllaDB?

ScyllaDB is a distributed NoSQL database that is highly compatible with Cassandra. It is written in C++ and offers improved performance and efficiency compared to Cassandra. ScyllaDB provides low-latency and high-throughput data storage and is a popular choice for applications that require real-time data processing.

## Express-Cassandra

Express-Cassandra is a Cassandra ORM/ODM/OGM for Node.js that also supports ScyllaDB. It allows you to work with Cassandra and ScyllaDB databases using object-oriented mapping and provides a decoupled nature, making it compatible with popular Node.js frameworks.

To get started with Express-Cassandra, you can refer to the official documentation .

## Project Setup

Create a new project folder with the following command

```shell
mkdir node_scylla 
cd node_scylla
```

The JWT Authentication Architecture is built with:

- [Node.js](https://nodejs.org/) – a JavaScript run-time scripting language
- [Expressjs](https://expressjs.com/) – serves as a Node.js framework
- [Express-Cassandra](https://express-cassandra.readthedocs.io/en/latest/) – is a Cassandra ORM/ODM/OGM for NodeJS with support for ScyllaDB
- [lodash](https://lodash.com/docs/) – The [Lodash](https://lodash.com/) library exported as Node.js modules.
- [cors](https://www.npmjs.com/package/cors) – To allow Cross-Origin Resource Sharing between the backend and frontend
- [morgan](https://www.npmjs.com/package/morgan) – HTTP request logger middleware for node.js
- [nodemon](https://www.npmjs.com/package/nodemon) – is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### Prerequisites

- Node.js
- Docker
- Docker-compose
- scylladb

### These are the API endpoints we need for this Rest API

| RESOURCE | HTTP METHOD | ROUTE | DESCRIPTION |
| --- | --- | --- | --- |
| books | GET | /api/book/get | returns book information |
| books | POST | /api/book/create | create book information |
| books | POST | /api/book/update | update book information |
| books | POST | /api/book/delete | delete book information |

### Initialize a Node.js Project

The first thing we always do before coding a Node.js project that will require external libraries is to initialize a new project with the following command.

```shell
npm init
```

You will be prompted to provide some answers. If you don’t want to answer questions then use the `-y`flag.

```shell
npm init -y  
```

#### Install the Dependencies

```shell
npm i dotenv express lodash cors express-cassandra 
```

#### Install the devDependencies

```shell
npm i -D morgan nodemon 
```

Now add the dev script to the package.json file

```json
"scripts": {"dev": "nodemon ./src/index.js"}
```

### docker-compose.yml

​ to see docker-compose file click [`here`](https://github.com/azita-abdollahi/nodeScyllaDB/blob/master/docker-compose.yml).

#### Run the App

​ start the docker containers

```shell
#up docker containers and build
docker compose up -d --build  
#see the docker containers  
docker compose ps  
#stop the docker containers  
docker compose down  
#following logs of docker containers  
docker compose logs -f
#run cqlsh for scyllaDB at first
docker compose exec scylla cqlsh -u cassandra -p cassandra
#run cqlsh after change username password and remove default user role.
docker compose exec scylla cqlsh -u username -p password
```

**Note:** By default backend service listens on `TCP/3000` port

**Note:** for running node application

```shell
npm run dev
```

see the images of runnig project from [here](https://github.com/azita-abdollahi/nodeScyllaDB/tree/master/img).

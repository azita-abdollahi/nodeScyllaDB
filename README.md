What is ScyllaDB?

ScyllaDB is a distributed NoSQL database that is highly compatible with Cassandra. It is written in C++ and offers improved performance and efficiency compared to Cassandra. ScyllaDB provides low-latency and high-throughput data storage and is a popular choice for applications that require real-time data processing.

Docker commands:

```shell
    #start service

    docker compose up

    #down service

    docker compose down

    #see logs

    docker compose logs -f

    #run cqlsh for scyllaDB at first

    docker compose exec scylla cqlsh -u cassandra -p cassandra

    #run cqlsh after change username password and remove default user role.

    docker compose exec scylla cqlsh -u username -p password
```

for more detail about remove default user role of scylla and add your user role see [here](https://github.com/azita-abdollahi/nodeScyllaDB/wiki/work-with-cqlsh)
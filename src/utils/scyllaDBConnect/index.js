const scylla = require('express-cassandra');
require('dotenv').config();

const { NODE_IP, DATA_CENTER, SCY_USERNAME, SCY_PASSWORD, KEYSPACE } = process.env;
const cluster = scylla.createClient({
    clientOptions: {
        contactPoints: [NODE_IP],
        localDataCenter: DATA_CENTER,
        protocolOptions: { port: 9042 },
        keyspace: KEYSPACE,
        queryOptions: {consistency: scylla.consistencies.one},
        socketOptions: { readTimeout: 60000 },
        authProvider: new scylla.driver.auth.PlainTextAuthProvider(SCY_USERNAME, SCY_PASSWORD)
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});   
module.exports = cluster;
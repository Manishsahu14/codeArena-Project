const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'act-rabbit-basin-14509.db.redis.io',
        port: 17008
    }
});

module.exports = redisClient;
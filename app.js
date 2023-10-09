const redis = require('redis');
const client = redis.createClient();

(async () => {
    client.on("error", (err) => console.log("Redis client:", err));
    await client.connect();
    const results = {
        'a': 1,
        'b': 2,
    }
    redisClient.set(slots, JSON.stringify(results));
    const cacheResults = await redisClient.get(species);
    console.log(cacheResults, 'cacheResults');
})();
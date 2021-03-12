const redis = require('async-redis');
const client = redis.createClient(6379);

const expirationTime = 300; //second
const movieKeyFormat = 'movie.id=';

const setCache = async (movieId, data) => {
    var key = movieKeyFormat + movieId;
    return await set(key, JSON.stringify(data))
}

const set = async (key, data) => {
    await client.setex(key, expirationTime, data);
}

const getCache = async (movieId) => {
    var key = movieKeyFormat + movieId;
    var data = await get(key);
    return JSON.parse(data);
}

const get = async (key) => {
    return await client.get(key);
}

const clearCache = async (movieId) => {
    var key = movieKeyFormat + movieId;
    return await clear(key);
}

const clear = async (key) => {
    return await client.del(key);
}

module.exports = {
    getCache: getCache,
    setCache: setCache,
    clearCache: clearCache
}
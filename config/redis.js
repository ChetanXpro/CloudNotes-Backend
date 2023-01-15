const redis = require("async-redis");
const logger = require("./logger");

var cacheHostName = "cloudNotes.redis.cache.windows.net";
var cachePassword = "luV9IAhZPosoEKnGHpzBFBl9jwl0iYMapAzCaFLrhEE=";
const redisClient = redis.createClient({
  url: "rediss://" + cacheHostName + ":6380",
  password: cachePassword,
});

redisClient.on("connect", () => logger.info("Redis connected"));

const deleteKey = async (key) => {
  return await redisClient.del(key);
};
const getKey = async (key) => {
  return await redisClient.get(key);
};
const setKey = async (key, value, expire = 0, setIfNotExist = false) => {
  let params = [key, value];
  if (expire > 0) params.push("EX", expire);
  if (setIfNotExist) params.push("NX");

  let response = await redisClient.sendCommand("SET", params);

  if (response) {
    return true;
  } else return false;
};

module.exports = {
  setKey,
  getKey,
  deleteKey,
};

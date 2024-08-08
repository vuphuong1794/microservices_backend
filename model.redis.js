'use strict'
const { createClient } = require('redis');

const client = createClient();

// Connect to Redis
client.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await client.connect();
})();

const get = async (key) => {
  try {
    return await client.get(key);
  } catch (err) {
    console.error('Error in get:', err);
    throw err;
  }
};

const set = async (key, value) => {
  try {
    return await client.set(key, value);
  } catch (err) {
    console.error('Error in set:', err);
    throw err;
  }
};

const incrby = async (key, count) => {
  try {
    return await client.incrBy(key, count);
  } catch (err) {
    console.error('Error in incrby:', err);
    throw err;
  }
};

const exists = async (key) => {
  try {
    return await client.exists(key);
  } catch (err) {
    console.error('Error in exists:', err);
    throw err;
  }
};

//neu co key ton tai thi setnx moi lam viec, thuc hien dung 1 lan (hoat dong nguyen tu)
const setnx = async (key, value) => {
  try {
    const result = await client.set(key, value, { NX: true });
    return result !== null;
  } catch (err) {
    console.error('Error in setnx:', err);
    throw err;
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  await client.quit();
  process.exit(0);
});

module.exports = {
  get,
  set,
  incrby,
  exists,
  setnx,
};
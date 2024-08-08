'use strict'
const redis = require('redis')

const client = redis.createClient();

// Connect to Redis
client.connect().catch(console.error);

// Handle connection errors
client.on('error', err => console.error('Redis Client Error', err));

const get = async (key) => {
    try {
        return await client.get(key);
    } catch (err) {
        console.error('Error in get:', err);
        throw err;
    }
};

const set = async (key, count) => {
    try {
        return await client.set(key, count);
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

const decrby = async (key, count) => {
    try {
        return await client.decrBy(key, count);
    } catch (err) {
        console.error('Error in decrby:', err);
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
const setnx = async (key, count) => {
    try {
        return await client.setNX(key, count);
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
    decrby
}
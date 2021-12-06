'use strict';

import {Utils} from './utils.service.js';

export const DbService = {
    query,
    get,
    delete: remove,
    post,
    put,
    insert
}

const ID_FIELD = '_id';

function query(collectionName) {
    var collection = Utils.loadFromStorage(collectionName);
    if (!collection) collection = [];
    return Promise.resolve(collection);
}

async function get(collectionName, id) {
    var collection = await query(collectionName);
    return collection.find(curr => curr[ID_FIELD] === id);
}

async function remove(collectionName, id) {
    var collection = await query(collectionName);
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id);
    if (idx === -1) throw new Error('something went wrong');
    collection.splice(idx, 1);
    
    Utils.storeToStorage(collectionName, collection);
    return Promise.resolve();
}

async function post(collectionName, item) {
    var collection = await query(collectionName);

    item[ID_FIELD] = Utils.getRandomId();
    collection.push(item);

    Utils.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function put(collectionName, item) {
    var collection = await query(collectionName);

    let idx = collection.findIndex(curr => curr[ID_FIELD] === item[ID_FIELD]);
    if (idx === -1) throw new Error('something went wrong');
    collection[idx] = item;

    Utils.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function insert(collectionName, items) {
    var collection = await query(collectionName);
    items.forEach(curr => curr[ID_FIELD] = Utils.getRandomId());
    collection.push(...items);
    
    Utils.storeToStorage(collectionName, collection);
    return Promise.resolve();
}
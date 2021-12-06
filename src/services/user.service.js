import { DbService } from './db-service.js';
import { Utils } from './utils.service.js';
import initialUsers from './users.json';
import contactService from './contact.service'

const KEY = 'users';

export default {
    query,
    get,
    save,
    getEmptyUser,
    login,
    logout,
    getLoggedInUser,
    getByEmail,
    transferBtc
};

async function login(creds) {
    const user = await getByEmail(creds.email);
    if (user.password !== creds.password) {
        throw new Error('Wrong username or email');
    }
    Utils.storeToStorage('loggedInUser', user);
    return user;
}


async function logout() {
    localStorage.removeItem('loggedInUser');
    return Promise.resolve();
}


function getLoggedInUser() {
    const user = localStorage.loggedInUser;
    if (!user) return null;
    return JSON.parse(user);
}

async function query() {
    var users = await DbService.query(KEY);
    if (!users || !users.length) {
        users = initialUsers;
        await DbService.insert(KEY, users);
    }
    return users;
}

async function getByEmail(email) {
    const users = await query();
    const user = users.find(user => user.email === email);
    if (!user) {
        throw new Error('Unknown User');
    }
    return Promise.resolve(user);
}


async function get(id) {
    const user = await DbService.get(KEY, id);
    if (!user) {
        throw new Error('Unknown User');
    }
    return user;
}

function save(user) {
    if (user._id) {
        return DbService.put(KEY, user);
    }
    else {
        const coins = +100
        user = {...user, coins, moves:[]}
        DbService.post(KEY, user);
        Utils.storeToStorage('loggedInUser', user)
        return user
    } 
}


function getEmptyUser() {
    return {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        moves: [],
        isAdmin: false
    };
}

//User realted coins transfer

async function transferBtc(contactId, amount, rate) {
    const user = await getLoggedInUser()
    if (amount <= 0) return Promise.reject(`Amount can't be 0 or less`)
    if (user.coins - amount < 0) return Promise.reject('Insufficient funds')
    const inUsd = amount * rate
    user.moves.unshift({
        amount,
        inUsd,
        balanceBefore: user.coins,
        contact: await contactService.get(contactId),
        transferedAt: Date.now(),
        id: Utils.getRandomId()
    })
    user.coins -= amount;
    save(user)
    Utils.storeToStorage('loggedInUser', user);
    return Promise.resolve()
}
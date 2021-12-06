'use strict';

import {DbService} from './db-service.js';

const KEY = 'contacts';

export default {
    query,
    get,
    remove,
    save,
}


async function query() {
    var contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
        await DbService.insert(KEY, contacts);
    }
    return contacts;
}

async function get(id) {
    const contact = await DbService.get(KEY, id);
    if (!contact) {
        throw new Error('Unknown Contact')
    }
    return contact
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(contact) {
    if (contact._id) return DbService.put(KEY, contact);
    else return DbService.post(KEY, contact)
}

function _createDefaultContacts() {
    return [
        _createContact('Dominique','Soto','dmsoto@gmail.com','+1-505-555-778'),
        _createContact('Floyd','Rutledge', 'flrut@gmail.com','+1-505-555-778'),
        _createContact('Grace','James', 'grjame@gmail.com','+1-505-555-778'),
        _createContact('Bric','Bay', 'erkay@gmail.com','+1-505-555-778'),
        _createContact('Cric','Cay', 'crkay@gmail.com','+1-505-555-778'),
        _createContact('Dric','Day', 'drkay@gmail.com','+1-505-555-778'),
        _createContact('Gric','Gay', 'grkay@gmail.com','+1-505-555-778'),
        _createContact('Hric','Hay', 'hrkay@gmail.com','+1-505-555-778'),
        _createContact('Iric','Iay', 'irkay@gmail.com','+1-505-555-778'),
        _createContact('Jric','Jay', 'jrkay@gmail.com','+1-505-555-778'),
    ];
}

function _createContact(firstName,lastName, email, phone) {
    return {
        firstName,
        lastName,
        email,
        phone
    }
}
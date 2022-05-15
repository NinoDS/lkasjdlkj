const Database = require('./database');
const db = new Database({
    file: './data/accounts.json',
    data: {
        accounts: [],
        nextId: 1
    }
});

// Functions

function getAccounts() {
    return db.data.accounts;
}

function getAccount(id) {
    return db.data.accounts.find(account => account.id === id);
}

function getAccountByUsername(username) {
    return db.data.accounts.find(account => account.username === username);
}

function createAccount(username, password, role) {
    const account = {
        id: db.data.nextId,
        username,
        password,
        role
    };
    if(db.data.accounts.find(account => account.username === username)) {
        throw new Error('Username already exists');
    }
    db.data.accounts.push(account);
    db.data.nextId++;
    db.save();
    return account;
}

function updateAccount(id, newAccount) {
    const account = getAccount(id);
    if (account !== undefined) {
        for (const key in newAccount) {
            account[key] = newAccount[key];
        }
        db.save();
    }
}

function deleteAccount(id) {
    const account = getAccount(id);
    if (account !== undefined) {
        db.data.accounts = db.data.accounts.filter(account => account.id !== id);
        db.save();
    }
    return account;
}

function checkCredentials(username, password) {
    const account = getAccountByUsername(username);
    if (account !== undefined && account.password === password) {
        return account;
    }
    return undefined;
}

module.exports = {
    getAccounts,
    getAccount,
    getAccountByUsername,
    createAccount,
    updateAccount,
    deleteAccount,
    checkCredentials
};
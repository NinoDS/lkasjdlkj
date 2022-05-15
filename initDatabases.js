const Database = require("./database");
const fs = require("fs");
if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
}
const {createAccount} = require("./accounts");

let requests = new Database({
    file: './data/requests.json',
    data: {
        requests: [],
        nextId: 1
    }
});
let accounts = new Database({
    file: './data/accounts.json',
    data: {
        accounts: [],
        nextId: 1
    }
});
let lockers = new Database({
    file: './data/lockers.json',
    data: {
        lockers: [],
        nextId: 1
    }
});

createAccount("admin", "PASSWORD", "admin");
createAccount("user", "PASSWORD", "user");
createAccount("guest", "", "guest");


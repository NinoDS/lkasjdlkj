const express = require('express');
const router = express.Router();
const fs = require('fs');
const {checkCredentials} = require("../accounts");


const routeFiles = fs.readdirSync('./routes/requests/').filter(file => file.endsWith('.js'));

for (const file of routeFiles) {
    const route = require(`./requests/${file}`);
    const method = route.method.toLowerCase();
    const allowed = route.allowed || ['admin'];
    const path = route.path;
    const handle = route.handle;
    router[method](path, function (req, res) {
        const { username, password } = req.headers;
        const account = checkCredentials(username, password);
        if (account && allowed.includes(account.role)) {
            handle(req, res, account);
        } else {
            res.status(401).send('Unauthorized');
        }
    });
}

module.exports = router;
const {createAccount} = require("../../accounts");
module.exports = {
    route: '/',
    method: 'POST',
    allowed: ['admin'],
    handle(req, res, account) {
        const newAccount = req.body;
        if (newAccount === undefined) {
            res.status(400).send("Missing account information");
        } else {
            res.send(createAccount(newAccount.username, newAccount.password, newAccount.role));
        }
    }
}
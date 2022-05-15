const {getAccount, updateAccount} = require("../../accounts");
module.exports = {
    path: '/:id',
    method: 'PUT',
    allowed: ['admin', 'user'],
    handler(req, res, account) {
        const { id } = req.params;
        const newAccount = req.body;
        if (getAccount(id) !== account && account.role !== 'admin') {
            res.status(403).send('Forbidden');
            return;
        }
        if (id !== account.id) {
            res.status(403).send('Forbidden');
            return;
        }
        updateAccount(id, newAccount);
        res.json(newAccount);
    }
}
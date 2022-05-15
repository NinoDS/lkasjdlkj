const {deleteAccount} = require("../../accounts");
module.exports = {
    path: '/:id',
    method: 'DELETE',
    allowed: ['admin'],
    handle(req, res, account) {
        const { id } = req.params;
        deleteAccount(id);
        res.status(200).json({
            success: true,
            message: 'Account deleted'
        });
    }
}
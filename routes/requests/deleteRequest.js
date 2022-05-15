const {deleteRequest} = require("../../requests");
module.exports = {
    path: '/:id',
    method: 'DELETE',
    allowed: ['admin', 'user'],
    handle(req, res, account) {
        const { id } = req.params;
        deleteRequest(id);
        res.json({
            success: true,
            message: 'Request deleted'
        });
    }
}
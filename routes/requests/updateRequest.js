const {getRequestById, updateRequest} = require("../../requests");
module.exports = {
    path: '/:id',
    method: 'PUT',
    allowed: ['admin', 'user'],
    handle(req, res, account) {
        const { id } = req.params;
        const newRequest = req.body;
        const oldRequest = getRequestById(id);
        for (const key in newRequest) {
            oldRequest[key] = newRequest[key];
        }
        updateRequest(oldRequest);
        res.json(oldRequest);
    }
}
const {getRequests} = require("../../requests");
module.exports = {
    path: '/',
    method: 'GET',
    allowed: ['admin', 'user'],
    handle(req, res, account) {
        res.json(getRequests());
    }
}
const {addRequest} = require("../../requests");
module.exports = {
    path : '/',
    method : 'POST',
    allowed: ['guest', 'user', 'admin'],
    handle(req, res, account) {
        const request = req.body;
        addRequest(request);
        res.send({
            success: true,
            message: "Request added"
        });
    }
}
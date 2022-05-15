const {checkCredentials} = require("../../accounts");
module.exports = {
    path: '/check',
    method: 'POST',
    allowed: ['guest', 'user', 'admin'],
    handle(req, res, account) {
        const {username, password} = req.body;
        if (checkCredentials(username, password)) {
            res.status(200).json({
                success: true,
                message: 'Credentials are correct'
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Credentials are incorrect'
            });
        }
    }
}
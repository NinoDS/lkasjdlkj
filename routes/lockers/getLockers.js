const {getLockers} = require("../../lockers");
module.exports = {
    path: '/',
    method: 'GET',
    handle (req, res, account) {
        const lockers = getLockers();
        if (account.role !== 'admin') {
            lockers.forEach(locker => {
                delete locker.sepa;
            });
        }
        res.send(lockers);
    }
}
const {getLockers, getLocker} = require("../../lockers");
module.exports = {
    path: '/:lockerId',
    method: 'GET',
    handler: async (req, res, account) => {
        const {lockerId} = request.params;
        const locker = getLocker(lockerId);
        if (account.role !== 'admin') {
            delete locker.sepa;
        }
        res.send(locker);
    }
};
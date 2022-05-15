const {getLocker, updateLocker} = require("../../lockers");
module.exports = {
    path: '/:lockerId',
    method: 'PUT',
    handle(req, res, account) {
        const { lockerId } = req.params;
        const newLocker = req.body;
        const oldLocker = getLocker(lockerId);
        for (let key in newLocker) {
            oldLocker[key] = newLocker[key];
        }
        updateLocker(lockerId, oldLocker);
    }
}
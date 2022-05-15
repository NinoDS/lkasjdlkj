const Database = require('./database');
const db = new Database({
    file: './data/lockers.json',
    data: {
        lockers: [],
        nextLocker: 1
    }
});

function getLockers() {
    return db.data.lockers;
}

function getLocker(id) {
    return db.data.lockers.find(locker => locker.id === id);
}

function getNextLockerId() {
    return db.data.nextLocker++;
}

function createLocker(locker) {
    db.data.lockers.push(locker);
    db.save();
}

function updateLocker(id, locker) {
    const index = db.data.lockers.findIndex(locker => locker.id === id);
    db.data.lockers[index] = locker;
    db.save();
}


module.exports = {
    getLockers,
    getLocker,
    getNextLockerId,
    createLocker,
    updateLocker
};
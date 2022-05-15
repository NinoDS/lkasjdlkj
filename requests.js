const Database = require('./database');
let db = new Database({
    file: './data/requests.json',
    data: {
        requests: [],
        nextId: 1
    }
});

// Functions

function getRequests() {
    return db.data.requests;
}

function getRequestById(id) {
    return db.data.requests.find(request => request.id === id);
}

function addRequest(request) {
    request.id = db.data.nextId;
    db.data.requests.push(request);
    db.data.nextId++;
    db.save();
}

function updateRequest(id, request) {
    let index = db.data.requests.findIndex(request => request.id === id);
    db.data.requests[index] = request;
    db.save();
}

function deleteRequest(id) {
    let index = db.data.requests.findIndex(request => request.id === id);
    db.data.requests.splice(index, 1);
    db.save();
}

module.exports = {
    getRequests,
    getRequestById,
    addRequest,
    updateRequest,
    deleteRequest
};
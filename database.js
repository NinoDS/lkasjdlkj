const fs = require('fs');

class Database {
    constructor(options) {
        this.file = options.file;
        this.data = options.data || {};
        if (!fs.existsSync(this.file)) {
            fs.writeFileSync(this.file, JSON.stringify(this.data));
        } else {
            this.data = JSON.parse(fs.readFileSync(this.file, 'utf8'));
        }
    }
    load() {
        if (fs.existsSync(this.file)) {
            this.data = JSON.parse(fs.readFileSync(this.file, 'utf8'));
        }

        return this.data;
    }

    save() {
        fs.writeFileSync(this.file, JSON.stringify(this.data));

        return this.data;
    }

    get(key) {
        return this.data[key];
    }

    set(key, value) {
        this.data[key] = value;

        return this.save();
    }

    delete(key) {
        delete this.data[key];

        return this.save();
    }

    clear() {
        this.data = {};

        return this.save();
    }

    keys() {
        return Object.keys(this.data);
    }

    values() {
        return Object.values(this.data);
    }

    entries() {
        return Object.entries(this.data);
    }

    has(key) {
        return this.keys().includes(key);
    }

    size() {
        return this.keys().length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    isNotEmpty() {
        return !this.isEmpty();
    }

    hasKey(key) {
        return this.has(key);
    }

    hasValue(value) {
        return this.values().includes(value);
    }

    hasEntry(key, value) {
        return this.entries().includes([key, value]);
    }
}

module.exports = Database;
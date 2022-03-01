
module.exports = class Playlist {

    static queue = [];

    static add(link) {
        this.queue.push(link);
    }

    static clear() {
        this.queue = [];
    }

    static get next() {
        return this.queue.shift();
    }

    static get isEmpty() {
        return this.queue.length == 0;
    }

    static get length() {
        return this.queue.length;
    }
}
const { getUserStats, getUserQueue, inGame, getMatchByGameId, getMatchByUserId, getTeamByTeamId, getTeamByUserId } = require('./functions');

/**
 * @property {String} token Elite API Token
 */
class EliteAPI {
    /**
     * Main Class
     * @param {String} token Elite Api Token
     */
    constructor(token) {
        if (!token) throw new TypeError('Elite API Token is missing.');
        this._token = token;
    }

    get version() {
        return require('../package.json').version;
    }

    get token() {
        return this._token;
    }

    /**
     * Get User Stats
     * @param {String} id The users id who you're getting stats from
     */
    async getUserStats(id = this.id) {
        if (!id) throw new TypeError('Missing User ID');
        return getUserStats(id, this._token);
    }

    /**
     * Get User Queue
     * @param {String} id The id of the users whos queue you're getting
     */
    async getUserQueue(id = this.id) {
        if (!id) throw new TypeError('Missing User ID');
        return getUserQueue(id, this._token);
    }

    /**
     * Check if user is in a game
     * @param {String} id The if og the user who you're checking if they're in a game
     */
    async inGame(id = this.id) {
        if (!id) throw new TypeError('Missing User ID');
        return inGame(id, auth);
    }

    /**
     * Get match information by game id
     * @param {String} id The game id of the matching you're searching
     */
    async getMatchByGameId(id = this.id) {
        if (!id) throw new TypeError('Missing Game ID');
        return getMatchByGameId(id, this._token);
    }

    /**
     * Get match information by user id
     * @param {String} id Find game information by the player user id
     */
    async getMatchByUserId(id = this.id) {
        if (!id) throw new TypeError('Missing User ID');
        return getMatchByUserId(id, this._token);
    }

    /**
     * Get team information by team id
     * @param {String} id The team id of the team you're searching
     */
    async getTeamByTeamId(id = this.id) {
        if (!id) throw new TypeError('Missing Game ID');
        return getTeamByTeamId(id, this._token);
    }

    /**
     * Get team information by user id
     * @param {String} id Find team information by user id
     */
    async getTeamByUserId (id = this.id) {
        if (!id) throw new TypeError('Missing User ID');
        return getTeamByUserId (id, this._token);
    }
}

module.exports = EliteAPI;

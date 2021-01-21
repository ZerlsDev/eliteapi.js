const { get } = require('./functions');
const config = require('./config');

/**
 * @property {String} token Elite API Token
 */
class EliteAPI {
    /**
     * Main Class
     * @param {String} token Elite Api Token
     */
    constructor(token) {
        if (!token) throw new TypeError('Elite API Token is missing. Generate your API key at https://elitescrims.xyz/developer');
        this._token = token;
    }

    /**
     * Get User Stats
     * @param {String} id The users id who you're getting stats from
     */
    async getUserStats(id = this.id) {
        if (!id) throw new TypeError('User ID is missing');
        return get(id, this._token, config.endpoints.get_user_stats);
    }

    /**
     * Get User Queue
     * @param {String} id The id of the users whos queue you're getting
     */
    async getUserQueue(id = this.id) {
        if (!id) throw new TypeError('User ID is missing');
        return get(id, this._token, config.endpoints.get_user_queue);
    }

    /**
     * Check if user is in a game
     * @param {String} id The if og the user who you're checking if they're in a game
     */
    async inGame(id = this.id) {
        if (!id) throw new TypeError('User ID is missing');
        return get(id, this._token, config.endpoints.in_game);
    }

    /**
     * Get match information by game id
     * @param {String} id The game id of the matching you're searching
     */
    async getMatchByGameId(id = this.id) {
        if (!id) throw new TypeError('Game ID is missing');
        return get(id, this._token, config.endpoints.get_match_by_game_id);
    }

    /**
     * Get match information by user id
     * @param {String} id Find game information by the player user id
     */
    async getMatchByUserId(id = this.id) {
        if (!id) throw new TypeError('User ID is missing');
        return get(id, this._token, config.endpoints.get_match_by_user_id);
    }

    /**
     * Get team information by team id
     * @param {String} id The team id of the team you're searching
     */
    async getTeamByTeamId(id = this.id) {
        if (!id) throw new TypeError('Team ID is missing');
        return get(id, this._token, config.endpoints.get_team_by_team_id);
    }

    /**
     * Get team information by user id
     * @param {String} id Find team information by user id
     */
    async getTeamByUserId (id = this.id) {
        if (!id) throw new TypeError('User ID is missing');
        return get (id, this._token, config.endpoints.get_team_by_user_id);
    }
}

module.exports = EliteAPI;

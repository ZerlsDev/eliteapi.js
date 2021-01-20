module.exports = {
    domain: 'elitescrims.xyz/api/v1',
    endpoints: {
        get_user_stats: '/stats/:id',
        get_user_queue: '/queue/:id',
        in_game: '/ingame/:id',
        get_match_by_game_id: '/match-by-id/:id',
        get_match_by_user_id: '/match-by-user/:id',
        get_team_by_team_id: '/team-by-id/:id',
        get_team_by_user_id: '/team-by-user/:id'
    }   
};

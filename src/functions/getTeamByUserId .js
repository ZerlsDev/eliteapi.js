const fetch = require('node-fetch');
const config = require('../config');

module.exports = async function (id, authorization) {
    return fetch(`https://${config.domain}${config.endpoints.get_team_by_user_id.replace(':id', `${id}`)}`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': authorization
        }
    }).then(res => res.json()).then(async json => { return await json; }).catch(async error => { console.log(error); });
};

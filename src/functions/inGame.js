const fetch = require('node-fetch');
const config = require('../config');

module.exports = async function (id) {
    return fetch(`https://${config.domain}${config.endpoints.in_game.replace(':id', `${id}`)}`)
        .then(res => res.json())
        .then(async json => {
            return await json;
        }).catch(async error => {
            console.log(error);
        });
};

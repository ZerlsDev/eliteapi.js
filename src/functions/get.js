const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async function (id, authorization, endpoint) {
    return fetch(`https://${config.domain}${endpoint.replace(':id', `${id}`)}`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': authorization
        }
    }).then(res => res.json()).then(async json => { return await json; }).catch(async error => { throw new Error(error); });
};

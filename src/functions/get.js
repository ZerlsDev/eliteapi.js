const fetch = require('node-fetch');

module.exports = async function (id, authorization, endpoint) {
    return fetch(`https://${config.domain}${config.endpoints[endpoint].replace(':id', `${id}`)}`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': authorization
        }
    }).then(res => res.json()).then(async json => { return await json; }).catch(async error => { throw new Error(error); });
};

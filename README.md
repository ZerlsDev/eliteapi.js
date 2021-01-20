# eliteapi.js

eliteapi.js is a node.js API wrapper for Elite Creative allowing you to easily interact with the API.

# Installation
To install **eliteapi.js**, run the following command into your terminal from your bot folder:
> Install eliteapi.js
```
npm install eliteapi.js
```

# Example Usage
```js
const EliteCreative = require('../index');
const elite = new EliteCreative('d6c5141c53403f4ad6ef93c2db89591676b13c4a'); // Generate your API key at https://elitescrims.xyz/developer

elite.getUserStats('some user id').then((result => console.log(resullt));
```

# Methods

* getUserStats(userId) - Return the users Elite Creative statistics
* getUserQueue(userId) - Returns information about the users queue (if they're queuing)
* inGame(userId) - Whether or not the user is in an on going match
* getMatchByGameId(gameId) - Get a games statistics by it's game Id
* getMatchByUserId(userId) - Get a games statistics by one of the players (either player 1 or 2) 
* getTeamByTeamId(teamId) - Return information about a team by it's Id
* getTeamByUserId(userId) - Return information about a team by either the captain or member's Id

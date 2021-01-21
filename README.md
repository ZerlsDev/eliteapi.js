# eliteapi.js

eliteapi.js is a node.js API wrapper for Elite Creative allowing you to easily interact with the API.

# Installation
To install **eliteapi.js**, run the following command into your terminal from your bot folder:

> Install eliteapi.js:
>
>```
>npm install eliteapi.js
>```

# Example Usage

```js
const EliteCreative = require('eliteapi.js');
const elite = new EliteCreative('d6c5141c53403f4ad6ef93c2db89591676b13c4a'); // Generate your API key at https://elitescrims.xyz/developer

elite.getUserStats('some user id').then((result => console.log(result)));
```

# Methods

* [getUserStats(userId)](#getuserstatsuserid) - Return the users Elite Creative statistics
* [getUserQueue(userId)](#getuserqueueuserid) - Returns information about the users queue (if they're queuing)
* [inGame(userId)](#ingameuserid) - Whether or not the user is in an on going match
* [getMatchByGameId(gameId)](#getmatchbygameidgameid) - Get a games statistics by it's game Id
* [getMatchByUserId(userId)](#getmatchbyuseriduserid) - Get a games statistics by one of the players (either player 1 or 2) 
* [getTeamByTeamId(teamId)](#getteambyteamidteamid) - Return information about a team by it's Id
* [getTeamByUserId(userId)](#getteambyuseriduserid) - Return information about a team by either the captain or member's Id

## getUserStats(userId)
Return the users Elite Creative statistics
```js
elite.getUserStats('some user id').then((result => console.log(result)));
```

## getUserQueue(userId)
Returns information about the users queue (if they're queuing)
```js
elite.getUserQueue('some user id').then((result => console.log(result)));
```

## inGame(userId)
Whether or not the user is in an on going match
```js
elite.inGame('some user id').then((result => console.log(result)));
```

## getMatchByGameId(gameId)
Get a games statistics by it's game Id
```js
elite.getMatchByGameId('some game id').then((result => console.log(result)));
```

## getMatchByUserId(userId)
Get a games statistics by one of the players (either player 1 or 2) 
```js
elite.getMatchByUserId('some user id').then((result => console.log(result)));
```

## getTeamByTeamId(teamId)
Return information about a team by it's Id
```js
elite.getTeamByTeamId('some team id').then((result => console.log(result)));
```

## getTeamByUserId(userId)
Return information about a team by either the captain or member's Id
```js
elite.getTeamByUserId('some user id').then((result => console.log(result)));
```

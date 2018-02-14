const config = require('../config.json');
const superagent = require('superagent');

const e = module.exports = {};

e.all = async (bot) => {
    const count = bot.guilds.size;

    await superagent.post('https://discordbots.org/api/bots/412006490132447249/stats').set({
        'Authorization': config.token.botlist.dbl,
        'Content-Type': 'application/json'
    }).send({
        'server_count': count
    }).catch((err) => {
        console.error(err);
    });

    /* await superagent.post('https://bots.discord.pw/api/bots/412006490132447249/stats').set({
        'Authorization': config.token.botlist.dbots,
        'Content-Type': 'application/json'
    }).send({
        'server_count': count
    }).catch((err) => {
        console.error(err);
    });

    await superagent.post(`https://www.carbonitex.net/discord/data/botdata.php`).set({
        'Content-Type': 'application/json'
    }).send({
        'key': config.token.botlist.carbon,
        'servercount': count
    }).catch((err) => {
        console.error(err);
    }); */
}
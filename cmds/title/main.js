const u = require('../../util/main.js');
const c = module.exports = {};
c.settings = require('./settings.json');
c.process = async (bot, msg, cmdArgs) => {
    let argsJoin = cmdArgs.join(' ');
    if (!cmdArgs[0]) return bot.createMessage(msg.channel.id, '❌ Title name or IMDb ID required.');
    let message = await bot.createMessage(msg.channel.id, `ℹ Getting information for the title '${argsJoin}'...`);
    let title = await u.api.getTitle(argsJoin);
    if (title.Response && title.Response === 'False') return message.edit('❌ No results found.');
    if (title.Error) return (`❌ ${title.Error}`);
    let poster = title.Poster;
    if (title.Poster === 'N/A') poster = '';
    message.edit({embed: {
        title: title.Title,
        description: title.Plot,
        fields: [{
            name: 'Released',
            value: title.Released,
            inline: true
        }, {
            name: 'Runtime',
            value: title.Runtime,
            inline: true
        }, {
            name: 'Rated',
            value: title.Rated,
            inline: true
        }, {
            name: 'Genre',
            value: title.Genre,
            inline: true
        }, {
            name: 'Type',
            value: title.Type,
            inline: true
        }, {
            name: 'Country',
            value: title.Country,
            inline: true
        }, {
            name: 'Language',
            value: title.Language,
            inline: true
        }, {
            name: 'Awards',
            value: title.Awards,
            inline: true
        }, {
            name: 'Director',
            value: title.Director,
            inline: true
        }, {
            name: 'Writer',
            value: title.Writer,
            inline: true
        }, {
            name: 'Actors',
            value: title.Actors,
            inline: true
        }, {
            name: 'Metascore',
            value: title.Metascore,
            inline: true
        }, {
            name: 'Rating',
            value: title.imdbRating,
            inline: true
        }, {
            name: 'Votes',
            value: title.imdbVotes,
            inline: true
        }, {
            name: 'IMDb ID',
            value: title.imdbID,
            inline: true
        }],
        color: 0xE6B91E,
        url: `http://www.imdb.com/title/${title.imdbID}/`,
        thumbnail: {
            url: poster
        }
    }});
}

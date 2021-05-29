const { Collection, Client, Discord } = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
///
const { Player } = require('discord-player');
client.player = new Player(client);
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
///
for (const file of events) {
    console.log(`Loaded ${file} event`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loaded ${file} event`);
    const event = require(`./pevents/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
///
client.login(token)

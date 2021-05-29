const { MessageEmbed } = require('discord.js')
const prefix = require('../../config.json').prefix
module.exports = {
    name: 'seek',
    category: 'music',
    description: 'Jump through time',
    usage: 'seek [seconds]',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        let ms;
        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice as the bot.`);
        if (!args[0]) {
            return message.channel.send(`${preix}seek [seconds]`)
        }
        if (!client.player.getQueue(message)) return message.channel.send(`Nothing is playing now.`);
        try {
            ms = milliseconds(args[0]);
        } catch (err) {
            return message.channel.send('Expected format `00:00:00`')
        }
        if (!Number.isInteger(ms)) {
            return message.channel.send('Expected format `00:00:00`');
        }
        try {
            client.player.seek(message, ms)
            message.channel.send('Jumping to `' + args[0] + '`.');
        } catch (err) {
            message.channel.send(`Error: `+ "```" + err + "```")
        }

    }
}
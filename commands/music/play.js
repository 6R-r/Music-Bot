const { MessageEmbed } = require('discord.js');
const config = require('../../config.json')
const prefix = config.prefix
module.exports = {
    name: 'play',
    category: 'music',
    description: 'Play song or resume it',
    usage: 'play [song name]',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice as the bot.`);
        if (!args[0] && client.player.getQueue(message).paused) {
            client.player.resume(message);
            client.player.pause(message);
            client.player.resume(message);
            return message.channel.send(`Resumed.`);
        }

        if (!args[0]) return message.channel.send(`${prefix}play [song name]`);
        try {
            client.player.play(message, args.join(" "), { firstResult: true })
        } catch (err) {
            message.channel.send(`Error: `+ "```" + err + "```")
        }
    }
}
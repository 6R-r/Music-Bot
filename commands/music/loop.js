const { MessageEmbed } = require('discord.js')
const prefix = require('../../config.json').prefix
module.exports = {
    name: 'loop',
    category: 'music',
    description: 'loop the current song or queue',
    usage: 'loop [queue/song]',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice as the bot.`);
        if (!client.player.getQueue(message)) return message.channel.send(`Nothing is playing now.`);
        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`Disabled.`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`Looping **Queue**`);
            };
        } else if (args.join(" ").toLowerCase() === 'song') {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`Disabled.`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`Looping **Current Song**`);
            };
        } else {
            message.channel.send(`${prefix}loop [queue/song]`)
        }
    }
}
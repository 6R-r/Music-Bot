const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'pause',
    category: 'music',
    description: 'Pause the current song',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice as the bot.`);
        if (!client.player.getQueue(message)) return message.channel.send(`Nothing is playing now.`);
        if (client.player.getQueue(message).paused) return message.channel.send(`The song already paused.`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`Paused.`);
    }
}
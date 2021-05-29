const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'clear',
    category: 'music',
    description: 'Clear the queue',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice as the bot.`);
        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`Nothing is playing now.`);

        try {
            client.player.clearQueue(message);
            message.channel.send('Cleared.');
        } catch (error) {
            message.channel.send(`Error: `+ "```" + err + "```")
        }
    }
}

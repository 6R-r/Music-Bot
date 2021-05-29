const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'join',
    category: 'music',
    description: 'Connect to a voice channel',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (client.player.getQueue(message)) return message.channel.send(`I'm playing song now.`);
        try {
            message.member.voice.channel.join();
            message.channel.send(`Joined **${message.member.voice.channel.name}**`);
        } catch (error) {
            message.channel.send(`Error: ${error}`);
            console.log(error);
        }
    }
}
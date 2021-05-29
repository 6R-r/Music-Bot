const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'leave',
    category: 'music',
    description: 'Leave a voice channel',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice as the bot.`);
        if(!message.guild.me.voice.channel) {
            return message.channel.send(`I'm not in a voice channel`);
        }
        try {
            message.member.voice.channel.leave();
            message.channel.send(`Leaved **${message.member.voice.channel.name}**`);
        } catch (error) {
            message.channel.send(`Error: ${error}`);
            console.log(error);
        }
    }
}
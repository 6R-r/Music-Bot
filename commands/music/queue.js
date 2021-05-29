const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'queue',
    category: 'music',
    description: 'The current queue',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        if (!message.member.voice.channel) return message.channel.send(`Join voice channel.`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Join the same voice as the bot.`);
        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`No music playing`);

        message.channel.send(`**Queue for ${message.guild.name} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `\`${i + 1}.\`  ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 10).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));

    }
}